import { useState } from 'react'

function useInput() {

    const [value, setValue] = useState("")

    const HandlerInput = (e) => {
        setValue(e.target.value)
    }

    return [value, HandlerInput]
}

export default useInput