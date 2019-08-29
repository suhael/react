import React from "react";
import {PageTemplate} from "./Template";

export const Whoops404 = ({ location }) =>
    <PageTemplate>
        <div className="whoops-404">
            <h1>Resource not found at '{location.pathname}'</h1>
        </div>
    </PageTemplate>
