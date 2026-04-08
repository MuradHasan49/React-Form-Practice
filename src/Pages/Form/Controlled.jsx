import React, { useState } from 'react'

const Controlled = () => {
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [submitted, setSubmitted] = useState(false)

    const onChangeHandle = (e) => {
        const val = e.target.value
        setPassword(val)

        // Use 'val' instead of 'password' for immediate validation
        if (val.length > 0 && val.length < 8) {
            setError("Password must be 8 characters or longer")
        } else {
            setError("")
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!error && password.length >= 8) {
            console.log("Name:", e.target.name.value)
            console.log("Password:", password)
            setSubmitted(true)
        }
    }

    return (
        <div className="flex flex-col items-center justify-center p-10 gap-6">
            <div className="card w-full max-w-md bg-base-100 shadow-2xl border border-warning/20">
                <div className="card-body">
                    <h2 className="card-title text-3xl font-bold justify-center mb-6 text-warning">
                        Controlled
                    </h2>
                    {submitted && !error && (
                        <div className="alert alert-success w-full max-w-md shadow-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <span>Form submitted successfully!</span>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <div className="form-control">
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter Name"
                                className="input input-bordered focus:input-warning w-full"
                                required
                            />
                        </div>

                        <div className="form-control">
                            <input
                                type="password"
                                name="password"
                                onChange={onChangeHandle}
                                value={password}
                                placeholder="Enter password"
                                className={`input input-bordered w-full ${error ? 'input-error' : 'focus:input-warning'}`}
                                required
                            />
                            {error && (
                                <label className="label">
                                    <span className="label-text-alt text-error font-medium">{error}</span>
                                </label>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="btn btn-warning w-full mt-2"
                            disabled={!!error || password.length < 1}
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>


        </div>
    )
}

export default Controlled