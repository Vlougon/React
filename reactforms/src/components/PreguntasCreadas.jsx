import Question from "./Pregunta";

export default function CreatedQuestions({ addedQuestions }) {
    let tempID = 0;

    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                {
                    addedQuestions.map((currentQuestion) => {
                        tempID++;
                        return <Question key={currentQuestion.id} singleQuestion={currentQuestion} questionID={tempID} />
                    })
                }
            </div>
        </div>
    )
}