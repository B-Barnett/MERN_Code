import {useState, useEffect} from 'react';
import Axios from 'axios';
import {Link} from '@reach/router';

const Main = props => {
    const [products, setProducts] = useState([]);
    const [del, setDel] = useState(false);

    useEffect(() => {
        Axios.get('http://localhost:8000/api/products')
            .then(res => setProducts(res.data.results))
            .catch(err => console.log(err))
    }, [del])

    const removeProduct = (id,name) => {
        Axios.delete(`http://localhost:8000/api/products/destroy/${id}`)
            .then(res => {
                if (res.data.results) {
                    setDel(!del);
                    console.log(`${name} Product Removed`);
                }
            })
            .catch(err => console.log(err))
    }
    
    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Product Name: </th>
                        <th>Product Price: </th>
                        <th>Product Description: </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((prod, i) => 
                            <tr key={i}>
                                <td>{prod.name}</td>
                                <td>{prod.price}</td>
                                <td>{prod.description}</td>
                                <td>
                                <Link to={`/products/edit/${prod._id}`}>Edit</Link>
                                <br/>
                                <Link to={`/products/show/${prod._id}`}>Show</Link>
                                <br/>
                                <button
                                    onClick={() => removeProduct(prod._id)}
                                >
                                </button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Main;