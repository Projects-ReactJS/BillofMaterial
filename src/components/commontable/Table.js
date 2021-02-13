import React from 'react';
import TableHeader from './TableHeader';
import TableRow from "./TableRow";
import "./Table.css";
class Table extends React.Component{

    render(){
        return <div>
        <table className="table">
          
          <TableHeader/>
          <TableRow/>
        </table>
            
        </div>;
    }


}

export default Table;