'use client';
import { useEffect, useState } from 'react';
import { CardImageDropzone, type DropzoneFields } from '@/components/app/admin/card-dropzone';
import { type iPosts } from '@/types/blog/posts';
import { useRouter } from 'next/navigation';
import { Label } from '@/components/ui/label';
import { Pencil, Plus } from 'lucide-react';
import { onSubmitCreate } from './handle-submit-create';
import { onSubmitEdit } from './handle-submit-edit';

import dynamic from 'next/dynamic'

const DynamicComponent = dynamic(() => import('react-quill'), {
  ssr: false
})

export const PostsForm = ({
  id,
  posts,
}: {
  id: string;
  posts?: iPosts;
}) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [banner, setBanner] = useState<DropzoneFields[] | undefined>(
    posts?.banner ? [posts?.banner].map(({ url, ...item }) => ({ file: url, ...item })) : undefined
  );
  const [autorPhoto, setAutorPhoto] = useState<DropzoneFields[] | undefined>(
    posts?.bannerAutor ? [posts?.bannerAutor].map(({ url, ...item }) => ({ file: url, ...item })) : undefined,
  );
  const [value, setValue] = useState('');
  
  console.log(posts)

  useEffect(() => {
    if(posts?.content){
      setValue(posts.content)
    }
  }, [])

  console.log(id)


  function handleSubmit(e: any) {
    e.preventDefault()
    setLoading(true);

    const data = {
      title: e.target.title.value,
      autor: e.target.autor.value,
      type: e.target.tipo.value,
      content: value
    }
    
    if(id === 'create'){
      onSubmitCreate(data, {
         banner,
         autorPhoto
      }).then(() => router.push('/admin/blog'))
      .finally(() => setLoading(false));
    }else {
      onSubmitEdit(data, {
        posts,
        banner,
        autorPhoto
      }).then(() => router.push('/admin/blog'))
      .finally(() => setLoading(false));
    }
  }
  

  return (
    <form
        onSubmit={handleSubmit}
        className='w-full min-h-[700px] bg-white p-7 flex flex-col gap-10 rounded-md border border-[#D2D5DA]'
      >
      <div className='w-full flex justify-between h-full max-md:flex-col gap-10'>
        <div className='w-[40%] flex flex-col gap-5 max-md:w-full'> 
          <div className="flex w-full flex-col gap-2">
            <Label htmlFor="title" className="font-bold text-base max-sm:text-sm">Título</Label>
            <input type="text" defaultValue={posts?.title} required name="title" disabled={loading} id="title" placeholder="Título" className="w-full rounded-lg  py-3 px-3 border border-input bg-background" />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <Label htmlFor="autor" className="font-bold text-base max-sm:text-sm">Autor</Label>
            <input type="text" required defaultValue={posts?.autor} name="autor" disabled={loading} id="autor" placeholder="Autor" className="w-full rounded-lg  py-3 px-3 border border-input bg-background" />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <Label htmlFor="tipo" className="font-bold text-base max-sm:text-sm">Tipo</Label>
            <input type="text" required name="tipo" defaultValue={posts?.type} disabled={loading} id="tipo" placeholder="Tipo" className="w-full rounded-lg  py-3 px-3 border border-input bg-background" />
          </div>
          <CardImageDropzone handleImages={setAutorPhoto} images={autorPhoto} id="banner">
            Autor
          </CardImageDropzone>
        </div>
        <div className='w-[50%] flex flex-col gap-10 max-md:w-full'>
          <CardImageDropzone handleImages={setBanner} images={banner} id="autorPhoto">
            Banner
          </CardImageDropzone>
          <DynamicComponent 
            theme="snow"       
            modules={{
              toolbar: {
                container: [
                  ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
                  ['blockquote', 'code-block'],
            
                  // [{ 'header': 1 }, { 'header': 2 }],               // custom button values
                  [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                  [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
                  [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
                  [{ 'direction': 'rtl' }],                         // text direction
            
            
                  [{ 'align': [] }],
            
                  ['link', 'image', 'video'],
            
                  ['clean']                                         // remove formatting button
                ],
              },
              clipboard: {
                matchVisual: true,
              },
            }} 
            value={value} 
            onChange={setValue} 
            className="h-[300px] [&_.ql-editor]:text-lg [&_.ql-container]:bg-white [&_.ql-toolbar]:bg-white [&_.ql-container]:!border-[#D2D5DA] [&_.ql-toolbar]:!border-[#D2D5DA] [&_.ql-container]:rounded-b-md [&_.ql-toolbar]:rounded-t-md"
          />
        </div>
      </div>
      <button className="text-lg rounded-md w-fit px-3 py-2 flex gap-2 text-white bg-[#141624]" disabled={loading}>
          {posts ? (
            <>
              Editar Post <Pencil className="ml-4 h-6 w-6" />
            </>
          ) : (
            <>
              Criar Post <Plus className="ml-4 h-6 w-6" />
            </>
          )}
        </button>

    </form>
  );
};
