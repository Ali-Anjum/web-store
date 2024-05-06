import React from 'react'
import Notification from './notification';
import Banner from './banner';
import SearchBar from './Search_Bar';
import Products_Bar from './Products_Bar';
import testData from '../data/test.json'
import Products from './Products';

const Index = () => {
    const productsArray = Array.from({ length: testData.length }, (_, index) => (
       <Products key={index} className='' data={testData[`${index}`]} tag={'New'} />
     
      ));
  return (
    <div>
              <Notification />
      <Banner />
      <div className='d-flex justify-content-between headers input-div-hero'>
        <SearchBar/>
        <Products_Bar Tag={''} />
      </div>
      <div className='d-flex justify-content-between products-hero' style={{ flexWrap: 'wrap' }}>
        {productsArray}
      </div>
    </div>
  )
}

export default Index