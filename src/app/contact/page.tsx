'use client'
import React from 'react'
import {useForm,SubmitHandler} from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { IoIosSend } from "react-icons/io";




type UserDetail = {
  email:string,
  message:string
}


export default function ContactForm() {

  const {register,handleSubmit,formState:{errors}} = useForm<UserDetail>();

  const onSubmit : SubmitHandler<UserDetail> = (data) => {
    alert("thanks for your message, will contact you soon")
    
  }


  return (
    <div className='max-w-[90%] md:max-w-[70%] mx-auto mt-8'>
        <h1 className='text-3xl font-bold'>Contact me</h1>
        <p className='animate-fadeInUp'>For any projects, or any other queries please contact here.</p>

        <form onSubmit={handleSubmit(onSubmit)} className='mt-4'>
        <div className='mt-2'>
          <Label htmlFor="email" className='animate-fadeInUp'>
            Email
          </Label>
            <Input type="text" id="email" {...register("email",{required:"This field cannot be empty",
              validate:(value:string)=>{
                if(!value.includes('@')){
                  return "this must include @";
                }
                else{
                  return true
                }
              }

              })} />
            {
              errors?.email && <p>{errors?.email?.message}</p>
            }
          
        </div>
        <div className='mt-2'>
          <Label htmlFor="message" className='animate-fadeInUp'>
            Message
          </Label>
            <Textarea  id="message" {...register("message",{required:"this field cannot be empty",minLength:{
              value:5,
              message:"mimum length must be 5"
            }})} />
            {
              errors?.message && <p>{errors?.message?.message}</p>
            }
          
        </div>
       <Button type='submit' className='mt-4 flex items-center justify-around'><IoIosSend /> Send</Button>
        
        </form>


    </div>
  )
}
