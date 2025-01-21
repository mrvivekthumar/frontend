import loginImg from "../assets/Images/login.webp"
import Template from "../components/core/Auth/Template"

function Login() {
    return (
        <Template
            title="Welcome Back"
            description1="Enhance your creative skills today, tomorrow, and beyond."
            description2="Build a future-proof career in art with our platform."
            image={loginImg}
            formType="login"
        />
    )
}

export default Login