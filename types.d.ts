import { StaticImageData } from "next/image"

type Language = {
    name:string
}

type Projects = {
    id:number,
    title:string,
    description:string,
    githubLink?:string,
    imageUrl?:StaticImageData,
    tech?:Language[]

}

type Blogs = {
    blogId:number,
    title:string,
    description:string,
    date:string,
    imageUrl:StaticImageData,
    readTime:number,
    summary:string
}



