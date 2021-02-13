import React from 'react';
import "./actionbars.css"

class ActionBars extends React.Component{

    render(){
        return <div className="actionbars w3-indigo">
            <button class="create-bom button-const-attr btn-background w3-indigo">Create BillofMaterial</button>
            <button class="update-bom button-const-attr btn-background w3-indigo">Update BillofMaterial</button>
            <button class="delete-bom button-const-attr btn-background w3-indigo">Delete BillofMaterial</button>
        </div>;
    }


}

export default ActionBars;