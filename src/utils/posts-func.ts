import { supabase } from '@/services/supabase';
import { type iPosts, type PostsPartial } from '@/types/blog/posts';

export async function getPostsById(id: string): Promise<iPosts> {
  return (
    await supabase
      .from('blog')
      .select(
        '*',
      )
      .eq('id', id)
  ).data?.[0];
}

export async function deletePost(id: string) {
  let error = false;
  error = await supabase.storage
    .emptyBucket(`blogPost-${id}`)
    .then((res) => (res.error ? true : false))
    .catch(() => true);
  if (error) throw 'err';
  error = await supabase.storage
    .deleteBucket(`blogPost-${id}`)
    .then((res) => (res.error ? true : false))
    .catch(() => true);
  if (error) throw 'err';
  error = await supabase
    .from('blog')
    .delete()
    .eq('id', id)
    .then((res) => (res.error ? true : false));
  if (error) throw 'err';
  return 'success';
}

export async function getPartialOfPosts(): Promise<PostsPartial[]> {
  return (
    (
      await supabase
        .from('blog')
        .select('*')
    )
  ).data || [];
}
