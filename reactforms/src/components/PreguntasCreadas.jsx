import { useContext } from "react";
import { QuestionsContext } from "./QuestionContext";
import Question from "./Pregunta";

export default function CreatedQuestions() {
    const { questions } = useContext(QuestionsContext);
    let tempID = 0;

    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                {
                    questions.map((currentQuestion) => {
                        tempID++;
                        return <Question key={currentQuestion.id} singleQuestion={currentQuestion} questionID={tempID} />
                    })
                }
            </div>
        </div>
    )
}