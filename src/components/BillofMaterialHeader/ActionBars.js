import React from 'react';
import "./actionbars.css"

class ActionBars extends React.Component{

    render(){
        return <div className="actionbars">
            <button class="create-bom button-const-attr btn-background">Create BillofMaterial</button>
            <button class="update-bom button-const-attr btn-background">Update BillofMaterial</button>
            <button class="delete-bom button-const-attr btn-background">Delete BillofMaterial</button>
        </div>;
    }


}

export default ActionBars;