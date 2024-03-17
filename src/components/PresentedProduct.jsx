import GroupImage from '../assets/svg/group-image.svg'

const PresentedProduct = () => {
  return (
    <div className='py-[60px]'>
      <div className='flex justify-around items-center'>
        <div className='w-[506px] h-[521px]'>
          <img src={GroupImage} alt="" className='w-full h-auto'/>
        </div>
        <div className='text-start w-1/2 align-middle'>
          <h1 className='text-start text-[#3A3A3A] font-bold text-4xl mb-[20px] leading-normal'>
            Great Tea, Freshly <br/>Presented
          </h1>
          <p className='text-[#777777] mb-[20px] text-xl'>The meaning of gong cha is chanese is to provide the best tea
            to emperor from all possessions . It represents the highest quality and self expectation. Establishing in
            2006, Gong cha had been deeply appreciated by its custoers because of good words of mouth and unique
            customized service orginated from Taiwan.</p>

          <div className='text-start'>
            <h2 className='text-2xl font-semibold mb-1'>Unique Taste</h2>
            <p className='text-[#777777] mb-[20px] text-xl'>A Unique and different style from other teapots gives a
              luxurious and minimalist impression</p>
            <h2 className='text-xl font-semibold mb-1'>Premium Quality</h2>
            <p className='text-[#777777] mb-[20px] text-xl'>Premium Quality that makes tea more elegant and more durable
              when you use it.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PresentedProduct;