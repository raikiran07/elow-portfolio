"use client"
import Image from "next/image";

import { AccordionDemo } from "@/components/Accordian";

import Hero from "@/components/Hero";
import Resume from "@/components/Resume";
import { useContext } from "react";
// import { useNavContext } from "./context/ContextProvider";
import { useRouter } from "next/router";




export default function Home() {
 
  // const {setActiveRoute} = useContext(useNavContext);
  return (
    <main className="min-h-screen w-full">

      <Hero/>
      <Resume/>
     
    </main>
  );
}
