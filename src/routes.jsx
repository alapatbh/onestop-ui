import React from "react";
import { Router } from "@reach/router";
import HomeOVerview from "./Pages/home/home_overview"
import Questions from "./Pages/questions/questions_overview"
import FolderStructure from "./Pages/folder_structure/folder_structure_overview"
import Documents from "./Pages/documents/document_overview"

export default () => {

    const NotFound = () => <div>Page Not Found</div>;

    return (
        <div className="router">
          <Router>
            <HomeOVerview path="/" />
            <Questions path="/questions"/>
            <FolderStructure path="/blueprint"/>
            <Documents path="/documents"/>
            <NotFound default />
          </Router>
        </div>
    )
}