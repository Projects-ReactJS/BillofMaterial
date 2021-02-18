import React from 'react';
import ActionBars from './BillofMaterialHeader/ActionBars';
import Search from './BillofMaterialHeader/Search';
import Table from './commontable/Table'

import "./BillofMaterialHeader.css"
class BillofMaterialHeader extends React.Component{

    constructor(props){

     super(props);
     this.state = {
       bomdata:{}
      }
     this.onClickGo = this.onClickGo.bind(this);

    }

    onClickGo = (material,plant,engchangedoc,bomgroup,bomhdrtxt) => {

      let url = 'http://localhost:3001/billofmaterial?';
      
      let endpoints =  material + plant  + engchangedoc  + bomgroup;
      url = url + endpoints;
    

      

    fetch(url).then((response) => {
        console.log(response)
      if (response.ok) {
          response.json().then(data => {

            this.setState(() => ({
              bomdata: data
              }))


          });
        }
     }).catch((error) => {
         console.error(error);
     })


   }

    componentDidMount() {

        //Check API
      /* fetch('http://localhost:3001/billofmaterial/test/test').then((response) => {
          console.log(response)
        if (response.ok) {
            response.json().then(json => {
              console.log(json);
            });
          }
       }).catch((error) => {
           console.error(error);
       }) */
    }


    render(){
        return <div className="largecontainer">
            
            <Search onclickgo = {this.onClickGo} />
            <ActionBars/>
            <Table bomdata={this.state.bomdata} />
        </div>;
    }


}

export default BillofMaterialHeader;
