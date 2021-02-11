import React from 'react';
import TableHeader from './TableHeader';
import TableRow from "./TableRow";
import "./Table.css";
class Table extends React.Component{

    render(){
        return <div>
        <table>
        <table className="table">
          
          <TableHeader/>
          <TableRow/>
        </table>
       
        </table>
            
        </div>;
    }


}

export default Table;