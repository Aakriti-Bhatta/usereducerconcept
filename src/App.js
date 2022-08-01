import * as React from "react";

function countReducer(state, action) {
  return state;
}

function Counter({ initialCount = 0, step = 1 }) {
  const [state, dispatch] = React.useReducer(countReducer, {
    count: initialCount,
  });

 
  const increment = () => dispatch({ type: "increment", step });
  return <button onClick={increment}>{state.count}</button>;
}

function App() {
  return <Counter />;
}

export default App;
