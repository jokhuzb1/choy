import NavbarMenu from "./components/NavBarMenu";
import Sales from './pages/Sales';
import Transactions from './pages/Transactions';
import Products from './pages/Products';
import {useEffect, useState} from 'react';
import { Button } from "react-bootstrap";
  
function App() {
  const [active, setActive] = useState('products');
  const change = ()=>{
    setActive("transactions")
  }
  const pages = {
      sales:<Sales/>,
      transactions:<Transactions/>,
      products:<Products/>
  }

  return (
    <div className="App">
      <NavbarMenu setActive={setActive}/>
      {pages[active]}
    </div>
  );
}

export default App;
