import React, {useState} from 'react';
import {navigate} from '@reach/router';
import Axios from 'axios';
import ProductForm from '../components/ProductForm';

const Create = props => {
    const [form, setForm] = useState({
        name: "",
        price: 0,
        description: "",
    });

    const [errors, setErrors] = useState({
        name: "",
        price: "",
        description: ""
    });

    const handleForm = e => {
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        Axios.post('http://localhost:8000/api/products/create',form)
            .then(res => {
                if(res.data.results){
                    navigate('/');
                }
                else{
                    console.log(res.data);
                    setErrors(res.data)
                }
            })
    }

    return(
        <div>
            <h2>Add a Product</h2>
            <ProductForm
                form = {form}
                errors = {errors}
                handleForm = {handleForm}
                handleSubmit = {handleSubmit}
                submitValue = "Create a Product"
            />
        </div>
    );
}

export default Create;