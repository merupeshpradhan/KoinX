import React from "react";
import logo from "../images/logo.svg"
function navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary p-0">
        <div class="container-fluid">
          <img src={logo} />
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0" style={{alignItems:"center"}}>
              <li class="nav-item">
                <a class="nav-link active fw-medium px-3" aria-current="page" href="#">Crypto Taxes</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active fw-medium px-3" aria-current="page" href="#">Free Tools</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active fw-medium px-3" aria-current="page" href="#">Resource Center</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active px-4" aria-current="page" href="#">
                  <button type="button" class="btn btn-primary fw-medium ">Get Started</button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default navbar;
