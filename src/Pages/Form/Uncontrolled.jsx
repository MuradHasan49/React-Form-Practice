import React, { useRef, useState } from 'react'

const Uncontrolled = () => {
    const nameRef = useRef(null)
    const emailRef = useRef(null)
    const [submittedData, setSubmittedData] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        
        const data = {
            name: nameRef.current.value,
            email: emailRef.current.value
        }
        
        setSubmittedData(data)
        console.log(data)
    }

    return (
        <div className="flex flex-col items-center justify-center p-10 gap-6">
            <div className="card w-full max-w-md bg-base-100 shadow-2xl border border-info/20">
                <div className="card-body">
                    <h2 className="card-title text-3xl font-bold justify-center mb-6 text-info">
                        Uncontrolled Using Ref
                    </h2>
                                {submittedData && (
                <div className="stats shadow bg-info text-info-content w-full max-w-md">
                    <div className="stat">
                        <div className="stat-title text-info-content/70">Ref Captured Data</div>
                        <div className="stat-value text-xl">{submittedData.name}</div>
                        <div className="stat-desc text-info-content/80">{submittedData.email}</div>
                    </div>
                </div>
            )}

                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Full Name</span>
                            </label>
                            <input 
                                type="text" 
                                ref={nameRef} 
                                name="name" 
                                placeholder="Enter Name" 
                                className="input input-bordered input-info w-full" 
                                required 
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email Address</span>
                            </label>
                            <input 
                                type="email" 
                                ref={emailRef} 
                                name="email" 
                                placeholder="Enter email" 
                                className="input input-bordered input-info w-full" 
                                required 
                            />
                        </div>

                        <button type="submit" className="btn btn-info w-full text-white mt-2">
                            Submit
                        </button>
                    </form>
                </div>
            </div>


        </div>
    )
}

export default Uncontrolled