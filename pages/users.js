import User from '../components/user'

function Users({ users }) {
    return (
        <div>
            {
                users.map(user => (
                    <div key = {user.id}>
                        <User user = {user} />
                    </div>
                ))
            }
        </div>
    )
}

export default Users

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json()
    console.log('pre-rendering is going')
    return {
        props: {
            users: data
        }
    }
}