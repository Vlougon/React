import { useParams, Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import '../styles/BlogCharacter.css';

export default function BlogCharacter() {
    const params = useParams();
    const url = 'https://rickandmortyapi.com/api/character/' + params.id;
    const { data, loading, error } = useFetch(url);

    if (loading) return (<h1>Buscando Personaje ...</h1>);
    if (error) return (<h1>El personaje no aparece ...</h1>);

    return (
        <div className='card'>
            <img src={data.image} alt="Foto del Personaje" className='card-img-top' />
            <div className='card-body'>
                <h5 className='card-title'>{data.name}</h5>
                <p className='card-text'>{data.species}</p>
            </div>
            <Link className='btn btn-primary' to="/blog">Go Back</Link>
        </div>
    )
}