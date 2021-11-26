import React from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@store";
import { testAction } from "@store/dummy/action";

import Header from "@components/templates/header";
import Footer from "@components/templates/footer";

const Main = () => {
  const dispatch = useDispatch();
  const { test } = useSelector((store: RootState) => store.dummy);

  const onClick = () => {
    dispatch(testAction());
  };

  return (
    <>
      <Header />
      {test}
      <button onClick={onClick}>+</button>
      <Footer />
    </>
  );
};

export default Main;
