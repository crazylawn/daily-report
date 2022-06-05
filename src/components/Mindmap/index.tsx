import React, { useRef } from 'react';
import MindmapComponent from 'react-cytoscapejs';
import { styled } from 'twin.macro';

const Mindmap = () => {
  const elements = {
    nodes: [
      {
        data: {
          id: '1',
          label: '노드1',
        },
        position: {
          x: 340,
          y: 250,
        },
      },
      {
        data: {
          id: '2',
          label: '노드2',
        },
        position: {
          x: 440,
          y: 360,
        },
      },
    ],
    edges: [
      {
        data: {
          source: '1',
          target: '2',
          label: 'edge from node1 to node3',
        },
      },
    ],
  };
  // cytoscape DOM을 다루기 위한 ref
  const cyRef = useRef<any>();

  return (
    <>
      <GraphBox
        elements={MindmapComponent.normalizeElements(elements)}
        maxZoom={2}
        minZoom={0.3}
        cy={(cy) => (cyRef.current = cy)}
      ></GraphBox>
    </>
  );
};

const GraphBox = styled(MindmapComponent)`
  width: 100%;
  height: 100vh;
  background-color: #f9f9f9;
`;

export default Mindmap;
