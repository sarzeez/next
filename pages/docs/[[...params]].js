import { useRouter } from 'next/router'
import Link from 'next/link'

function Docs() {

    const router = useRouter();
    const { params = [] } = router.query;

    if(params.length === 2) {
        return <h1>Docs Feature - {params[0]} and {params[1]}</h1>
    }

    else if(params.length === 1) {
        return <h1>Docs Feature - {params[0]}</h1>
    }

    return (
        <div>
            <h1>Docs Page</h1>
            <Link href = '/'>
                Home
            </Link>
        </div>
    )
}

export default Docs
