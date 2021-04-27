import { useState } from "react"

export const useForm = (valores={}) =>{
    const [formValues, setFormValues] = useState(valores)

    const handleInputChange = ({target}) =>{
        setFormValues({
            ...formValues,
            [target.name]:target.value
        })
    }

    const handleResetForm = () =>{
        setFormValues(valores)
    }

    return {
        formValues,
        handleInputChange,
        handleResetForm
    }
}