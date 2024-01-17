import { Link, useSearchParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { CharacterContext } from "../App.js";
import useFetch from '../hooks/useFetch.jsx';
import '../styles/Blog.css';

export default function Blog() {
    const { data, error, loading } = useFetch("https://rickandmortyapi.com/api/character");
    const { setCharacterList } = useContext(CharacterContext);
    let [searchParams, setSearchParams] = useSearchParams('');

    const handleChange = (e) => {
        setSearchParams({ [e.target.name]: e.target.value });
    }

    useEffect(() => {
        if (data) {
            setCharacterList(data.results);
        }
    }, [data, setCharacterList]);

    if (loading) return (<h1>Buscando ...</h1>);
    if (error) return (<h1>Un error ha ocurrido ...</h1>);

    return (
        <div>
            <h1>Blog - Elige a tu personaje favorito</h1>
            <input type="text" name="searcher" onChange={handleChange} className="form-control my-3" alt="Buscador" value={searchParams.get("searcher") || ""} />
            <ul className="list-group">
                {
                    data.results.map(item => {
                        const lowerCaseName = item.name.toLowerCase();
                        const lowerCaseFilter = searchParams.get("searcher") ? searchParams.get("searcher").toLowerCase() : "";

                        if (!lowerCaseName.includes(lowerCaseFilter) && !searchParams.get("searcher").match(/^(?=\s*$)/)) {
                            return null
                        }

                        return (
                            <Link className="list-group-item" key={item.id} to={`/blog/${item.id}`}>
                                {item.name}
                            </Link>
                        )
                    })
                }
            </ul>
        </div>
    )
}