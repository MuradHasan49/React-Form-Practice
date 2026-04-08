import React from 'react';

const Sidebar = () => {
    return (
        <div className="h-screen w-80 bg-base-100 border-r border-base-300 flex flex-col p-6">
            <h2 className="text-2xl font-bold text-center mb-8">Sidebar</h2>

            <div className="flex flex-col gap-3">

                <button className="btn bg-gray-700  justify-start gap-3 shadow-md">
                    <span className="badge badge-ghost text-xs">01</span>
                    OnSubmit
                </button>


                <button className="btn bg-gray-700  justify-start gap-3 shadow-md text-white">
                    <span className="badge badge-ghost text-xs">02</span>
                    FormAction
                </button>


                <button className="btn bg-gray-700  justify-start gap-3 shadow-md text-white">
                    <span className="badge badge-ghost text-xs">03</span>
                    Controlled
                </button>


                <button className="btn bg-gray-700  justify-start gap-3 shadow-md text-white">
                    <span className="badge badge-ghost text-xs">04</span>
                    Uncontrolled
                </button>


                <button className="btn bg-gray-700  justify-start gap-3 shadow-md text-white">
                    <span className="badge badge-ghost text-xs">05</span>
                    HookForm
                </button>
            </div>

            <div className="mt-auto divider"></div>
            <button className="btn btn-outline btn-error btn-sm">Clear All</button>
        </div>
    );
};

export default Sidebar;