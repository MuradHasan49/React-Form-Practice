import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import Home from '../Pages/Home/Home'
import Sidebar from '../Sidebar'

const MainOutlet = () => {
    return (
        <>
        <div className="container mx-auto">

            <Navbar />
            <Sidebar/>
            {/* <Outlet /> */}
            <Footer/>
        </div>
        </>
    )
}

export default MainOutlet