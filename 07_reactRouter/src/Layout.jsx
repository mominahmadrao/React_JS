import React from 'react'
import { Outlet } from "react-router-dom";
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function Layout() {
  return (
   <>
   <Header/>
   {/* If you have a parent route and child routes, the child components appear where <Outlet /> is placed. */}
   <Outlet/>
   <Footer/>
   </>    

  )
}

export default Layout