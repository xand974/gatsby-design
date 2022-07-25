import React from "react";
import { ViewCompact, ViewList } from "@mui/icons-material";
import "./navbar.scss";
import { useAppSelector } from "../../hooks/use-selectors";
import { useDispatch } from "react-redux";
import { SET_EXPAND_GRID } from "../../context/slices/app.slice";

export default function Navbar() {
  const dispatch = useDispatch();
  const { expandGrid } = useAppSelector((state) => state.app);
  const toggleGrid = () => {
    if (expandGrid) dispatch(SET_EXPAND_GRID(false));
    else dispatch(SET_EXPAND_GRID(true));
  };
  return (
    <div className="navbar">
      <div className="navbar__right">
        <button className="navbar__right__btn" onClick={() => toggleGrid()}>
          {expandGrid ? (
            <ViewCompact className="icon icon--white" />
          ) : (
            <ViewList className="icon" />
          )}
        </button>
      </div>
    </div>
  );
}
