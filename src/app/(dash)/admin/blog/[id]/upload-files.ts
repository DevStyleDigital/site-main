import { uploadFile } from './handle-upload-file';
import { supabase } from '@/services/supabase';

export async function uploadFiles(
  eid: string,
  path: string,
  files: any[] | undefined,
  defaultFiles?: ({ extension: string } & Omit<any, 'file'>)[],
) {
  const [filesPrepared, filesRemoved] = defaultFiles
    ? (files || []).reduce(
        (acc, item) => {
          const defaultFilesId = defaultFiles.map(({ id }) => id);
          const defaultFile = defaultFiles.find(({ id }) => item.id === id);
          const fileModified = Object.entries(item)
            .filter(([k, v]) =>
              k === 'file' || k === 'eid' || k === 'id'
                ? false
                : k === 'id'
                  ? true
                  : defaultFile?.[k as keyof typeof defaultFile] !== v,
            )
            .reduce((acc, [k, v]) => ({ ...acc, [k]: v }), {}) as Record<string, string>;
          if (defaultFilesId.includes(item.id) && Object.keys(fileModified).length)
            acc[0].push({ ...fileModified, id: item.id } as any);
          if (!defaultFilesId.includes(item.id)) acc[0].push(item);
          const filesIds = files?.map(({ id }) => id) || [];

          const removedItems = [];
          for (let i = 0; i < defaultFilesId.length; i++) {
            if (!filesIds.includes(defaultFilesId[i]))
              removedItems.push(`${defaultFilesId[i]}.${defaultFiles[i].extension}`);
          }

          acc[1] = removedItems;
          return acc;
        },
        [[], []] as [any[], string[]],
      )
    : [[...(files || [])], []];

  if (filesRemoved.length) {
    await supabase.storage
      .from(`blogPost/${eid}`)
      .remove(filesRemoved.map((id: any) => `${path}/${id}`));

    await supabase.from(path).delete().in('id', filesRemoved);
  }

  if (!filesPrepared.length) return 'success';

  const filesRes = await Promise.all(
    filesPrepared.map(async (file: any) => {
      return {
        ...(file.file
          ? await uploadFile(eid, path, file)
              .then((res) => res)
              .catch(() => ({ error: 'err' }))
          : file),
        eid,
      };
    }),
  );

  let hasErr = false;
  for (let i = 0; i < filesRes.length; i++) {
    if ((filesRes[i] as { error?: string }).error === 'err') {
      hasErr = true;
      break;
    }
  }

  if (hasErr) throw 'err';

  hasErr = await supabase
    .from(path)
    .upsert(filesRes)
    .then((res) => {
      if (res.error) return true;
      return false;
    });

  if (hasErr) throw 'err';
  return 'success';
}
