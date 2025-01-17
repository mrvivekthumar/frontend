import signupImg from "../assets/Images/signup.webp"
import Template from "../components/core/Auth/Template"

function Signup() {
    return (
        <Template
            title="Join the Millions Celebrating Art with ArtSphere"
            description1="Discover, collect, and showcase timeless art. Art that transforms your space and defines your style."
            description2="Build a collection that inspires today, tomorrow, and forever."
            image={signupImg}
            formType="signup"
        />
    )
}

export default Signup