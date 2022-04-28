/* eslint-disable */
import React, { Component } from "react";
import "./style.scss";

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.info(error, info);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      return (
        <>
          {" "}
          <h1 className="error-boundary">
            An error is occured, while loading.
          </h1>
          <h1 className="error-boundary">Please Try Again Later</h1>
        </>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
