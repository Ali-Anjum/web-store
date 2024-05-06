import { useState,useMemo } from 'react';
import BuyPopup from './BuyPopup';


const Products = ({data},tag) => {
 // console.log(tag)
  const [passedVal, setPassedVal] = useState(false);
  const [showItem, setShowitem] = useState(true);
  
  const changevals=(x)=>{
    
    document.documentElement.style.overflowY =(passedVal==x)?'hidden':'scroll' ;

    setPassedVal(!passedVal)
  }
  for ( const tags in data.passedData.tags ){
    if(data.passedData.tags[tags].toLowerCase()=='new')
    break;
    else
  {/*setShowitem(!showItem) due to 1000 rerenders*/} 
   }



  return (1)? (
    <div className=' ' >
      <div className='products-div'>
        <img
          className='img-product centered'
          src={data.url}
          alt={`Product  shows ${data.name}`}

        />
        <div className='text-products-div mx-auto'>
          <p className='head2 text-products text-center' id='1'>
            {data.name}
          </p>
          <button className='button-purchase centered' onClick={(e)=>{
            e.preventDefault() ;
            changevals(false)
          }
            }>
            Purchase || {data.price}
          </button>
        </div>
      </div>
      <BuyPopup yes={passedVal} passedData={data.passedData} value={()=>changevals(false)}  />
      
    </div>
  ):''
}


export default Products;
