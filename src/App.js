import React, { useEffect, useState } from "react";
import "./App.css";
import { Connection } from "./components/Connection/Connection";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { SERVICE_UUID, GESTURE_CHARACTERISTID_UUID } from "./ble.const";
import { Learn } from "./components/Learn/Learn";
import { Fight } from "./Fight";

const WelcomePage = () => {
  const [device, setDevice] = useState(null);
  const [dataSource, setDataSource] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    if (device) {
      navigate("/");
    } else {
      navigate("/connect");
    }
  }, [device]);

  const onConnect = async () => {
    try {
      const dev = await navigator.bluetooth.requestDevice({
        filters: [
          {
            services: [SERVICE_UUID],
          },
        ],
      });
      setDevice(dev);
      dev.addEventListener("gattserverdisconnected", () => {
        console.warn("Device was disconnected!");
        setDevice(null);
      });
      const server = await dev.gatt.connect();
      const service = await server.getPrimaryService(SERVICE_UUID);
      const characteristic = await service.getCharacteristic(
        GESTURE_CHARACTERISTID_UUID
      );
      setDataSource(characteristic);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="connect" element={<Connection onConnect={onConnect} />} />
      <Route path="learn" element={<Learn dataSource={dataSource} />} />
      <Route path="fight" element={<Fight />} />
    </Routes>
  );
};

export default WelcomePage;
