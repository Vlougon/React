import { useState } from 'react';
import QuestionForm from './components/FormularioPregunta';
import CreatedQuestions from './components/PreguntasCreadas'
import { createContext } from 'react';
import './App.css';

let actualQuestionID = 1;

export const QuestionContext = createContext();

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
      <QuestionContext.Provider value={{ removeQuestion }}>
        <QuestionForm addNewQuestion={addQuestion} />
        <CreatedQuestions addedQuestions={questions} />
      </QuestionContext.Provider>
    </div>
  );
}

export default App;
