import React from 'react'

const OnSubmit = () => {
    const handleSubmit =(e)=>{
        e.preventDefault()
        console.log(e.target.name.value)
        console.log(e.target.email.value)
    }
  return (
    <>
    <form onSubmit={handleSubmit} >
        <input type="text" name="name" placeholder='Enter Name'/>
        <br />
        <br />
        <input type="email" name="email" placeholder='Enter email' />
        <br />
        <br />
        <input type="submit" value="Submit"   />
    </form>
    </>
  )
}

export default OnSubmit