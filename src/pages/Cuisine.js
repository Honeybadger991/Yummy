import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { getCuisine } from "../services/recipesService";
import Loading from "../components/Loading";

const Cuisine = () => {
    const [cuisine, setCuisine] = useState();
    const [loading, setLoading] = useState(false);
    let params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetchCuisine(params.cuisine);
        // eslint-disable-next-line
    }, [params.cuisine])

    const fetchCuisine = async(type) => {
        setLoading(true);

        await getCuisine(type)
        .then(data => {
            setCuisine(data.recipes);
            localStorage.setItem('cuisine', JSON.stringify(data.recipes));
        })
        .catch(error => {
            console.log(error); 
            navigate('/error');
        });

        setLoading(false);
    }

    return (
        <div className="cuisine-wrapper">
            {loading ? <Loading/> : 
            (cuisine && cuisine.map((rec) => {
                return(
                    <Link to={`/recipe/${rec.id}`} key={rec.id} className="cuisine-item">
                        <img src={rec.image} alt="cuisine-dish" className="cuisine-item-img" />
                        <h3 className="cuisine-item-title">{rec.title}</h3>
                    </Link>
                )
            }))}
        </div>
    )
}

export default Cuisine