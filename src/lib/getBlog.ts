import { blogs } from "./data";

export function getSingleBlog(id:number){
    const blog = blogs.find(blog=>blog.blogId==id);
    if(!blog)throw new Error(`No blog present with id ${id}`)
    return blog
}
