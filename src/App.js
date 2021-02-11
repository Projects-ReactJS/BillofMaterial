import './App.css';
import React from "react";
import BillofMaterialHeader from "./components/BillofMaterialHeader";
import BillofMaterialItem from "./components/BillofMaterialItem";

class App extends React.Component{

  render(){
    return (
      <div>
        <BillofMaterialHeader/>
        <BillofMaterialItem/>
      </div>
    );
  }
  
  }



export default App;
