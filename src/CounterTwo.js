import { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter: 0
};
const reducer = (state, action) => {
  console.log(`reducer fn state:${state} `);
  switch (action.type) {
    case "increment":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "decrement":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "increment2":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "decrement2":
      return { ...state, secondCounter: state.secondCounter - action.value };
    case "reset":
      return initialState;
    default:
      return state;
  }
};
export default function CounterOne() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>
        <h1>{`first count is ${count.firstCounter}`}</h1>
        <h1>{`second count is ${count.secondCounter}`}</h1>
        <button onClick={() => dispatch({ type: "increment", value: 1 })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
          Decrement
        </button>
        <button onClick={() => dispatch({ type: "increment", value: 10 })}>
          Increment CounterOne by 10
        </button>
        <button onClick={() => dispatch({ type: "decrement", value: 5 })}>
          Decrement CounterOne by 5
        </button>
      </div>

      <div>
        <button onClick={() => dispatch({ type: "increment2", value: 1 })}>
          Increment CounterTwo
        </button>
        <button onClick={() => dispatch({ type: "decrement2", value: 1 })}>
          Decrement CounterTwo
        </button>
      </div>
      <div>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      </div>
    </div>
  );
}
