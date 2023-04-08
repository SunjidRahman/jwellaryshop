import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({item}) => {

  return (<div className='flex-1 m-1 shadow-lg rounded-md overflow-hidden relative'>
      <img src={item.src} className="w-[100%] h-[10%]" alt='category_img'/>
      <div className='flex absolute w-[100%] h-[100%] left-0 top-0 items-center justify-center flex-col'>
          <h2 className='text-white font-medium text-[30px]'>{item.title}</h2>
          <buttton className='btn'>
                     <Link to="/category">See more</Link>
          </buttton>
      </div>
  </div>)
};

export default Category;


