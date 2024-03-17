import Logo from '../assets/svg/logo.svg'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center'>
      <div>
        <img src={Logo} alt=""/>
      </div>
      <div className='flex space-x-5 font-semibold text-[#3A3A3A]'>
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Products</a>
        <a href="">Store</a>
        <a href="">News & Events</a>
        <a href="">Contact</a>
      </div>
      <div>
        <button
          className='bg-gradient-to-r from-[#FF8938] to-[#FF0000] text-white font-semibold py-2 px-4 rounded'>Contact
        </button>
      </div>
    </div>
  );
};

export default Navbar;