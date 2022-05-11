export type Comment = {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string 
};

export type Comments = Comment[];

export type Photo = {
    albumId: number,
    id: number,
    title: string,
    url: string,
    thumbnailUrl: string
};

export type Photos = Photo[];

export type Album = {
    userId: number,
    id: number,
    title: string
};

export type Albums = Albums[];

export type Todo = {
   userId: number,
   id: number,
   title: string,
   completed: boolean
};

export type Todos = Todo[];

export type Post = {
    userId: number,
    id: number,
    title: string,
    body: string
}

export type Posts = Post[]