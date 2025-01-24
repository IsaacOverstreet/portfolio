import React from "react"

function Refresh(){
    function onClick(){
        window.location.reload(true)
    }

    window.addEventListener("click", onClick)
}

export default Refresh;