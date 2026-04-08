import React, { useState } from 'react'

const FormAction = () => {
  const [user, setUser] = useState(null)

  const formActionHandle = (formData) => {
    const name = formData.get("name")
    const email = formData.get("email")

    // Update UI with result
    setUser({ name, email })

    console.log(name, email)
  }

  return (
    <div className="flex flex-col items-center justify-center p-10 gap-8">
      <div className="card w-full max-w-md bg-base-100 shadow-2xl border border-primary/20">
        <div className="card-body">
          <h2 className="card-title text-3xl font-black justify-center mb-6 text-secondary">
            FormAction
          </h2>
          {user && (
            <div className="stats shadow-lg bg-secondary text-secondary-content w-full max-w-md">
              <div className="stat">
                <div className="stat-title text-secondary-content/70">Submitted User</div>
                <div className="stat-value text-2xl">{user.name}</div>
                <div className="stat-desc text-secondary-content/80">{user.email}</div>
              </div>
            </div>
          )}

          <form action={formActionHandle} className="flex flex-col gap-4">
            <div className="form-control">
              <input
                type="text"
                name="name"
                placeholder="Enter Name"
                className="input input-bordered input-secondary w-full"
                required
              />
            </div>

            <div className="form-control">
              <input
                type="email"
                name="email"
                placeholder="Enter email"
                className="input input-bordered input-secondary w-full"
                required
              />
            </div>

            <button type="submit" className="btn btn-secondary w-full text-white uppercase tracking-widest">
              Run Action
            </button>
          </form>
        </div>
      </div>


    </div>
  )
}

export default FormAction