import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getDetails } from '../services/recipesService';
import Loading from "../components/Loading";
import time from '../assets/hourglass.svg';
import slice from '../assets/slice.svg';

const Recipe = () => {
    const [details, setDetails] = useState();
    const [text, setText] = useState('ingredients');
    const [loading, setLoading] = useState(false);
    let params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetchDetails(params.id);
        // eslint-disable-next-line
    }, [params.id])

    const fetchDetails = async(id) => {
        setLoading(true);

        await getDetails(id)
        .then(data => setDetails(data))
        .catch(error => {
            console.log(error); 
            navigate('/error');
        });

        setLoading(false);
    }

    return (
        <div className="recipe-wrapper">
            {loading ? <Loading/> : details && 
            <>
            <div className="recipe-info">
                <h2 className="recipe-name">{details.title}</h2>
                <img src={details.image} alt="dish" className="recipe-img" />
                <p className="recipe-description" dangerouslySetInnerHTML={{__html: details.summary}}></p>
                <div className="recipe-time">
                    <img src={time} alt="time-icon" className="recipe-time-img" />
                    <p className="recipe-time-text">Cooking time: {details.readyInMinutes} minutes</p>
                </div>
                <div className="recipe-servings">
                    <img src={slice} alt="servings-icon" className="recipe-servings-img" />
                    <p className="recipe-servings-text">Number of servings: {details.servings}</p>
                </div>
            </div>
            <div className="recipe-guide">
                <div className="recipe-btns">
                    <button className={text === 'ingredients' ? "recipe-btn active" : "recipe-btn"} 
                    onClick={() => setText('ingredients')}>
                    Ingredients</button>
                    <button className={text === 'instructions' ? "recipe-btn active" : "recipe-btn"} 
                    onClick={() => setText('instructions')}>
                    Instructions</button>
                </div>
                {text === 'ingredients' ? 
                <div className="recipe-text recipe-ingredients">{details.extendedIngredients.map((ingr, i) => {
                    return(
                        <p key={i}>{i+1}. {ingr.original}</p>
                    )
                })}</div> : 
                <p className="recipe-text recipe-instructions" dangerouslySetInnerHTML={{__html: details.instructions}}></p>}
            </div>
            </>}
        </div>
    )
}

export default Recipe