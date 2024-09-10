// 'use client'
// import React, { ReactNode, useContext, useState,useEffect } from 'react'
// import { createContext } from 'react'
// import { useRouter } from 'next/router'

// interface NavContextType {
//     activeRoute : string | undefined;
//     setActiveRoute:(route:string)=>void;
// }

// const NavContext = createContext<NavContextType | undefined> (undefined);



// export const useNavContext = () => {
//     const context = useContext(NavContext);
//     if(!context){
//         throw new Error('useNavContext must be used within a NavProvider');
//     }

//     return context;
// }

// export default function ContextProvider({children}:{children:ReactNode}) {
  
//     const [activeRoute,setActiveRoute] = useState<string>("/")
//     const router = useRouter();

//   useEffect(() => {
//     if (router.isReady) {
//       // Ensure the router is only accessed on the client
//       setActiveRoute(router.pathname);
//     }
//   }, [router.isReady,router.pathname]);

  
  
//   return (
//     <NavContext.Provider value={{activeRoute,setActiveRoute}}>
//         {children}
//     </NavContext.Provider>
//   )
// }
