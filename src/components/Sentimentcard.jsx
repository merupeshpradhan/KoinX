import React from 'react';

function Sentimentcard(props) {
    return (
        <div className="card" style={{ background: "#cdcdff",padding:"10px" }}>
            <div className="d-flex p-2 align-items-center">
                <i class={props.icon} style={{color:"white",background:`${props.color}`,padding:"8px",borderRadius:"50%",marginRight:"15px"}}></i>
                <h6 style={{fontSize:"12.5px"}}>{props.data1}</h6>
            </div>
            <p style={{fontSize:"11px"}}>{props.data2}</p>
        </div>
    )
}

export default Sentimentcard