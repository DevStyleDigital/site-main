
import { supabase } from '@/services/supabase';

export async function uploadFile(
  eid: string,
  folder: string | null,
  { file, ...item }: any,
  defaultUrl?: string,
) {
  const newFile = file[0].file
  const nameDotSplit = newFile.name.split('.');
  const extension = nameDotSplit[nameDotSplit.length - 1];

  if (defaultUrl) {
    const newurl = defaultUrl.split('/')
    const name = newurl[newurl.length - 1];
    await supabase.storage.from(`blogPost-${eid}`).remove([name]);
  }
  const hasError = await supabase.storage
    .from(`blogPost-${eid}`)
    .upload(`${folder ? `${folder}/` : ''}${item.id}.${extension}`, newFile)
    .then(() => false)
    .catch(() => true);

  if (hasError) throw 'err';

  return {
    url: supabase.storage
      .from(`blogPost-${eid}`)
      .getPublicUrl(`${folder ? `${folder}/` : ''}${item.id}.${extension}`).data
      .publicUrl,
    ...item,
  };
}

export async function handleUploadBanner(
  eid: string,
  file: File,
  id: string,
  label: string,
  defaultUrl?: string,
) {
  return {
    ...(await uploadFile(`${eid}`, null, { file, id, label }, defaultUrl)
      .then((res) => ({ error: undefined, ...res }))
      .catch(() => ({ error: 'err' }))),
    eid,
  };
}
