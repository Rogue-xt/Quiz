import './App.css';
import Quiz from './Quiz';
import { Route,Routes } from 'react-router-dom';
import QuizData from './QuizData';
import Home from './Home';


function App() {
  return (
    <div className="App">
       <Routes>
       <Route path='' element={<Home/>}></Route>
        <Route path='/quiz' element={<Quiz/>}></Route>
        <Route path='/score/:mark' element={<QuizData/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
