import './App.css';
import { BrowserRouter as Router, Switch, Route} from  "react-router-dom";
import React from "react";
import BillofMaterialHeader from "./components/BillofMaterialHeader";
import BillofMaterialItem from "./components/BillofMaterialItem";
import CompanyLogo from './components/BillofMaterialHeader/CompanyLogo';
class App extends React.Component{

  render(){
    return (
      <Router> 
      <div>
      <CompanyLogo/>
      <Route path="/" exact component={BillofMaterialHeader}>
  
        </Route>
        <Route path="/bomitem"  component={BillofMaterialItem}>
        </Route>
      </div>
      </Router>
     
    );
  }
  
  }



export default App;
