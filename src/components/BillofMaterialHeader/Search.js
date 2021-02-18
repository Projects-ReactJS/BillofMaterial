import React from 'react';
import './search.css';

class Search extends React.Component {
	addqueryprefix = (prefix,symbol) => {
		var data = document.getElementById(prefix).value;
		if (data) {
			return symbol + prefix + '=' + data;
		}
		return '';
	};

	onClickButton = () => {
		this.props.onclickgo(
			this.addqueryprefix('material',''),
			this.addqueryprefix('plant','&'),
			this.addqueryprefix('engchangedoc','&'),
			this.addqueryprefix('bomgroup','&'),
			this.addqueryprefix('bomheadertext','&')
		);
	};

	render() {
		return (
			<div className="field w3-indigo">
				<div className="search-control field-control">
					<label for="search"> Search</label>
					<div className="search-field">
						<input id="search" maxLength="300"></input>
						<button class="w3-indigo">
							<i class="fa fa-search"></i>
						</button>
					</div>
				</div>
				<div className="field-controls">
					<div className="field-control">
						<label for="material">Material</label>
						<input id="material" type="text"></input>
					</div>
					<div className="field-control">
						<label for="plant">Plant</label>
						<input id="plant" type="text"></input>
					</div>
					<div className="field-control">
						<label for="engchangedoc">Engineering Change document</label>
						<input id="engchangedoc" type="text"></input>
					</div>
					<div className="field-control">
						<label for="bomgroup">BOM Group</label>
						<input id="bomgroup" type="text"></input>
					</div>
					<div className="field-control">
						<label for="bomheadertext">BOMHeaderText</label>
						<input id="bomheadertext" type="text"></input>
					</div>
					<button onClick={this.onClickButton} class="btn-go w3-indigo">
						go
					</button>
				</div>
			</div>
		);
	}
}

export default Search;
