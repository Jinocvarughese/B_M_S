import React from "react";

class User extends React.Component {
   
   constructor(props){
       super(props);

       this.state = {
           planet: "in mars",
       };
       console.log("hey I'm from constructor");
   }
   
componentDidMount(){
   this.setState({                // changing mars to pluto inside componentDidMount
       planet: "in pluto"
   });
}
 
static getDerivedStateFromProps(prop, state) {
    console.log("I'm from get derived state");
    return {planet: "saturn"};
}

shouldComponentUpdate(nextProp, nextState) {
    console.log({
        nextProp,
        nextState,
    });
    return true;
}

getSnapshotBeforeUpdate(prevProp, prevState){
    console.log({prevProp, prevState});
    return true;
}

componentDidUpdate(){
    console.log(this.state);
}

    render() {
        console.log("I'm being rendered");
        return (
            <div>
                <h1>{this.props.name}</h1>
                <p>{this.props.description}</p>
                <p>{this.state.planet}</p>
            </div>
        );
    }
}

export default User;