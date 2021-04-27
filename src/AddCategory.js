import React from 'react'
import PropTypes from 'prop-types'
import { useForm } from './hooks/useForm'

const AddCategory = ({setCategories}) => {

    const {formValues,handleInputChange,handleResetForm} = useForm({
        busqueda:''
    })

    const {busqueda} = formValues

    const handleSubmit = (e) =>{
        e.preventDefault()
        if(busqueda.trim().length < 2){
            return
        }
        setCategories((cat)=> [busqueda, ...cat])
        handleResetForm()
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    name ='busqueda'
                    value = {busqueda}
                    onChange = {handleInputChange} 
                /> 
            </form>
        </>
    )
}

AddCategory.propTypes = {
    setCategories : PropTypes.func.isRequired
}

export default AddCategory
