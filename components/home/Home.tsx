import React from "react";
import { useAppSelector } from "../../hooks/use-selectors";
import Navbar from "../navbar/Navbar";
import Grid from "../grid/Grid";

export default function Home() {
  const { expandGrid } = useAppSelector((state) => state.app);

  return (
    <main
      className="main"
      style={{ overflowY: expandGrid ? "hidden" : "scroll" }}
    >
      <Navbar />
      <Grid />
    </main>
  );
}
