import React from "react";
import { useDispatch } from "react-redux";
import { eventClearActiveEvent } from "../../actions/events";
import { uiOpenModal } from "../../actions/ui";

export const AddNewFab = () => {
  const dispatch = useDispatch();
  const open = () => {
    dispatch(uiOpenModal());
    dispatch(eventClearActiveEvent());
  };
  return (
    <button className="btn btn-primary fab" onClick={open}>
      <i className="fas fa-plus"></i>
    </button>
  );
};
