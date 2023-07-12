import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from './components/Main/main.jsx';
import ShowAll from './components/ShowAll/showAll.jsx';
import Write from './components/write/write.jsx';
import ShowPost from './components/ShowPost/showPost';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/ShowAll' element={<ShowAll />}></Route>
          <Route exact path='/Write' element={<Write></Write>}></Route>
          <Route exact path='/ShowPost' element={<ShowPost></ShowPost>}></Route>
          <Route path='/' element={<Main />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
