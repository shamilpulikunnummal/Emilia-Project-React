import React from 'react';
import HomePageCarousel from './HomePage/HomePageCarousel';
import CategoryGrid from './Category/CategoryGrid';
import BrandsIntroduction from './BrandsHeading/BrandsIndroduction';
import BrandCarosel from './BrandsCarosel/BrandCarosel';
import SideHead from '../component/SideHead/SideHead';
import NewArrivals from './NewArrivals/NewArrivals';
import JewelryAndNecklaceCollection from './jewelry&NecklaceCollection/jewelry&NeclaceCollection';
import Counter from './Counter/Counter';
import CustomersReviews from './CustomersReviews/CustomersReviews';
import LookBook from './LookBook/LookBook';
import Facilities from './Facilities/Facilities';
import Newssletter from './Newsletter/Newsletter';
import NavbarRelativeCarosel from './NavbarRelativeCarosel.jsx';

const Home = () => {
  return (
    <>
      <NavbarRelativeCarosel/>
      <HomePageCarousel />
      <CategoryGrid />
      <BrandsIntroduction />
      <BrandCarosel />
      <SideHead />
      <NewArrivals />
      <JewelryAndNecklaceCollection />
      <Counter />
      <CustomersReviews />
      <LookBook />
      <Facilities />
      <Newssletter />

    </>
  );
};

export default Home;
