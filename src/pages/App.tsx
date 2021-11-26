import React from "react";

// V6 Switch -> Routes
import { Route, Routes, Navigate } from "react-router-dom";

import router from "./router";

/**
 * 모든 페이지에 영향을 주는 최상위 컴포넌트
 */
const App = () => {
  return (
    <>
      <Routes>
        {router.map((elem, _) => (
          <Route path={elem.path} element={<elem.element />} key={elem.id} />
        ))}
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </>
  );
};

export default App;
