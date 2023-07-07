import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { getQuery } from '../services/recipesService';
import Loading from "../components/Loading";

const SearchResult = () => {
    const [queryResult, setQueryResult] = useState();
    const [loading, setLoading] = useState(false);
    let params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetchQuery(params.name);
        // eslint-disable-next-line
    }, [params.name])

    const fetchQuery = async(name) => {
        setLoading(true);

        await getQuery(name)
        .then(data => setQueryResult(data.results))
        .catch(error => {
            console.log(error); 
            navigate('/error');
        });

        setLoading(false);
    }
    return (
        <div className="query-wrapper">
            {loading ? <Loading/> : (queryResult && queryResult.length > 0)  ? 
            queryResult.map((rec) => {
            return(
                <Link to={`/recipe/${rec.id}`} key={rec.id} className="query-item">
                    <img src={rec.image} alt="query-dish" className="query-item-img" />
                    <h3 className="query-item-title">{rec.title}</h3>
                </Link>
            )
            }) : 
            <div className="no-result">
                <h3 className="no-result-text"> We cant find anything.<br/>Try to change your request. </h3>
                <button className="no-result-btn" onClick={() => navigate('/')}>Home page</button>
            </div>}
        </div>
  )
}

export default SearchResult