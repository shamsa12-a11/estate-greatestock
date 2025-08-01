import { useState } from "react"
import { assets } from "../assets/assets"

function Navbar(){
    const[Showmenu , setShowmenu] =useState(false)
   

    return <div className="absolute top-0 left-0 w-full z-10">
        <div className="  container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-inherit">
            <img src={assets.logo} alt="" />
            <ul className="hidden md:flex gap-7 text-white">
                <a href="#headar" className="cursor-point hover:text-gray-400">Home</a>
                <a href="#headar" className="cursor-point hover:text-gray-400">About</a>
                <a href="#headar" className="cursor-point hover:text-gray-400">projects</a>
                <a href="#headar" className="cursor-point hover:text-gray-400">Testmonilies</a>
            </ul>
            <button className=" md:black hidden sm:flex bg-white px-8 py-2 rounded-full">sign up</button>
            <img onClick={()=> setShowmenu(true)}   src={assets.menu_icon} className="md:hidden w-7 lg:hidden sm:hidden cursor-pointer" alt="" />
        </div>
        {/* mobile menu */}
        <div  className={`md:hidden lg:hidden sm:hidden ${Showmenu ? 'fixed w-full': "h-0 w-0 " }right-0 top-0 bottom-0 overflow-hidden bg-white transtion-all`}>
            <div className=" justify-end p-6 cursor-pointer flex">
                <img  onClick={()=> setShowmenu(false)}  src={assets.cross_icon} alt="" />
            </div>
        <ul  className= " flex  flex-col gap-2 mt-5 px-5 items-center text-lg font-medium">
                <a href="#headar" className="px-4 py-2 rounded-full inline-block">Home</a>
                <a href="#headar" className="px-4 py-2 rounded-full inline-block">About</a>
                <a href="#headar" className="px-4 py-2 rounded-full inline-block">projects</a>
                <a href="#headar" className="px-4 py-2 rounded-full inline-block">Testmonilies</a>

            </ul>
        </div>



    </div>
}

export default Navbar