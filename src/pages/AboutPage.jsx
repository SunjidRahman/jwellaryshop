import React from 'react';
import Announce from "../components/Announce";
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import NewsLetter from '../components/NewsLetter';
import "tailwindcss/tailwind.css";

const AboutPage = () => {
  return <div>  
      <Announce/>
      <Navbar/>
      <div className="bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="lg:w-3/4 mx-auto">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            About Us
          </h2>
          <div className="mt-8 text-xl text-gray-500">
            <p className="mt-4">
            Welcome to our jewelry shop, where we offer exquisite and timeless pieces that are sure to captivate your heart.

At our shop, we have a wide range of jewelry that is perfect for every occasion. Whether you're looking for a stunning engagement ring to propose to your partner, a pair of elegant earrings to wear to a special event, or a personalized necklace to give as a gift, we have it all.

Our collection includes pieces made from a variety of high-quality materials, such as gold, silver, diamonds, pearls, and gemstones. We take great pride in our selection and carefully curate each piece to ensure that it meets our high standards of quality and beauty.

In addition to our stunning collection of jewelry, we also offer a range of services to make your shopping experience with us as enjoyable and stress-free as possible. Our knowledgeable staff is always on hand to provide expert advice and help you choose the perfect piece for your needs. We also offer jewelry cleaning and repair services to keep your favorite pieces looking their best for years to come.

We believe that every piece of jewelry should be as unique as the person wearing it. That's why we offer custom design services to help you create a one-of-a-kind piece that perfectly reflects your style and personality. Our experienced designers will work closely with you to bring your vision to life, using only the finest materials and craftsmanship.

At our jewelry shop, we are committed to providing our customers with exceptional quality and service. We invite you to visit us and discover the perfect piece of jewelry to add to your collection.
            </p>
          </div>
          <div className="mt-10">
            <button
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
      <NewsLetter/>
      <Footer/>
  </div>;
};

export default AboutPage;