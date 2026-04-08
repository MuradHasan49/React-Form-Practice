import { useState } from "react"

const useInputField = (defaultValue) => {
    const [inputValue, setInputValue] = useState(defaultValue)

    const handleInputonChange = (e) => {
        setInputValue(e.target.value)

    }

    return [inputValue, handleInputonChange]
}

export default useInputField;