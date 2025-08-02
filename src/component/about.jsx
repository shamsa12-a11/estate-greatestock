import { assets } from "../assets/assets"

function About (){
    return <div>
    <div className="flex flex-col items-center justify-center container mx-auto p-14 md:px-14 lg:px-32 w-full overflow-hidden " id="about">
     <h2 className="text-2xl md:text-4xl font-bold mb-2 ">about <span className="underline underline-offset-4 decoration-1 under font-light">our brand</span></h2>
     <p className="text-gray-500 max-w-80 text-center mb-8">passionate our proprties, Dedicated to your vision</p>
    </div>
    <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20"> 
        <img src={assets.brand_img} alt=""className="w-full sm:w-1/2 max-w-lg" />
        <div className="flex flex-col md:flex-row items-center md:items-start mt-10 text-gray-600">
            <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28  mt-10 ">
                <div>
                    <p className="text-4xl font-medium text-gray-900">12+</p>
                    <p>years of excellence</p>
                </div>
                 <div>
                    <p className="text-4xl font-medium text-gray-900">20+</p>
                    <p>project compalated</p>
                </div>
                 <div>
                    <p className="text-4xl font-medium text-gray-900">25+</p>
                    <p>ms sq ft deleivred</p>
                </div>
                 <div>
                    <p className="text-4xl font-medium text-gray-900">30+</p>
                    <p>ongaing project</p>
                </div>

            </div>

        </div>
        
        
    </div>
  
    
</div>
}

export default About

