import React, { useEffect, useRef, useState } from "react";
import { getDataFromDataView } from "../../ble.const";
import { SpellsMap } from "../../spells.const";
import { Button, Flex } from "antd";
import {
  drawBombarda,
  drawExplShape,
  drawStupefy,
  drawObliviate,
} from "./draw";
import { useNavigate } from "react-router-dom";
import "./Learn.css";
import AnimatedIcon from "../AnimatedIcon/AnimatedIcon";

const Spells = [
  {
    name: SpellsMap.stpf,
    id: "stpf",
    draw: drawStupefy,
  },
  {
    name: SpellsMap.oblv,
    id: "oblv",
    draw: drawObliviate,
  },
  {
    name: SpellsMap.expl,
    id: "expl",
    draw: drawExplShape,
  },
  {
    name: SpellsMap.bmbr,
    id: "bmbr",
    draw: drawBombarda,
  },
];

export function Learn({ dataSource }) {
  const [gestures, setSestures] = useState([]);
  const [listening, setListening] = useState(false);
  const [selectedSpell, setSelectedSpell] = useState();
  const [indicator, setIndicator] = useState({ show: false });
  const navigate = useNavigate();
  const containerRef = useRef();

  function createAndDrawCanvases() {
    containerRef.current.innerHTML = "";

    if (selectedSpell) {
      const spellContainer = document.createElement("div");
      spellContainer.className = "spell-container";

      const canvas = document.createElement("canvas");
      canvas.width = 400;
      canvas.height = 400;
      canvas.id = selectedSpell.id;
      canvas.style.border = "1px solid #eee";

      const description = document.createElement("div");
      description.innerText = selectedSpell.name;
      description.className = "spell-description";
      description.style.fontSize = "3rem";

      spellContainer.appendChild(canvas);
      spellContainer.appendChild(description);

      containerRef.current.appendChild(spellContainer);

      selectedSpell.draw(canvas);
      return;
    }
    Spells.forEach((spell) => {
      const spellContainer = document.createElement("div");
      spellContainer.className = "spell-container";

      const canvas = document.createElement("canvas");
      canvas.style.cursor = "pointer";
      canvas.width = 100;
      canvas.height = 100;
      canvas.id = spell.id;
      canvas.style.border = "1px solid #eee";

      const description = document.createElement("div");
      description.innerText = spell.name;
      description.className = "spell-description";

      spellContainer.appendChild(canvas);
      spellContainer.appendChild(description);

      containerRef.current.appendChild(spellContainer);

      spell.draw(canvas);
      spellContainer.addEventListener("click", () => {
        setSelectedSpell(spell);
      });
    });
  }

  useEffect(() => {
    createAndDrawCanvases();
  }, [selectedSpell]);

  useEffect(() => {
    if (!selectedSpell) return;
    const lastSpell = gestures[gestures.length - 1];
    console.log("Last spell", lastSpell);
    if (
      lastSpell &&
      lastSpell.name === selectedSpell.id &&
      lastSpell.score > 90
    ) {
      setIndicator({ show: true, type: "success" });
    } else {
      setIndicator({ show: true, type: "fail" });
    }
  }, [gestures]);

  useEffect(() => {
    if (!dataSource || listening) return;

    const handleIncoming = (event) => {
      const value = event.target.value;
      const gestureString = getDataFromDataView(value);

      const [name, score] = gestureString.split("-");
      const newGesture = { name, score: parseInt(score) };
      setSestures((prev) => [...prev, newGesture]);
    };
    dataSource.addEventListener("characteristicvaluechanged", handleIncoming);
    dataSource.startNotifications();
    setListening(true);
    return () => {
      dataSource.removeEventListener(
        "characteristicvaluechanged",
        handleIncoming
      );
      setListening(false);
    };
  }, [dataSource]);

  return (
    <Flex style={{ height: "100vh" }} justify="center" vertical align="center">
      <Button
        type="primary"
        style={{ marginBottom: "20px" }}
        onClick={() => {
          if (selectedSpell) {
            setSelectedSpell(undefined);
            createAndDrawCanvases();
          } else {
            navigate("/");
          }
        }}
      >
        Назад
      </Button>
      <Flex ref={containerRef} gap={8} justify="center" align="center"></Flex>
      <AnimatedIcon
        show={indicator.show}
        close={() => setIndicator({ show: false })}
        type={indicator.type}
      />
    </Flex>
  );
}
