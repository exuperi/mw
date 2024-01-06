import React from "react";
import { Button, Flex } from "antd";
import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();
  const buttonStyle = {
    width: "300px",
    height: "300px",
    margin: "10px",
    fontSize: "3rem",
    border: "2px solid",
    borderRadius: "8px",
  };

  return (
    <Flex style={{ height: "100vh" }} justify="center" align="center">
      <Button
        style={buttonStyle}
        onClick={() => navigate("/learn")}
        type="default"
      >
        Учись
      </Button>
      <Button
        style={buttonStyle}
        onClick={() => navigate("/fight")}
        type="default"
      >
        Дерись
      </Button>
    </Flex>
  );
}
