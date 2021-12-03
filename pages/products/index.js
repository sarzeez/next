function ProductList({ products }) {

    return (
        <div>
            <h1>Product List</h1>
            {
                products.map(item => (
                    <div key = {item.id}> 
                        <h1>Product {item.id}</h1>
                        <p>Title: {item.price}</p>
                        <hr />
                    </div>

                ))
            }
        </div>
    )
}

export default ProductList

export async function getStaticProps() {
    const response = await fetch(`http://localhost:4000/products`)
    const data = await response.json()
    return {
        props: {
            products: data
        }
    }
}
