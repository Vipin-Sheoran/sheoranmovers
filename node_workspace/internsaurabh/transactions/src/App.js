import logo from './logo.svg';
import './App.css';
import UploadFile from './pages/UploadFile';
import Login from './pages/Login';
import {BrowserRouter,Routes,Route,} from "react-router-dom"
import Summary from './pages/Summary';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
      <Route exact path='/' element={<Login/>}/>
       <Route path='/upload-transaction' element={<UploadFile/>}/>
       <Route path='/summary' element={<Summary/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
