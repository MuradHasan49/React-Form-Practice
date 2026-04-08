import React from 'react'
import OnSubmit from '../Form/OnSubmit'
import FormAction from '../Form/FormAction'
import Controlled from '../Form/Controlled'
import Uncontrolled from '../Form/Uncontrolled'
import HookForm from '../Form/HookForm'

const Home = () => {

    return (
        <>
            <div className="min-h-[85vh] px-10 py-5">
                <OnSubmit/>
                <FormAction/>
                <Controlled/>
                <Uncontrolled/>
                <HookForm/>
            </div>
        </>
    )
}

export default Home