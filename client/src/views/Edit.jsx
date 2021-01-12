import React, {useState, useEffect} from 'react';
import ProductForm from '../components/ProductForm';
import Axios from 'axios';
import { navigate } from '@reach/router';

const Edit = props => {
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

    useEffect(() => {
        Axios.get(`http://localhost:8000/api/products/${props.id}`)
            .then(res => setForm(res.data.results))
            .catch(err => console.log(err))
    }, [props])

    const handleForm = e => {
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }

    const handleUpdate = e => {
        e.preventDefault();
        Axios.put(`http://localhost:8000/api/products/update/${props.id}`,form)
            .then(res => navigate(`/`))
            .catch(err => console.log(err))
    }

    return(
        <div>
            <h2>Edit Product</h2>
            <ProductForm
                form = {form}
                errors = {errors}
                handleForm = {handleForm}
                handleSubmit = {handleUpdate}
                submitValue = "Edit this product"
            />
        </div>
    );
}

export default Edit;