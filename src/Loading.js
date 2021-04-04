import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Spinner } from 'react-bootstrap';
import './CSS/loading.css'
function Loading() {
  return (
    <div className="loading">
      <Spinner animation="border" variant="danger" />
    </div>
  );
}
export default Loading
