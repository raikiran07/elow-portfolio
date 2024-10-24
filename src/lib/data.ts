import { Projects,Blogs } from '../../types'
import BlogImage from '../../public/images/blog.jpg'

const data:Projects[] = [

{
    id:1,
    description:"developed a job portal for the company to automate job notifications to the desired candidates directly. Implemented Nodemailer and Twilio to send instant notifications for account activation.",
    title:"Job Notification",
    tech:[{id:1,name:"ReactJs"},{id:2,name:"NodeJs"},{id:3,name:"TailwindCss"},{id:4,name:"MongoDB Atlas"},{id:5,name:"Nodemailer"},{id:6,name:"Twilio"}],
    githubLink:"https://github.com/raikiran07/Job-Assignment-Frontend",
    liveLink:"https://github.com/raikiran07/Job-Portal-Frontend",
    video:'/video/job-web.mp4',
    developing:true
},
{
    id:2,
    description:"developed a website to record all my expenses and loans that I taken or given to someone. it helps me to organize all my expenses in one place, the backend is backed by firebase and the frontend component is build using reactjs, for alerts and other notifications , toastify is implemented.",
    title:"Udhaarbook",
    tech:[{id:1,name:"firebase"},{id:2,name:"reactJs"},{id:3,name:"toastify"},{id:4,name:"firebase auth"}],
    liveLink:'https://udhaarbook.vercel.app/',
    githubLink:'https://github.com/raikiran07/UdhaarBook',
    video:'/video/udhaarbook.mp4',
    developing:false
},
{
    id:3,
    description:"Developed my personal portfolio to list all my projects, resume and works. Crafted beautifully using NextJs framework",
    title:"Personal Portfolio",
    tech:[{id:1,name:"NextJs"},{id:2,name:"Gsap"},{id:3,name:"ReactJs"},{id:4,name:"Custom Css"},{id:5,name:"TailwindCss"}],
    githubLink:"https://github.com/raikiran07/elow-portfolio",
    liveLink:"https://kiranra.tech",
    video:'/video/portfolio.mp4',
    developing:false
},

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