
import './App.css';
import {BrowserRouter} from 'react-router-dom'
import NavBar from './components/layout/NavBar';
import Home from './components/dashboard/Home';

import { projects } from './components/projects/project'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Home projects={projects} />
      
      </div>
    </BrowserRouter>
    
  );
}

export default App;
