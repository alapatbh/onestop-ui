import React from "react";
import { Router } from "@reach/router";
import HomeOVerview from "./Pages/home/home_overview"

export default () => {

    const NotFound = () => <div>Page Not Found</div>;

    return (
        <div className="router">
          <Router>
            <HomeOVerview path="/" />
            <NotFound default />
          </Router>
        </div>
    )
}