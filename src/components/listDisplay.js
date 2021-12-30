import React from "react";
import styled from "styled-components";
import { editItem, deleteItem } from "../actions";
import { useSelector, useDispatch } from "react-redux";

const Label = styled.label`
  display: flex;
  line-height: 28px;
  align-items: center;
  cursor: pointer;
  margin: 20px;
  border-radius: 4px;
  padding: 12px 24px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  background-color: white;
  transition: all 300ms;

  &.complete {
    box-shadow: none;
  }

  & input {
    margin-right: 24px;
    pointer-events: none;

    &:checked {
      & ~ span {
        text-decoration: line-through;
      }
    }
  }

  & span {
    flex-grow: 1;
    text-align: left;
  }
`;

const Delete = styled.button`
  cursor: pointer;
  padding: 12px 24px;
  border: none;
  border-radius: 2px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);
  background-color: #e74c3c;
  color: #ecf0f1;

  &:hover,
  &:focus {
    background-color: #c0392b;
  }
`;

export default function ListOutput() {
  const list = useSelector(state => state.list);
  const dispatch = useDispatch();

  const listKeys = Object.keys(list);
  return (
    <React.Fragment>
      {listKeys.map(key => (
        <Label
          className={list[key].complete && "complete"}
          key={`listitem_${key}`}
        >
          <input
            checked={list[key].complete}
            onChange={e => {
              dispatch(
                editItem({
                  key,
                  complete: e.target.checked
                })
              );
            }}
            type="checkbox"
          />
          <span>{list[key].label}</span>
          <Delete
            onClick={() => {
              dispatch(deleteItem(key));
            }}
          >
            <span>Delete</span>
          </Delete>
        </Label>
      ))}
    </React.Fragment>
  );
}
