// import logo from './logo.svg';
import { useState } from 'react';
import QuestionForm from './components/FormularioPregunta';
import CreatedQuestions from './components/PreguntasCreadas'
import './App.css';

let actualQuestionID = 1;

function App() {
  const [questions, setQuestions] = useState([]);

  const addQuestion = (newest) => {
    newest.id = actualQuestionID;
    actualQuestionID++;
    setQuestions([...questions, newest]);
  };

  const removeQuestion = (id) => {
    setQuestions(questions.filter((question) => question.id !== id));
  };

  return (
    <div className="App">
      <QuestionForm addNewQuestion={addQuestion} />
      <CreatedQuestions addedQuestions={questions} deleteQuestion={removeQuestion} />
    </div>
  );
}

export default App;
