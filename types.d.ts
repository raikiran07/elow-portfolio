import { StaticImageData } from "next/image"

type Language = {
    id:number
    name:string
}

type Projects = {
    id:number,
    title:string,
    description:string,
    githubLink?:string,
    imageUrl?:StaticImageData,
    tech?:Language[],
    liveLink?:string,
    githubLink?:string,
    video?:string,
    developing?:boolean

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



