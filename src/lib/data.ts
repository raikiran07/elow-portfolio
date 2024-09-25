import { Projects,Blogs } from '../../types'
import BlogImage from '../../public/images/blog.jpg'
const data:Projects[] = [
{
    id:1,
    description:"Job Finder is a fullstack job post website where anyone can post or apply job according to the requirement. The backend is developed using java springboot and JPA technology and the frontend component is build using reactjs framework.",
    title:"Job Finder",
    tech:[{id:1,name:"java"},{id:2,name:"Springboot"},{id:3,name:"ReactJs"},{id:4,name:"sql"},{id:5,name:"oracle"}],
    githubLink:"https://github.com/raikiran07/Job-Portal-Frontend",
    liveLink:"https://github.com/raikiran07/Job-Portal-Frontend"
},
{
    id:2,
    description:"developed a leave management system, which can handle both employee and manager login with a single login page, and provide personal dashboard according to the role. employee can easily make leave request according to available leave and the request is sent to the particular manager assign to the employee. Manager is allowed to accept or reject the request providing some valid reasons and the status is reflected to the employee dashboard.",
    title:"Leave Management System",
    tech:[{id:1,name:"java"},{id:2,name:"Springboot"},{id:3,name:"ReactJs"},{id:4,name:"sql"},{id:5,name:"oracle"}],
    githubLink:"https://github.com/raikiran07/LMS-Frontend",
    liveLink:"https://github.com/raikiran07/LMS-Frontend"
},
{
    id:3,
    description:"developed a website to record all my expenses and loans that I taken or given to someone. it helps me to organize all my expenses in one place, the backend is backed by firebase and the frontend component is build using reactjs, for alerts and other notifications , toastify is implemented.",
    title:"Udhaarbook",
    tech:[{id:1,name:"firebase"},{id:2,name:"reactJs"},{id:3,name:"toastify"},{id:4,name:"firebase auth"}],
    liveLink:'https://udhaarbook.vercel.app/',
    githubLink:'https://github.com/raikiran07/UdhaarBook'
}
]

const blogs:Blogs[] = [
    {
        blogId:1,
        title:"The Home Coming",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        imageUrl:BlogImage,
        date:"6th Sept, 2024",
        readTime:3,
        summary:"Build high quality sound proof material within 3 hours of time"
    },
    {
        blogId:2,
        title:"Returning of the King",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        imageUrl:BlogImage,
        date:"6th Sept, 2024",
        readTime:2,
        summary:"Making the world much happier and easy for all of us"
    },

]

export {blogs,data}