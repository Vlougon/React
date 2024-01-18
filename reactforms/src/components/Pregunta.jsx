import ConfirmDeletion from './Modals';
import { useContext } from 'react';
import { QuestionsDispatchContext } from './QuestionContext';
import '../styles/Pregunta.css';

let selectecCardID = 0;

export default function Question({ singleQuestion, questionID }) {
    const { id, questionStatement, possibleAnswer1, possibleAnswer2, possibleAnswer3, possibleAnswer4 } = singleQuestion;
    const dispatch = useContext(QuestionsDispatchContext);

    const deleteQuestion = (deleteMethod) => {

        if (deleteMethod) {
            dispatch({ type: 'REMOVE_QUESTION', payload: selectecCardID })
        }
    }

    const handleDeleteAction = () => {
        selectecCardID = id;
    }

    return (
        <div className="card col-auto">
            <button type="button" className="align-baseline btn-close" data-bs-toggle="modal" data-bs-target="#deleteModal" onClick={handleDeleteAction}></button>
            <div className="card-body">
                <h5 className="card-title">Pregunta Nº{questionID}</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">{questionStatement}</h6>
                <div className="btn-group-vertical" role="group" aria-label="Vertical radio toggle button group">
                    <input type="radio" className="btn-check" name="btn-respuesta" id={`${singleQuestion.id}vbtn-radio1"`} autoComplete="off"></input>
                    <label className="btn btn-outline-primary" htmlFor={`${singleQuestion.id}vbtn-radio1"`}>{possibleAnswer1}</label>
                    <input type="radio" className="btn-check" name="btn-respuesta" id={`${singleQuestion.id}vbtn-radio2"`} autoComplete="off"></input>
                    <label className="btn btn-outline-primary" htmlFor={`${singleQuestion.id}vbtn-radio2"`}>{possibleAnswer2}</label>
                    <input type="radio" className="btn-check" name="btn-respuesta" id={`${singleQuestion.id}vbtn-radio3"`} autoComplete="off"></input>
                    <label className="btn btn-outline-primary" htmlFor={`${singleQuestion.id}vbtn-radio3"`}>{possibleAnswer3}</label>
                    <input type="radio" className="btn-check" name="btn-respuesta" id={`${singleQuestion.id}vbtn-radio4"`} autoComplete="off"></input>
                    <label className="btn btn-outline-primary" htmlFor={`${singleQuestion.id}vbtn-radio4"`}>{possibleAnswer4}</label>
                </div>
            </div>

            <ConfirmDeletion deleteClass={'Pregunta'} deleteFunction={deleteQuestion} />
        </div>
    )
}