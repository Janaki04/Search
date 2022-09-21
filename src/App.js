import './App.css';
import Details from './Component/Details';
import { Create } from './Component/Text';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Data from './Component/Data';

function App() {
  return (
    <div className="App">
      <Create>
       
     
     <Router>
     
     <Routes>
      <Route path="/" element={<Details/>}/>
     <Route path='/name' element={<Data/>}>
            <Route path=':id' element={<Data/>}/>
          </Route>
     </Routes>
     </Router>
     </Create>

 
    </div>
  );
}

export default App;
