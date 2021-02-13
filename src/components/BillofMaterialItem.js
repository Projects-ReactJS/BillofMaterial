import React from 'react';
import ObjectPageHeader from './ObjectPageComponents/ObjectPageHeader.js';
import ObjectPageInfo from './ObjectPageComponents/ObjectPageInfo';
import ObjectPageItem from './ObjectPageComponents/ObjectPageItem';
//import "/BillofMaterialItem.css"
class BillofMaterialItem extends React.Component {
	render() {
		var item = (
			<div className="objpage-container">
				<ObjectPageHeader />
				<ObjectPageInfo />
				<ObjectPageItem />
			</div>
		);

		return item;
	}
}

export default BillofMaterialItem;
