import React from 'react';
import ActionBars from './BillofMaterialHeader/ActionBars';
import Search from './BillofMaterialHeader/Search';
import Table from './commontable/Table'

import "./BillofMaterialHeader.css"
class BillofMaterialHeader extends React.Component{

    render(){
        return <div className="largecontainer">
            
            <Search />
            <ActionBars/>
            <Table/>
        </div>;
    }


}

export default BillofMaterialHeader;
