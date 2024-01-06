import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";

export function Fight() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Button onClick={() => navigate("/")}>Назад</Button>
      <h1>Пока не сделал но обязательно сделаю!</h1>
    </div>
  );
}
