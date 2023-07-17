import React from "react";
import { useRouteError } from "react-router-dom";
const Error = () => {
  const { status, statusText } = useRouteError();

  return (
    <div
      style={{
        textAlign: "center",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="space-y-3">
        <h1 className="text-5xl">Oops!!</h1>
        <h2 className="text-3xl">Something Went Wrong</h2>
        <h3 className="text-2xl">
          {status} : {statusText}
        </h3>
      </div>
    </div>
  );
};
export default Error;
