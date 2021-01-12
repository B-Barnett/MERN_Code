

const ProductForm = props => {
    const {form, errors, submitValue, handleSubmit, handleForm} = props;

    return(
        <form onSubmit={handleSubmit} >
            <div>
                <label>Product Name: </label>
                <input
                type="text"
                name="name"
                onChange={handleForm}
                value={form.name}
                />
                <span style={{color: "red"}} >{errors.name ? errors.name.message : ""}</span>
            </div>
            <div>
                <label>Product Price: </label>
                <input
                type="number"
                name="price"
                onChange={handleForm}
                value={form.price}
                />
                <span style={{color: "red"}} >{errors.price ? errors.price.message : ""}</span>
            </div>
            <div>
                <label>Product Description: </label>
                <input                    
                type="text"
                name="description"
                onChange={handleForm}
                value={form.description}
                />
                <span style={{color: "red"}} >{errors.description ? errors.description.message : ""}</span>
            </div>
            <input type="submit" value={submitValue}/>
        </form>
    );
}

export default ProductForm;