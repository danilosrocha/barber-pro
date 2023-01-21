import { useState } from "react";
import Login from "./login.layout";
const LoginController = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function handleLogin() {
        alert(" ----> Login ")
        console.log(email);
        console.log(password);
    }

    const variables = {
        email,
        password,
    }

    const handlers = {
        handleLogin,
        setEmail,
        setPassword,
    }

    return (
        <Login
            handlers={handlers}
            variables={variables}
        />
    )
}

export default LoginController

