import { useRouter } from 'next/router'

function ProductItem({ product }) {

    const router = useRouter();
    
    if(router.isFallback) {
        return <h1>Loading...</h1>
    }

    return (
        <div>
            <h1>
                About Product Item - {product.id}
            </h1>
            <p>Price: {product.price}</p>
        </div>
    )
}

export default ProductItem

export async function getStaticProps(context) {
    const { params } = context;
    const response = await fetch(`http://localhost:4000/products/${params.productId}`);
    const data = await response.json()

    if(!data.id) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            product: data
        },
        revalidate: 10
    }
}

export async function getStaticPaths() {
    return {
        paths: [{ params: { productId: '1' } }],
        fallback: 'blocking',
    }
}
