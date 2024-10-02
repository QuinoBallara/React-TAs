import { useContext } from "react"
import { UserContext } from "../Context/UserContext"

const User = () => {
    const user = useContext(UserContext);

    return (
        <div>
            <h1>{user.username}</h1>
        </div>
    )
}

export default User