import { v4 as uuid } from 'uuid';
import { handleUploadBanner, uploadFile } from './handle-upload-file';
import { supabase } from '@/services/supabase';
import { toast } from 'react-toastify';
import { deletePost } from '@/utils/posts-func';

export async function onSubmitCreate(
  data: any,
  fields: {
    banner: any;
    autorPhoto: any;
  },
) {
  const id = uuid();
  await supabase.storage.createBucket(`blogPost-${id}`, { public: true });
  try {
    const banner = await handleUploadBanner(id, fields.banner!, 'banner', 'Banner');
    const values = { ...data, id };

    if (banner?.error) throw 'err';

    const bannerAutor = await handleUploadBanner(
      id,
      fields.autorPhoto!,
      'autorPhoto',
      'AutorPhoto',
    );

    if (bannerAutor?.error) throw 'err';

    const hasError = await supabase
      .from('blog')
      .insert({ ...values, banner, bannerAutor })
      .then((res) => {
        if (res.error) return true;
        return false;
      });

    if (hasError) throw 'err';

    toast.success('Post criado com sucesso!', {
      pauseOnHover: false,
    });
    return true;
  } catch {
    await deletePost(id);

    toast.error('Ocorreu algum erro ao criar seu post. Tente novamente mais tarde.');
    throw false;
  }
}
