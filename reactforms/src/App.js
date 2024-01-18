import { useReducer/*, useState*/ } from 'react';
import QuestionForm from './components/FormularioPregunta';
import CreatedQuestions from './components/PreguntasCreadas'
import { QuestionsContext, QuestionsDispatchContext } from './components/QuestionContext';
import './App.css';

let questionID = 0;

function App() {
  const [questions, dispatch] = useReducer(questionReducer, { questions: [] });
  // const [questions, setQuestions] = useState([]);
  // const addQuestion = (newest) => {
  //   // setQuestions([...questions, newest]);
  //   dispatch({ type: 'ADD_QUESTION', payload: newest });
  // };
  // const removeQuestion = (id) => {
  //   // setQuestions(questions.filter((question) => question.id !== id));
  //   dispatch({ type: 'REMOVE_QUESTION', payload: id });
  // };

  return (
    <div className="App">
      <QuestionsContext.Provider value={questions}>
        <QuestionsDispatchContext.Provider value={dispatch}>
          <QuestionForm />
          <CreatedQuestions />
        </QuestionsDispatchContext.Provider>
      </QuestionsContext.Provider>
    </div>
  );
}

const questionReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_QUESTION':
      action.payload.id = questionID;
      questionID++;
      return { questions: [...state.questions, action.payload] };

    case 'REMOVE_QUESTION':
      return { questions: state.questions.filter(question => question.id !== action.payload) };

    default:
      return state;
  }
}

export default App;
