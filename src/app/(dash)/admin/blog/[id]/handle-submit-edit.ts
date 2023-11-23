import { handleUploadBanner, uploadFile } from './handle-upload-file';
import { supabase } from '@/services/supabase';
import { toast } from 'react-toastify';
import { uploadFiles } from './upload-files';

export async function onSubmitEdit(
  data: any,
  fields: {
    posts: any | undefined;
    banner: any,
    autorPhoto: any
  },
) {
  if (!fields.posts.id) return;
  const id = fields.posts.id;

  console.log(fields)

  try {
    const banner = fields.banner[0].file.name
    ? await handleUploadBanner(
      id,
      fields.banner,
      'banner',
      'Banner',
      fields.posts.banner.url,
      )
      : undefined;
      
    if (banner?.error) throw 'err';

    const bannerAutor = fields.autorPhoto[0].file.name
      ? await handleUploadBanner(
          id,
          fields.autorPhoto,
          'autorPhoto',
          'AutorPhoto',
          fields.posts.bannerAutor.url,
        )
      : undefined;

    if (bannerAutor?.error) throw 'err';

    const hasError = await supabase
      .from('blog')
      .update({ ...data, banner, bannerAutor })
      .eq('id', id)
      .then((res) => {
        if (res.error) return true;
        return false;
      });

    if (hasError) throw 'err';

    toast.success('Post atualizado com sucesso!', {
      pauseOnHover: false,
    });

    return true;
  } catch (err) {
    toast.error(
      'Ocorreu algum erro ao atualizar o post, talvez algumas informações não foram atualizadas corretamente. Tente novamente mais tarde.',
    );

    throw false;
  }
}
