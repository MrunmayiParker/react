import React, { useEffect } from 'react';
const Hookscomp = () => {

    useEffect(() => {
        console.log("did mount")
        return () =>{
            console.log("unmout")
        }
    }, []);
    return (
        <div> 
            
        <h1>HEYY</h1>
        </div>
    )
}

export default Hookscomp;