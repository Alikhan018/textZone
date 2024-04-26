import React from 'react'

export default function Alerts(props){
    function Capitalize (msg) {
        msg.toLowerCase();
        return msg.charAt(0).toUpperCase() + msg.slice(1);
    }
    return(

        props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">   
            <emp>{Capitalize(props.alert.type)}</emp>{props.alert.msg} 
        </div>
    );
}
