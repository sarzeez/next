import Link from 'next/link'

function ProductList() {

    const links = [1, 2, 3, 4]

    return (
        <div>
            {
                links.map(item => (
                    <Link key = {item} href = {`/product/${item}`} passHref replace>
                        <h1>Product {item}</h1>
                    </Link>

                ))
            }
        </div>
    )
}

export default ProductList
