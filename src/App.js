import React,{Component} from "react";
import './App.css';
import parko from "./assets/parko.jpg"

import Home from "./Home/Home";
import Contact from "./Contact/Contact";
import WhatWeDo from "./WhatWeDo/WhatWeDo";


class Initial extends Component{

  

  state={
    name:"Παρκο Τσεπης",
    expandome:false,
    expandwhatwedo:false,
    expandcontact:false}

  expandHome=()=>{
    const toExpandHome=this.state.expandhome;
    this.setState({expandhome:!toExpandHome});
    

  }

  expandWhatWeDo=()=>{
    const toExpandWhatWeDo=this.state.expandwhatwedo
    this.setState({expandwhatwedo:!toExpandWhatWeDo});
    
   
    

  }

  expandContact=(event)=>{
    const toExpandContact=this.state.expandcontact;
    this.setState({expandcontact:!toExpandContact});


  }



  render(){
    return(
      <div>
        {/*BACKROUND IMAGE */}

        <div style={{backgroundImage:`url(${parko})`}}>
        <h1>ΠΑΡΚΟ ΤΣΕΠΗΣ..under construction</h1>
      </div>


       {/*HOME BUTTON */}
      <button
      onClick={this.expandHome}>Home</button>
      
      
       {this.state.expandhome?
       
      <div className="Home"> 
        <Home />            
      </div>:null}
         
    
      {/*WHAT WE DO BUTTON */}
      <button 
      onClick={this.expandWhatWeDo}> What we do</button>

      {this.state.expandwhatwedo?
       <div >
        <WhatWeDo />
      </div>:null}
      

        
      
    

      <button 
      onClick={this.expand}>Contact</button>

      {this.state.expandContact?
      <div >

      <p>thyrhr</p>  
      </div>:null}

      <div style={{backgroundImage:`url(${parko})`}}> welcome to park</div>
      
      


      
      </div>
    );
  
  
  
  
  


  }


}
export default Initial;