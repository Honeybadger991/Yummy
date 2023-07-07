import { useState, useEffect } from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Link, useNavigate } from "react-router-dom";
import '@splidejs/react-splide/css';

import star from '../assets/star-shape.svg';
import clock from '../assets/fast.svg';
import carrot from '../assets/olives.svg';
import { getPopular, getFast, getVegetarian } from "../services/recipesService";
import Loading from "./Loading";

const Suggestions = () => {
    const [popular, setPopular] = useState();
    const [fast, setFast] = useState();
    const [vegetarian, setVegetarian] = useState();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        fetchPopular();
        fetchFast();
        fetchVegetarian();
        // eslint-disable-next-line
    }, [])

    const fetchPopular = async() => {
        setLoading(true);

        await getPopular()
        .then(data => setPopular(data.recipes))
        .catch(error => {
            console.log(error); 
            navigate('/error');
        });

        setLoading(false);
    }

    const fetchFast = async() => {
        setLoading(true);

        await getFast()
        .then(data => setFast(data.results))
        .catch(error => {
            console.log(error); 
            navigate('/error');
        });

        setLoading(false);
    }

    const fetchVegetarian = async() => {
        setLoading(true);

        await getVegetarian()
        .then(data => setVegetarian(data.recipes))
        .catch(error => {
            console.log(error); 
            navigate('/error');
        });

        setLoading(false);
    }


    
    return(
        <div className="suggestions-wrapper">
            {loading ? <Loading/> : 
            <>
                <div className="popular-wrapper">
                    <div className="popular-section">
                        <h1 className="popular-title">Popular</h1>
                        <img src={star} alt="popular-icon" className="popular-img" />
                    </div>
                    <Splide options={{
                        perPage: 3,
                        pagination: false,
                        arrows: true,
                        drag: 'free',
                        breakpoints: {
                            991: {
                                perPage: 2,
                            },
                            767:{
                                perPage: 1,
                            }
                        }
                    }}>
                        {popular && popular.map((rec) => {
                        return(
                            <SplideSlide style={{
                                display: 'flex',
                                justifyContent: 'center'
                            }} 
                            key={rec.id}>
                                <Link to={`/recipe/${rec.id}`} className="popular-item">
                                    <h3 className="popular-item-title">{rec.title}</h3>
                                    <img src={rec.image} alt="popular-dish" className="popular-item-img" />
                                    <div className="background"></div>
                                </Link>
                            </SplideSlide>
                        )
                        })}
                    </Splide>
                </div>
                <div className="fast-wrapper">
                    <div className="fast-section">
                        <h2 className="fast-title">Fast</h2>
                        <img src={clock} alt="fast-icon" className="fast-img" />
                    </div>
                    <Splide options={{
                        perPage: 4,
                        pagination: false,
                        arrows: true,
                        drag: 'free',
                        breakpoints: {
                            991: {
                                perPage: 3,
                            },
                            767:{
                                perPage: 2,
                            }
                        }
                    }}>
                        {fast && fast.map((rec) => {
                        return(
                            <SplideSlide style={{
                                display: 'flex',
                                justifyContent: 'center'
                            }}
                            key={rec.id}>
                                <Link to={`/recipe/${rec.id}`} className="fast-item">
                                    <h3 className="fast-item-title">{rec.title}</h3>
                                    <img src={rec.image} alt="fast-dish" className="fast-item-img" />
                                    <div className="background"></div>
                                </Link>
                            </SplideSlide>
                        )
                        })}
                    </Splide>
                </div>
                <div className="vegetarian-wrapper">
                    <div className="vegetarian-section">
                        <h2 className="vegetarian-title">Vegetarian</h2>
                        <img src={carrot} alt="vegetarian-icon" className="vegetarian-img" />
                    </div>
                    <Splide options={{
                        perPage: 3,
                        pagination: false,
                        arrows: true,
                        drag: 'free',
                        breakpoints: {
                            991: {
                                perPage: 2,
                            },
                            767:{
                                perPage: 1,
                            }
                        }
                    }}>
                        {vegetarian && vegetarian.map((rec) => {
                        return(
                            <SplideSlide style={{
                                display: 'flex',
                                justifyContent: 'center'
                            }}
                            key={rec.id}>
                                <Link to={`/recipe/${rec.id}`} className="vegetarian-item">
                                    <h3 className="vegetarian-item-title">{rec.title}</h3>
                                    <img src={rec.image} alt="vegetarian-dish" className="vegetarian-item-img" />
                                    <div className="background"></div>
                                </Link>
                            </SplideSlide>
                        )
                        })}
                    </Splide>
                </div>
            </>}
        </div>
    )
}

export default Suggestions;