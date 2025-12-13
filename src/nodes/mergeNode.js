// mergeNode.js

import { Position } from "reactflow";
import { BaseNode } from "./BaseNode";

export const MergeNode = ({ id, data }) => {
  // Define handles configuration - 2 inputs, 1 output
  const handles = [
    {
      type: "target",
      position: Position.Left,
      id: `${id}-input1`,
      style: { top: "30%" },
    },
    {
      type: "target",
      position: Position.Left,
      id: `${id}-input2`,
      style: { top: "70%" },
    },
    {
      type: "source",
      position: Position.Right,
      id: `${id}-output`,
    },
  ];

  return (
    <BaseNode id={id} title="Merge" handles={handles}>
      <span>Merge two inputs into one output</span>
    </BaseNode>
  );
};
