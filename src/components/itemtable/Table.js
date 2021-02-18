import React from 'react';
import TableHeader from './TableHeader';
import TableRow from "./TableRow";
import "./Table.css";
class Table extends React.Component{

    render(){
      const bomdata =  this.props.bomdata;
        return <div>
        <table className="table">
          
          <TableHeader/>
          <TableRow bomdata = {bomdata}/>
        </table>
            
        </div>;
    }


}

export default Table;