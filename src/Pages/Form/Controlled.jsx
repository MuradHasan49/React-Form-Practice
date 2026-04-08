import React, {  useState } from 'react'

const Controlled = () => {

const [ password , setPassword] = useState(null)

const [error , setError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e.target.name.value)
    }
const onChangeHandle =(e) =>{
    setPassword(e.target.value)

    if(password.length < 8 ){
        setError("password must be 8 char or longer")
    }else{
        setError("")
    }
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
            <p className='text-red-400'>{error}</p>
        </>
    )
}

export default Controlled