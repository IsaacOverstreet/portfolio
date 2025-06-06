import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

function MoveToTop(){
    const path = useLocation()

    useEffect(()=>{
        window.scrollTo(0,0)
    },[path]);
}

export default MoveToTop;