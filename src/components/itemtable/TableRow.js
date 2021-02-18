import React from 'react';



import './TableRow.css';

class TableRow extends React.Component {
	constructor(props) {
		super();
	
	}

	onclickrow = (evt) => {
		


		
	};

	render() {
		const header = false;
		if (header) {
			return header.map((item, index) => {
				return (
					<tr onClick={this.onclickrow} className="tableheaderflex row-features" key={index}>
						<td>{item.BillOfMaterial}</td>
						<td>{item.BillOfMaterialCategory}</td>
						<td>{item.BillofMaterialVariant}</td>
						<td>{item.BillOfMaterialVersion}</td>
						<td>{item.EngineeringChangeDocument}</td>
						<td>{item.Material}</td>
						<td>{item.Plant}</td>
						<td>{item.BillOfMaterialVariantUsage}</td>
					</tr>
				);
			});
		} else {
			return <div className="no-data">No Data</div>;
		}
	}
}

export default TableRow;
