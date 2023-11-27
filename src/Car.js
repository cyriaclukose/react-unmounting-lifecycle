
import React from 'react'
class Car extends React.Component{


    componentWillUnmount(){

        alert("the car is getting removed from Garage");
    }


    render(){

     return (<div>
        
        <p>This  car is in the Garage</p>

     </div>);
    }


}

export default Car;