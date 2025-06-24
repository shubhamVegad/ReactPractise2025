import { Link } from "react-router"

export default function UserList() {
    const userData = [
        { id: 1, name: 'Anil' },
        { id: 2, name: 'Sam' },
        { id: 3, name: 'Sidhu' },
        { id: 4, name: 'Peter' },
        { id: 5, name: 'Bruce' },
        { id: 6, name: 'Tony' },

    ]
    return <div style={{ marginLeft: 20 }} >
        <h1>User List Page</h1>
        {
            userData.map((item) => (
                <div>
                    <h4><Link to={"/users/"+item.id}  >{item.name}</Link></h4>
                </div>
            ))
        }

<h1>User List Page with Name in URL</h1>
        {
            userData.map((item) => (
                <div>
                    <h4><Link to={"/users/"+item.id+"/"+item.name}  >{item.name}</Link></h4>
                </div>
            ))
        }

    </div>
}