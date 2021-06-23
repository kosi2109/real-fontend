import React from "react";
import "./loading.css";
import { Spinner } from "react-bootstrap";
export default function LoadingCom() {
  return (
    <div className="row mt-5">
      <div className="col-12">
        <div className="loading">
          <Spinner size="lg" animation="border" variant="warning" />
        </div>
      </div>
    </div>
  );
}
