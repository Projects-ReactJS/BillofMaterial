import React from 'react';
import './ObjectPageHeader.css';
class ObjectPageHeader extends React.Component {


	render() {
		return (
			<div className="headerinfo-container w3-indigo">
				<div>
                <div>
				<h2>some Material</h2>
				<h4> some description </h4>
                </div>
				<div>
                <p> BillofMaterial </p> 
                <p> Plant</p> 
				</div> 
				</div>
				<div>
                <h3> BillofMaterial Type </h3> 
                <p> production</p> 
				</div> 
				<div>
                <h3> BillofMaterial Status </h3> 
                <p> created</p> 
				</div>    
				<div>
                <h3> Assembly </h3> 
                <p> yes</p> 
				</div>     
			</div>
		);
	}
}

export default ObjectPageHeader;
