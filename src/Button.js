function Button(props) {
  console.log(props);
  return <button onClick={props.handleClick}>{props.name}</button>;
}

export default Button;

// import React from "react";

// class Button extends React.Component {
//   render() {
//     return <button onClick={this.props.handleClick}>{this.props.name}</button>;
//   }
// }

// export default Button;
