import React, {useState, useEffect} from 'react';
import Axios from 'axios';

const Show = props => {
    const [product, setProduct] = useState({
        name: "",
        price: 0,
        description: ""
    });

    // const [product, setProduct] = useState(null); could use this instead of above. ^^^

    useEffect(() => {
        Axios.get(`http://localhost:8000/api/products/${props.id}`)
            .then(res => setProduct(res.data.results))
            .catch(err => console.log(err))
    }, [props])

    return(
        // product ? option to use the ternary
        <div>
            <h3>Product: {product.name}</h3>
            <h3>Price: {product.price}</h3>
            <h3>Description: {product.description}</h3>
        </div>
        // : <div><h1>Loading...</h1></div> could use this ternerary instead of above.
    );
}

export default Show;