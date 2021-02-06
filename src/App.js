import React,{Component} from "react";
import './App.css';
import parko from "./assets/parko.jpg"

import Home from "./Home/Home";
import Contact from "./Contact/Contact";
import WhatWeDo from "./WhatWeDo/WhatWeDo";

class Initial extends Component{

  state={
    name:"Παρκο Τσεπης",
    expand:false}

  expandHome=()=>{
    const toExpandHome=this.state.expand;
    this.setState({expand:!toExpandHome});
    

  }

  expandWhatWeDo=()=>{
    const toExpandWhatWeDo=this.state.expand;
    this.setState({expand:!toExpandWhatWeDo});
   
    

  }

  expandContact=()=>{
    const toExpandContact=this.state.expand;
    this.setState({expand:!toExpandContact});


  }



  render(){
    return(
      <div>
        <div style={{backgroundImage:`url(${parko})`}}>
        <h1>ΠΑΡΚΟ ΤΣΕΠΗΣ..under construction</h1>
      </div>



      <button
      onClick={this.expandHome}>Home</button>
       {this.state.expand?
      <div className="Home">

        <Home />
      </div>:null
      
    
    } 

      <button 
      onClick={this.expandWhatWeDo}> What we do</button>
       {this.state.expand?
      <div>

        <WhatWeDo />
      </div>:null}

      <button
      onClick={this.expandContact}>Contact</button>

     {this.state.expand?
      <div>

        <Contact />
      </div>:null}

        
      
    

      

      <div style={{backgroundImage:`url(${parko})`}}> welcome to park</div>
      
      


      
      </div>
    );
  
  
  
  
  


  }


}
export default Initial;