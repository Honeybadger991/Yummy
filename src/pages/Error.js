import { useNavigate } from "react-router-dom"
const Error = () => {

    const navigate = useNavigate();
    
    return (
        <div className="error-wrapper">
            <h3 className="error-message">Oops... <br/> Something went wrong... <br/>Please try again later!</h3>
            <button className="error-btn" onClick={() => navigate('/')}>Home page</button>
        </div>
    )
}

export default Error