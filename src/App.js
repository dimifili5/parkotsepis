import React,{Component} from "react";
import './App.css';
import parko from "./assets/parko.jpg"

import Home from "./Home/Home";
import Contact from "./Contact/Contact";

class Initial extends Component{

  state={
    name:"Παρκο Τσεπης",
    expand:false}

  expandHome=()=>{
    const toExpandHome=this.state.expand;
    this.setState({expand:!toExpandHome});
    

  }

  expandWhatWeDo=()=>{
    
   
    

  }

  expandContact=(event)=>{
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