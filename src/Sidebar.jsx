import React from 'react'
import { NavLink } from 'react-router'
import OnSubmit from './Pages/Form/OnSubmit';
import FormAction from './Pages/Form/FormAction';
import Controlled from './Pages/Form/Controlled';
import Uncontrolled from './Pages/Form/Uncontrolled';
import HookForm from './Pages/Form/HookForm';

const Sidebar = () => {

    const linkStyle = ({ isActive }) =>
        `btn justify-start gap-3 shadow-md border-none text-white w-full ${isActive ? 'bg-primary' : 'bg-gray-700 hover:bg-gray-800'
        }`;

    return (
        <div className="grid grid-cols-12 min-h-[80vh]">

            <div className="col-span-2 min-h-[85vh] bg-base-100 border-r border-base-300 flex flex-col p-6">
                <h2 className="text-2xl font-bold text-center mb-8">Sidebar</h2>

                <div className="flex flex-col gap-3">

                    <NavLink to="/onsubmit" className={linkStyle}>
                        <span className="badge badge-ghost text-xs">01</span>
                        OnSubmit
                    </NavLink>


                    <NavLink to="/formaction" className={linkStyle}>
                        <span className="badge badge-ghost text-xs">02</span>
                        FormAction
                    </NavLink>


                    <NavLink to="/controlled" className={linkStyle}>
                        <span className="badge badge-ghost text-xs">03</span>
                        Controlled
                    </NavLink>

                    <NavLink to="/uncontrolled" className={linkStyle}>
                        <span className="badge badge-ghost text-xs">04</span>
                        Uncontrolled
                    </NavLink>

                    <NavLink to="/hookform" className={linkStyle}>
                        <span className="badge badge-ghost text-xs">05</span>
                        HookForm
                    </NavLink>
                </div>

                <div className="mt-auto">
                    <div className="divider opacity-50"></div>
                    <button className="btn btn-outline btn-error btn-sm w-full font-bold uppercase tracking-wider">
                        Clear All
                    </button>
                </div>
            </div>


            <div className="col-span-10 bg-base-200 p-10">
                <h1 className="text-3xl font-black opacity-10 uppercase text-center">Content Area</h1>
                <div className=" grid grid-cols-3">
                    <OnSubmit />
                    <FormAction />
                    <Controlled />
                    <Uncontrolled />
                    <HookForm />
                </div>
            </div>
        </div>
    )
}

export default Sidebar