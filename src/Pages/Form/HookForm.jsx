import React, { useState } from 'react'
import useInputField from '../../Hooks/Hooks'

const HookForm = () => {
    const [name , nameOnChange] = useInputField('')
    const [data , setData] = useState(null)

    const handleonSubmit = (e)=>{
        e.preventDefault()
        setData(name)
    }

    
    return (
        <>
        <div className="">{data}</div>
            <form onSubmit={handleonSubmit}>
                <input type="text" onChange={nameOnChange} defaultValue={name} />
                <br />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </>
    )
}

export default HookForm