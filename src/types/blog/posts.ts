type ImageField = { id: string; url: string; label: string; eid: string };

export interface iPosts {
  id: number;
  type: string;
  autor: string;
  bannerAutor: ImageField[] | any;
  banner: ImageField[] | any;
  title: string;
  content?: string;
  created_at: Date;
}

export type PostsPartial = Pick<
  iPosts,
  'id' | 'autor' | 'banner' | 'bannerAutor' | 'title' | 'type' | 'content' | 'created_at'
>;
