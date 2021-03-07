import React from "react";
import { Link, withRouter } from "react-router-dom";
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

function Navigation(props) {
  return (
    <div className="navigation">
      <nav class="navbar navbar-expand navbar-dark bg-dark">
        <div class="container">
          <Link class="navbar-brand" to="/">
            React Multi-Page Website
          </Link>

          <div>
            <ul class="navbar-nav ml-auto">
              <li
                class={`nav-item  ${
                  props.location.pathname === "/" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/">
                  Home
                  <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/notes" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/notes">
                  Notes
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/calc" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/calc">
                  Calculator
                </Link>
                </li>
              <li>
                <AmplifySignOut />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);