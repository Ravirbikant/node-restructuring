// splitNode.js

import { Position } from "reactflow";
import { BaseNode } from "./BaseNode";

export const SplitNode = ({ id, data }) => {
  // Define handles configuration - 1 input, 2 outputs
  const handles = [
    {
      type: "target",
      position: Position.Left,
      id: `${id}-input`,
    },
    {
      type: "source",
      position: Position.Right,
      id: `${id}-output1`,
      style: { top: "30%" },
    },
    {
      type: "source",
      position: Position.Right,
      id: `${id}-output2`,
      style: { top: "70%" },
    },
  ];

  return (
    <BaseNode id={id} title="Split" handles={handles}>
      <span>Split data into two outputs</span>
    </BaseNode>
  );
};
