import React from "react";
import { Button } from "antd";
import "./Connection.css";

export function Connection({ onConnect }) {
  return (
    <div className="welcome-container">
      <h1 className="welcome-text">
        Привет Инна, нажми на кнопку и подсоедени свою палочку
      </h1>

      <Button
        type="primary"
        onClick={() => onConnect()}
        className="welcome-button"
      >
        Палочка при мне!
      </Button>
    </div>
  );
}
