import React from "react";
import FoodCollection from "./FoodCollection";

const WhatWeDo =(props)=>{
    const style={
        cursor: "pointer",
        color:"green"
    }
    return(
    <div className="WhatWeDo" > 
        <p onClick style={style}>Συλλογή Τροφίμων</p>
        <FoodCollection/>
        <p onClick style={style}>Προβολες ταινιων</p>
        <p>dggnfnfhnδδδδδδδδδδδδδδδδδδδδδδδδδδδδδδδδδδ
            δδδδδδηισηγισηγησγφηδιθφφφφφφφφφφφφφφφφφφφφ
            φφφφφφφφφφφφφφφφφφφφφφφφφφφφφφφφφφφφφφφφφφφ
            φφφφφφφφφφφφφφφφφφ</p>
        <p onClick style={style}>Ημερες Εργασιας</p>
        <p>dggnfnfhnδδδδδδδδδδδδδδδδδδδδδδδδδδδδδδδδδδ
            δδδδδδηισηγισηγησγφηδιθφφφφφφφφφφφφφφφφφφφφ
            φφφφφφφφφφφφφφφφφφφφφφφφφφφφφφφφφφφφφφφφφφφ
            φφφφφφφφφφφφφφφφφφ</p>
        <p onClick style={style}>Συλλογικη Κουζινα</p>
        <p>dggnfnfhnδδδδδδδδδδδδδδδδδδδδδδδδδδδδδδδδδδ
            δδδδδδηισηγισηγησγφηδιθφφφφφφφφφφφφφφφφφφφφ
            φφφφφφφφφφφφφφφφφφφφφφφφφφφφφφφφφφφφφφφφφφφ
            φφφφφφφφφφφφφφφφφφ</p>

    




    </div>);
};


export default WhatWeDo;