import React from 'react'

const FormAction = () => {
    const formActionHandle =(FormData)=>{
        console.log(FormData.get("name"))
        console.log(FormData.get("email"))
    }
  return (
    <>
        <form action={formActionHandle} >
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

export default FormAction