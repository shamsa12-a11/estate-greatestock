import { assets } from "../assets/assets"

function Navbar(){
    return <div className="absolute top-0 left-0 w-full z-10">
        <div className="  container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-inherit">
            <img src={assets.logo} alt="" />
            <ul className="hidden md:flex gap-7 text-white">
                <a href="#headar" className="cursor-point hover:text-gray-400">Home</a>
                <a href="#headar" className="cursor-point hover:text-gray-400">About</a>
                <a href="#headar" className="cursor-point hover:text-gray-400">projects</a>
                <a href="#headar" className="cursor-point hover:text-gray-400">Testmonilies</a>
            </ul>
            <button className=" md:black bg-white px-8 py-2 rounded-full">sign up</button>
        </div>


    </div>
}

export default Navbar