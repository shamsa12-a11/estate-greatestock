import Navbar from "./navbar"

function Headar(){
    return <div className=" min-h-screen bg-cover bg-center mb-4 flex items-center w-full overflow-hidden"
    style={{backgroundImage: "url('/header_img.png')"}} id="headar">
        <div className=" container text-center mx-auto py-4 px-6 md:px-20 lg:text-white">
            <h2 className="text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20 ">Explore home that fit in your dreams</h2>
            <div className="space-x-6 mt-16 ">
                <a href="#product" className="border border-white px-8 py-3 rounded">product</a>
                <a href="#contact" className="border bg-blue-500 px-8 py-3 rounded">contact us</a>
            </div>
        </div>

     <Navbar />
    </div>
}

export default Headar