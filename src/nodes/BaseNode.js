// BaseNode.js
// Base component for all node types - handles common structure and styling

import { Handle } from "reactflow";

export const BaseNode = ({
  id,
  title,
  handles = [],
  children,
  style = {},
  className = "",
}) => {
  const defaultStyle = {
    width: 200,
    height: 80,
    border: "1px solid black",
    position: "relative",
  };

  return (
    <div style={defaultStyle} className={className}>
      {handles.map((handleConfig, index) => (
        <Handle
          key={handleConfig.id || index}
          type={handleConfig.type}
          position={handleConfig.position}
          id={handleConfig.id}
          style={handleConfig.style}
        />
      ))}

      <div>
        <span>{title}</span>
      </div>

      <div>{children}</div>
    </div>
  );
};
