import React from "react";
import { addItem } from "../actions";
import { useDispatch } from "react-redux";

export default function ListInput() {
  const [inputValue, setInputValue] = React.useState("");
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <input
        placeholder="Add todo item"
        value={inputValue}
        onChange={e => {
          setInputValue(e.target.value);
        }}
      />
      <button
        onClick={() => {
          if (!inputValue) return;
          dispatch(addItem(inputValue));
          setInputValue("");
        }}
      >
        +
      </button>
    </React.Fragment>
  );
}
