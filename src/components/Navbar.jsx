import LogoZhb from '../assets/zhb-logo.png'

const Navbar = () => {
    return (
        <nav className="bg-zinc-100 shadow">

        <div className="container mx-auto px-4 flex justify-between items-center ">

               <div className="flex items-center ml-[2.5rem]">
                <img src={LogoZhb} alt="logo" className='h-32 w-auto'/>
          </div>

          <div className="space-x-16 text-2xl font-bold text-gray-700">
            <a href="#" className="relative
            hover:text-gray-400 hover:after:absolute hover:after:left-0 
            hover:after:right-0
            hover:after:bottom-[-4px]
            hover:after:h-1
            hover:after:bg-gray-700">ABOUT</a>

            <a href="#" className="relative
            hover:text-gray-400 hover:after:absolute hover:after:left-0 
            hover:after:right-0
            hover:after:bottom-[-4px]
            hover:after:h-1
            hover:after:bg-gray-700
            ">PROJECT</a>

            <a href="#" className="relative
            hover:text-gray-400 hover:after:absolute hover:after:left-0 
            hover:after:right-0
            hover:after:bottom-[-4px]
            hover:after:h-1
            hover:after:bg-gray-700
            ">CONTACT</a>
          </div>

            </div>
        </nav>
    );
}
 
export default Navbar;