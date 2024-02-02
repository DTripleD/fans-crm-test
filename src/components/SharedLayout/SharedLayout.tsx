import { Outlet } from "react-router-dom";
import { Suspense } from "react";

import { SharedLayoutWrapper } from "./SharedLayout.styled";

export const SharedLayout = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <SharedLayoutWrapper>
          <Outlet />
        </SharedLayoutWrapper>
      </Suspense>
    </div>
  );
};
