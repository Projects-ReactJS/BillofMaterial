import React from 'react';
import "./TableHeader.css";

class TableHeader extends React.Component{

    render(){
        return  <thead>
        <tr className="tableheaderflex">
          <th>BillOfMaterial</th>
          <th>BillOfMaterialCategory</th>
          <th>BillOfMaterialVariant</th>
          <th>BillOfMaterialVersion</th>
          <th>EngineeringChangeDocument</th>
          <th>Material</th>
          <th>Plant</th>
          <th>BillOfMaterialVariantUsage</th>
          
        </tr>
      </thead>
    }


}

export default TableHeader;