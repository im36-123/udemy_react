import React from "react";

// stateless functional component
const Action = props => {
  const { handlePick, hasOptions } = props;

  return (
    <div>
      <button onClick={handlePick} disabled={!hasOptions}>
        What should I do?
      </button>
    </div>
  );
};

// class component
// class Action extends Component {
//   render() {
//     const { handlePick, hasOptions } = this.props;

//     return (
//       <div>
//         <button onClick={handlePick} disabled={!hasOptions}>
//           What should I do?
//         </button>
//       </div>
//     );
//   }
// }


export default Action;
