import { useRouter } from 'next/router'

function Post({ post }) {
    const router = useRouter()

    if(router.isFallback) {
        return <h1>Loading...</h1>
    }

    return (
        <div>
            <h1>{post.id} - {post.title}</h1>
            <p>{post.body}</p>
        </div>
    )
}

export default Post

export async function getStaticPaths() {


    // const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    // const data = await response.json()
    // const paths = data.map(item => {
    //     return {
    //         params: { postId: `${item.id}`}
    //     }
    // })


    return {
        // paths,
        paths: [
            {
                params: { postId: '1'}
            },
            {
                params: { postId: '2'}
            },
            {
                params: { postId: '3'}
            },
        ],
        fallback: true
    }
}

export async function getStaticProps(context) {

    const { params } = context
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    const data = await response.json()

    if(!data.id) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            post: data
        }
    }
}
