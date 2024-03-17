// import UpArrow from '../assets/svg/up-arrow.svg'
import HeaderImage from '../assets/svg/header-images.svg'

const Banner = () => {
  return (
    <div className='my-[50px]'>
      <div className='flex justify-between align-center'>
        <div>
          <h1 className='text-[#1C1C1C] text-[70px] text-start font-bold leading-snug'>It's good<br/>
            tea time at The<br/>
            Tea House</h1>
          <p className='mt-2 text-start text-2xl text-[#777777]'>Tea and Botanical Solutions Supplier Give Optimum
            <br/>Satisfaction To Your Taste Buds.</p>
          <div className='text-start mt-4'>
            <button className='bg-gradient-to-r from-[#FF8938] to-[#FF0000] text-white font-semibold py-2 px-4 rounded'>
              Explore More <i className="fa-solid fa-arrow-up"></i>
            </button>
          </div>
        </div>
        <div className='place-items-center w-[641px] h-[500px]'>
          <img src={HeaderImage} alt=""/>
        </div>
      </div>
    </div>
  );
};

export default Banner;