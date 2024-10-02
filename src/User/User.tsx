import { useContext } from "react"
import { UserContext } from "../Context/UserContext"

const User = () => {
    const user = useContext<string>(UserContext);

    return (
        <div>
            <h1>{user}</h1>
        </div>
    )
}

export default User