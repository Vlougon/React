import { useParams, Link } from 'react-router-dom';
import { CharacterContext } from '../App';
// import useFetch from '../hooks/useFetch';
import '../styles/BlogCharacter.css';
import { useContext } from 'react';

export default function BlogCharacter() {
    const params = useParams();
    const { characterList } = useContext(CharacterContext);

    return (
        <div className='card'>
            <img src={characterList[params.id - 1].image} alt="Foto del Personaje" className='card-img-top' />
            <div className='card-body'>
                <h5 className='card-title'>{characterList[params.id - 1].name}</h5>
                <p className='card-text'>{characterList[params.id - 1].species}</p>
            </div>
            <Link className='btn btn-primary' to="/blog">Go Back</Link>
        </div>
    )
}