import React, {  useState } from 'react'

const Controlled = () => {
const [ password , setPassword] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e.target.name.value)
    }
const onChangeHandle =(e) =>{
    console.log(e.target.value)
}

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder='Enter Name' />
                <br />
                <br />
                <input  type="password" name="password" onChange={onChangeHandle} defaultValue={password} placeholder='Enter password' />
                <br />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </>
    )
}

export default Controlled