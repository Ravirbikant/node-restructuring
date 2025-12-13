// numberNode.js

import { useState } from "react";
import { Position } from "reactflow";
import { BaseNode } from "./BaseNode";

export const NumberNode = ({ id, data }) => {
  const [currNumber, setCurrNumber] = useState(data?.number || 0);

  const handleNumberChange = (e) => {
    setCurrNumber(e.target.value);
  };

  // Define handles configuration
  const handles = [
    {
      type: "source",
      position: Position.Right,
      id: `${id}-output`,
    },
  ];

  return (
    <BaseNode id={id} title="Number" handles={handles}>
      <label>
        Value:
        <input type="number" value={currNumber} onChange={handleNumberChange} />
      </label>
    </BaseNode>
  );
};
