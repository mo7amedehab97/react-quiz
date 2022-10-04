import React from "react";
import "./index.css";
const ErrorAlert = ({ error, setError, errorMsg }) => {
  return (
    <section className={error ? "error-alert-container" : "hide"}>
      <div className="error-alert-inner-container">
        <h1>{errorMsg}</h1>
        <button
          onClick={() => {
            setError(false);
          }}
        >
          close
        </button>
      </div>
    </section>
  );
};

export default ErrorAlert;
