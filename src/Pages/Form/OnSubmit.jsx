import React, { useState } from 'react'

const OnSubmit = () => {
  const [result, setResult] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()

    // Capture the values from the form
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value
    }

    // Store them in state to show in the UI
    setResult(formData)

    // Optional: clear the form
    e.target.reset()
  }

  return (
    <div className="flex flex-col items-center justify-center p-10 gap-6">
      <div className="card w-full max-w-md bg-base-100 shadow-2xl border border-base-200">
        <div className="card-body">
          <h2 className="card-title text-3xl font-bold justify-center mb-6 text-primary">
            OnSubmit
          </h2>
          {result && (
            <div className="card w-full max-w-md bg-secondary text-secondary-content shadow-xl animate-bounce-short">
              <div className="card-body">
                <h3 className="card-title text-sm uppercase opacity-80">Submitted Result:</h3>
                <p className="text-lg"><strong>Name:</strong> {result.name}</p>
                <p className="text-lg"><strong>Email:</strong> {result.email}</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="form-control">
              <input
                type="text"
                name="name"
                placeholder="Enter Name"
                className="input input-bordered input-primary w-full"
                required
              />
            </div>

            <div className="form-control">
              <input
                type="email"
                name="email"
                placeholder="Enter email"
                className="input input-bordered input-primary w-full"
                required
              />
            </div>

            <button type="submit" className="btn btn-primary w-full shadow-lg">
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* UI Result Display */}

    </div>
  )
}

export default OnSubmit