import React from "react";
import styled from "styled-components";

const tree = {
  root: {
    name: "Root",
    children: [
      {
        name: "A",
        children: [
          { name: "A1", children: [] },
          { name: "A2", children: [] },
          { name: "A3", children: [] },
        ],
      },
      {
        name: "B",
        children: [
          {
            name: "B1",
            children: [
              { name: "B1A", children: [] },
              { name: "B1B", children: [] },
              { name: "B1C", children: [] },
              { name: "B1D", children: [] }
            ],
          },
        ],
      },
    ],
  },
};

const renderNode = (node) => {
  const childrenN = node.children.length;
  return (
    <NodeContainer>
      <CurrentNode>{node.name}</CurrentNode>
      <svg height="210" width="100%">
        {node.children.map((c, index) => (
          <line
            x1="50%"
            y1="0"
            x2={`${(1 / (childrenN + 1)) * (index + 1) * 100}%`}
            y2="200"
            style={{ stroke: "rgb(255,0,0)", strokeWidth: 2 }}
          />
        ))}
      </svg>
      <ChildrenContainer>{node.children.map(renderNode)}</ChildrenContainer>
    </NodeContainer>
  );
};

function App() {

  return <>{renderNode(tree.root)}</>;
}

const NodeContainer = styled.div({
  display: "flex",
  alignContent: "center",
  alignItems: "center",
  flexDirection: "column",
  width: "100%",
});

const CurrentNode = styled.div({
  width: "100%",
  textAlign: "center",
});

const ChildrenContainer = styled.div({
  display: "flex",
  width: "100%",
  justifyContent: "space-evenly",
});

export default App;
