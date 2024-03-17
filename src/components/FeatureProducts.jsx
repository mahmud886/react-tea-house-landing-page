import product1 from '../assets/svg/featured-products/featured-product-1.svg'
import product2 from '../assets/svg/featured-products/featured-product-2.svg'
import product3 from '../assets/svg/featured-products/featured-product-3.svg'
import product4 from '../assets/svg/featured-products/featured-product-4.svg'

const products = [
  {
    id: 1,
    img: product1,
    name: 'Milk Tea',
    description: 'Creamer could be replaced by fresh milk'
  },
  {
    id: 2,
    img: product2,
    name: 'Black Tea',
    description: 'Creamer could be replaced by fresh milk'
  },
  {
    id: 3,
    img: product3,
    name: 'Lemon Tea ',
    description: 'Creamer could be replaced by fresh milk'
  },
  {
    id: 4,
    img: product4,
    name: 'Green Tea',
    description: 'Creamer could be replaced by fresh milk'
  },
  {
    id: 5,
    img: product1,
    name: 'Ice Tea',
    description: 'Creamer could be replaced by fresh milk'
  },
  {
    id: 6,
    img: product2,
    name: 'Red Bean Tea',
    description: 'Creamer could be replaced by fresh milk'
  },
  {
    id: 7,
    img: product3,
    name: 'Malai Tea',
    description: 'Creamer could be replaced by fresh milk'
  },
  {
    id:8,
    img: product4,
    name: 'Yellow Tea',
    description: 'Creamer could be replaced by fresh milk'
  },
]
const FeatureProducts = () => {
  return (
    <div>
      <h2 className='text-4xl font-bold text-[#1C1C1C] my-3'>Our Featured Products</h2>
      <p className='text-[#777777]'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, <br/> by injected humour, or randomised words which don't look even slightly believable. </p>


      <div className='flex flex-wrap py-5'>
        {products.map((product, index) => {
          return (
            <div key={product.id} className='w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4'>

              <div className='bg-gradient-to-b from-[#F4F4F4] to-transparent rounded-md'>
                <div className='w-[50%] h-[50%] mx-auto pt-[20px]'>
                  <img src={product.img} alt={product.name} className='w-[136px] h-[202px]'/>
                </div>

                <h3 className='text-xl font-bold text-[#1C1C1C] my-3'>{product.name}</h3>
                <p className='text-[#777777]'>{product.description}</p>
              </div>
            </div>
          )
        })}
      </div>
      <div></div>
    </div>
  );
};

export default FeatureProducts;