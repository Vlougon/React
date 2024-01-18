import Swal from 'sweetalert2';
import { useContext, useState } from "react";
import { QuestionsDispatchContext } from "./QuestionContext";
import '../styles/FormularioPregunta.css';

export default function QuestionForm() {
    const [question, setQuestion] = useState({
        questionStatement: "",
        possibleAnswer1: "PossibleAnswer1",
        possibleAnswer2: "PossibleAnswer2",
        possibleAnswer3: "PossibleAnswer3",
        possibleAnswer4: "PossibleAnswer4",
        correctAnswer: 0,
        liked: false
    });
    const dispatch = useContext(QuestionsDispatchContext);

    const handleChange = (e) => {
        let newValue = (e.target.type === "checkbox") ? e.target.checked : e.target.value;

        if (e.target.type === "radio") newValue = parseInt(e.target.id[e.target.id.length - 1]);

        setQuestion({
            ...question,
            [e.target.name]: newValue,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (question.correctAnswer === 0) {

            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "¡No puedes añadir una pregunta cuya respuetsa correcta no ha sido especificada!",
            });

            return
        }

        dispatch({ type: 'ADD_QUESTION', payload: {...question }});

        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "¡Pregunta Añadida!",
            showConfirmButton: false,
            timer: 1500
        });
    }

    return (
        //En cada elemento usamos el spreed operator ... para crear una copia del estado y modificar
        //el valor que ha cambiado
        <form onSubmit={handleSubmit} >
            <textarea
                className="form-control mb-2 bg-primary text-white"
                placeholder="Enunciado pregunta"
                name="questionStatement"
                autoCapitalize="on"
                value={question.questionStatement}
                onChange={handleChange}
                required
            />

            <div className="row">
                <div className="col-12 col-sm-6 form-check mb-2">
                    <input type="radio" name="correctAnswer" className="form-check-input" id="inputCheck1" onChange={handleChange} />
                    <input
                        type="text"
                        placeholder="Respuesta 1"
                        className="form-control mb-2"
                        name="possibleAnswer1"
                        htmlFor="inputCheck1"
                        value={question.possibleAnswer1}
                        onChange={handleChange}
                    />
                </div>

                <div className="col-12 col-sm-6 form-check mb-2">
                    <input type="radio" name="correctAnswer" className="form-check-input" id="inputCheck2" onChange={handleChange} />
                    <input
                        type="text"
                        placeholder="Respuesta 2"
                        className="form-control mb-2"
                        name="possibleAnswer2"
                        htmlFor="inputCheck2"
                        value={question.possibleAnswer2}
                        onChange={handleChange}
                    />
                </div>

                <div className="col-12 col-sm-6 form-check mb-2">
                    <input type="radio" name="correctAnswer" className="form-check-input" id="inputCheck3" onChange={handleChange} />
                    <input
                        type="text"
                        placeholder="Respuesta 3"
                        className="form-control mb-2"
                        name="possibleAnswer3"
                        htmlFor="inputCheck3"
                        value={question.possibleAnswer3}
                        onChange={handleChange}
                    />
                </div>

                <div className="col-12 col-sm-6 form-check mb-2">
                    <input type="radio" name="correctAnswer" className="form-check-input" id="inputCheck4" onChange={handleChange} />
                    <input
                        type="text"
                        placeholder="Respuesta 4"
                        className="form-control mb-2"
                        name="possibleAnswer4"
                        htmlFor="inputCheck4"
                        value={question.possibleAnswer4}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <div className="form-check form-switch form-check-reverse mb-2">
                <input type="checkbox" name="liked" className="form-check-input" id="inputCheckFavourite" checked={question.liked}
                    //onChange={(e) => (setRegistroForm({...registroForm, priority: e.target.checked}))}/
                    onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="inputCheckFavourite">Favorita</label>
            </div>
            <button type="submit" className="btn btn-primary">
                Agregar
            </button>
        </form>
    )
}