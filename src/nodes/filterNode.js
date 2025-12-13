// filterNode.js

import { useState } from "react";
import { Position } from "reactflow";
import { BaseNode } from "./BaseNode";

export const FilterNode = ({ id, data }) => {
  const [filterKeyword, setFilterKeyword] = useState(data?.keyword || "");

  const handleKeywordChange = (e) => {
    setFilterKeyword(e.target.value);
  };

  // Define handles configuration
  const handles = [
    {
      type: "target",
      position: Position.Left,
      id: `${id}-input`,
    },
    {
      type: "source",
      position: Position.Right,
      id: `${id}-output`,
    },
  ];

  return (
    <BaseNode id={id} title="Filter" handles={handles}>
      <label>
        Keyword:
        <input
          type="text"
          value={filterKeyword}
          onChange={handleKeywordChange}
          placeholder="Enter filter keyword"
        />
      </label>
    </BaseNode>
  );
};
