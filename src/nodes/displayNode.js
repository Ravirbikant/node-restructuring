// displayNode.js

import { Position } from "reactflow";
import { BaseNode } from "./BaseNode";

export const DisplayNode = ({ id, data }) => {
  // Define handles configuration
  const handles = [
    {
      type: "target",
      position: Position.Left,
      id: `${id}-input`,
    },
  ];

  return (
    <BaseNode id={id} title="Display" handles={handles}>
      <div style={{ padding: "5px" }}>
        <span>{data?.displayValue || "No data"}</span>
      </div>
    </BaseNode>
  );
};
