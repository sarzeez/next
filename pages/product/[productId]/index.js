import { useRouter } from 'next/router'

function ProductItem() {

    const router = useRouter();
    const {productId} = router.query;

    return (
        <div>
            <h1>
                About Product Item - {productId}
            </h1>
        </div>
    )
}

export default ProductItem
