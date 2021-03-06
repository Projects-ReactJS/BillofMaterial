import React from 'react';
import './TableRow.css';
import { useHistory } from "react-router";



function TableRow (props) {

let history = useHistory();

	function onclickrow(evt) {
		console.log(evt);
		history.push("/bomitem")
		
	};


		const { header } = props.bomdata;
		if (header) {
			return header.map((item, index) => {
				return (
					<tr onClick={onclickrow} className="tableheaderflex row-features" key={index}>
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


export default TableRow;
