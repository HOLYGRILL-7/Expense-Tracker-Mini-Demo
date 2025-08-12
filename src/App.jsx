import React, { useState, useEffect } from "react"; // <-- correct imports from react
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { HandCoins } from "lucide-react";

import Home from "./Components/Home";

// Layout wrapper component with tilted background
function AppLayout({ children }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Trigger animation on mount
    setVisible(true);
  }, []);

  return (
    <div className="min-h-screen relative">
      <div
        className={`
          leftpane
          bg-blue-400 w-1/4 h-full absolute z-0 -left-16 top-0
          transform -skew-x-[10deg] origin-left overflow-hidden
          transition-transform duration-700 ease-out
          ${
            visible ? "translate-x-16 opacity-100" : "-translate-x-20 opacity-0"
          }
        `}
        style={{ willChange: "transform, opacity" }}
      >
        <div className="p-4 text-white font-semibold">
          <div className="logo-section relative mx-10">
            <HandCoins size={40} className="inline-block" />
            <h1 className="inline-block mx-5 absolute bottom-0 font-bold text-3xl">
              ALL-MITE{" "} kkk
            </h1>
          </div>
          <p className="mx-12">"Track every single mite.."</p>
          <div className="m-5 w-50"></div>
        </div>
      </div>
      {children}
    </div>
  );
}

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Navigate to="/homepage" replace />} />
        <Route
          path="/homepage"
          element={
            <AppLayout>
              <Home />
            </AppLayout>
          }
        />
      </>
    )
  );

  return <RouterProvider router={routes} />;
}

export default App;
