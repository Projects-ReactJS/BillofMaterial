import React from 'react';
import "./search.css";

class Search extends React.Component{

    render(){
        return <div className="field">
            <div className="search-control field-control">
            <label for="search"> Search</label>
            <div className="search-field">
            <input id="search"  maxLength="300">
            </input>
            <button><i class="fa fa-search"></i></button>
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
            <button class="btn-go btn-background">go</button>
            
            </div>
           
        </div>;
    }


}

export default Search;