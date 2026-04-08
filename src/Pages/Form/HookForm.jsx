import React, { useState } from 'react'
import useInputField from '../../Hooks/Hooks'

const HookForm = () => {
    const [name, nameOnChange] = useInputField('')
    const [data, setData] = useState(null)

    const handleonSubmit = (e) => {
        e.preventDefault()
        setData(name)
    }

    return (
        <div className="flex flex-col items-center justify-center p-10 gap-6">
            <div className="card w-full max-w-md bg-base-100 shadow-2xl border border-primary/20">
                <div className="card-body">
                    <h2 className="card-title text-3xl font-bold justify-center mb-6 text-primary">
                        HookForm
                    </h2>
                              {data && (
                <div className="card w-full max-w-md bg-primary text-primary-content shadow-xl">
                    <div className="card-body items-center text-center">
                        <h3 className="text-sm uppercase tracking-widest opacity-70">Submission Success</h3>
                        <p className="text-2xl font-bold">{data}</p>
                    </div>
                </div>
            )}
                    
                    <div className="form-control gap-4">
                        <div className="badge badge-outline badge-primary mx-auto">
                            Typing: {name || "..."}
                        </div>

                        <form onSubmit={handleonSubmit} className="flex flex-col gap-4">
                            <div>
                                <label className="label">
                                    <span className="label-text font-medium">Username</span>
                                </label>
                                <input 
                                    type="text" 
                                    placeholder="Enter your name" 
                                    onChange={nameOnChange} 
                                    value={name} 
                                    className="input input-bordered input-primary w-full" 
                                />
                            </div>

                            <button type="submit" className="btn btn-primary w-full shadow-md">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Submitted Result UI */}
  
        </div>
    )
}

export default HookForm