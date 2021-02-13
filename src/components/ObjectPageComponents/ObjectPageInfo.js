import React from "react";
import "./ObjectPageInfo.css";

class ObjectPageInfo extends React.Component{


render(){

return <div className="objectpageinfo w3-indigo"> 
<div>
<div>
<h2>General Details</h2>
</div >
<div className="generaldetailsgrid">
<div className="fieldcontrol">
    <p>BillOfMaterial:</p>
    <p>{}</p>
</div>
<div className="fieldcontrol">
    <p>BillOfMaterialCategory:</p>
    <p>{}</p>
</div>
<div className="fieldcontrol">
    <p>BillOfMaterialVariant:</p>
    <p>{}</p>
</div>
<div className="fieldcontrol">
    <p>BillOfMaterialVersion:</p>
    <p>{}</p>
</div>
<div className="fieldcontrol">
    <p>BOMUsagePriority:</p>
    <p>{}</p>
</div>
<div className="fieldcontrol">
    <p>BOMGroup:</p>
    <p>{}</p>
</div>
</div>
</div>


<div>
<div>
<h2>Configuration Details</h2>
</div >
<div className="generaldetailsgrid">
<div className="fieldcontrol">
    <p>BillOfMaterial:</p>
    <p>{}</p>
</div>
<div className="fieldcontrol">
    <p>BillOfMaterialCategory:</p>
    <p>{}</p>
</div>
<div className="fieldcontrol">
    <p>BillOfMaterialVariant:</p>
    <p>{}</p>
</div>
<div className="fieldcontrol">
    <p>BillOfMaterialVersion:</p>
    <p>{}</p>
</div>
<div className="fieldcontrol">
    <p>BOMUsagePriority:</p>
    <p>{}</p>
</div>
<div className="fieldcontrol">
    <p>BOMGroup:</p>
    <p>{}</p>
</div>
</div>
</div>



</div>

}


}

export default ObjectPageInfo;
