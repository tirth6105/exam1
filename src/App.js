import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

import Mainroutes from './Allroutes/Mainroutes';
import Head from './Components/Head';

function App() {
  return (
    <div>
      
      <Head/>
    <Mainroutes/>
    </div>
  );
}

export default App;
