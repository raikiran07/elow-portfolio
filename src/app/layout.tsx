import type { Metadata } from "next";
import { Inter  } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";
// import ContextProvider from "./context/ContextProvider";
import Footer from "@/components/Footer";
import localFont from 'next/font/local'
import { Poppins } from "next/font/google";





import { cn } from "@/lib/utils"
 
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const poppins = Poppins({
  weight:['200','400','600'],
  subsets:["latin"],
  variable:"--font-poppin"
})

// const ranade = localFont({
//   src:"../../public/fonts/Ranade-Regular.woff",
//   variable:'--font-ranade'
// })

 
export const metadata: Metadata = {
  title: "Kiran Rai",
  description: "Created by Kiran Rai",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body  className={cn(
          "min-h-screen bg-background font-sans antialiased",
           inter.variable
        )}>

      <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      >
        {/* <ContextProvider> */}
      <Navbar/>
      {children}
      {/* </ContextProvider> */}
      <Footer />
      </ThemeProvider>
      
        </body>
    </html>
  );
}
