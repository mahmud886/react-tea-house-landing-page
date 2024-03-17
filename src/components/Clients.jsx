import ClientImage from '../assets/svg/clients-images/client-2.svg'

const Clients = () => {
  return (
    <div className='py-[60px] bg-gradient-to-r from-[#FF8938] to-[#FF0000]'>
      <div className='flex align-middle'>
        <div className='text-start p-[60px] w-1/2 place-self-center'>
          <h2 className='text-5xl font-semibold text-white leading-snug '>Meet Our Super <br/> Clients</h2>
          <p className='text-xl text-white py-5'>There are many variations of passages of Lorem Ipsum available, but the
            majority have suffered alteration in some form, by injected humour, or randomised words which don't look
            even slightly believable. </p>
          <div className=''>
            <button
              className='bg-white text-gradient-to-r from-[#FF8938] to-[#FF0000] font-semibold py-2 px-4 rounded'>Show
              All
            </button>
          </div>


        </div>
        <div className='w-1/2'>
          <img src={ClientImage} alt=""/>
        </div>
      </div>
    </div>
  );
};

export default Clients;