import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import Home from '../Pages/Home/Home'
import Sidebar from '../Sidebar'

const MainOutlet = () => {
    return (
        <>
            <Navbar />
            <div className="container mx-auto">
                <div className="grid grid-cols-12 ">
                    <div className="col-span-2">
                        <Sidebar />
                    </div>
                    <div className="col-span-10 mt-10">
                        <Outlet />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default MainOutlet