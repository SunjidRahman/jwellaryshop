import React from "react";
import Announce from "../components/Announce";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import Counter from "../components/Counter";
import { Link } from 'react-router-dom';

const ProductPage = () => {
  return (
    <div>
      <Announce />
      <Navbar />
      <div className="flex justify-center mobile:flex-col mobile:mt-4 mobile:p-3">
        <div className="flex-1 flex items-center justify-center">
          <img
            src="https://m.media-amazon.com/images/I/A1N010GZXsL._UL1500_.jpg"
            className="product_img"
            alt="product_image"
          />
        </div>
        <div className="flex-[1.5] flex flex-col items-start  justify-items-center mt-10 mobile:items-center">
          <h1 className="title text-[40px] mobile:text-[30px]">
            Sam Ear Ring Orignal
          </h1>
          <p className="disription pr-[4rem] text-justify mt-4 mobile:pr-0">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
            accusamus, culpa neque ex sunt placeat. Vitae quia qui quo,
            doloribus dolore aliquam veniam. Natus totam odit consequatur
            consectetur delectus nihil!
          </p>
          <div className="flex flex-col place-self-start">
            <p className="mt-7 text-3xl">
              Price: <b>12,000 BDT</b>
            </p>
            <div className="mt-7 text-2xl">
              Size
              <select className="border-[2px] border-silver rounded-md ml-5">
                <option selected>Select</option>
                <option>Small</option>
                <option>Medium</option>
              </select>
            </div>
            <div className="mt-7">
              <Counter />
            </div>
          </div>

          <button className="text-white bg-[#8a4af3] rounded-md shadow-md mt-[30px] p-3">
          <Link to="/cart"><div>
                     Add to Cart
                     </div> </Link>
          </button>
        </div>
      </div>
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default ProductPage;