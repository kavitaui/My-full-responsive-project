import React, { memo } from 'react';
import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom';

import About from 'pages/About';
import BlogGrid from 'pages/BlogGrid/BlogGrid';
import Contact from 'pages/Contact';
import Home from 'pages/Home';
import Homedemo1 from 'pages/HomeDemo-1/Homedemo1';
import NotFound from 'pages/NotFound';
import ProductList from 'pages/ProductList/ProductList';





const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="Homedemo1" element={<Home />} />
        <Route path="Homedemo2" element={<Homedemo1 />} />
        <Route path="AboutSimple" element={<About />} />
        <Route path="bloggrid" element={<BlogGrid />} />
        <Route path="blog" element={<BlogGrid />} />
        <Route path="productlist" element={<ProductList />} />
        <Route path="shop" element={<ProductList />} />
        <Route path="*" element={<NotFound />} />
      </Switch>
    </BrowserRouter>
  )
}

export default memo(Routes)
