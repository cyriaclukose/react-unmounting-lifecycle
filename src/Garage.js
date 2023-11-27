import React from 'react'
import Car from './Car'
class Garage extends React.Component{


  constructor()
  {
    super();
    this.state={show:true};
  }

  removeCar= ()=>{

    this.setState({show:false});
  }

  render(){

    let myCar;

    if(this.state.show)
    {
      myCar=<Car />;
    }



    return(<div>
      <p>This is My Garage</p>
      {myCar}
      <button onClick={this.removeCar}>Click me to remove Car</button>
    </div>)
  }



}

export default Garage;