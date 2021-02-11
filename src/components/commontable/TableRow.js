import React from "react";
import "./TableRow.css";
class TableRow extends React.Component {
 constructor(props){

    super();

 }

  render() {
    const {characters} = this.props;
    if(characters){

 
    return   characters.data.map((item,index)=>{
     return ( <tr className="row" key={index}> <td>{item.name}</td>   
          <td>{item.job}</td>  <td><button className="big-button" title={"Delete " + item.name} onClick = {() => this.props.removeCharacter(index)}>Delete</button></td>  </tr> )
        
      }) 
    }
    else
    {
        return<div className="no-data">No Data</div>
    }
  }
}

export default TableRow;