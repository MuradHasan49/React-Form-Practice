import React, { useRef } from 'react'

const Uncontrolled = () => {

    const nameRef = useRef('')
    const emailRef = useRef('')

    const handleSubmit =(e)=>{
        e.preventDefault()
        console.log(nameRef.current.value)
        console.log(emailRef.current.value)
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" ref={nameRef} name="name" placeholder='Enter Name' />
                <br />
                <br />
                <input type="email" ref={emailRef} name="email"  placeholder='Enter email' />
                <br />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </>
    )
}

export default Uncontrolled