import React, { useRef, useState } from 'react';
import MindmapComponent from 'react-cytoscapejs';
import tw, { styled } from 'twin.macro';
import MindmapControl from './MindmapControl';
import MindmapExport from './MindmapExport';
const Mindmap = () => {
  const [newNode, setNewNode] = useState('');
  const handleNewNode = () => {
    // 새로운 node 객체 생성
    const item = {
      data: {
        id: nodeIdCounter.current,
        label: newNode,
      },
      position: {
        x: 50,
        y: 600,
      },
    };
    cyRef.current.add(item); // item을 node list에 추가
    setNewNode(''); // input state 초기화
  };
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
  const nodeIdCounter = useRef<any>();
  return (
    <Wrapper>
      <MindmapControl onNewNode={handleNewNode} />
      <Layout>
        <MindmapBox
          elements={MindmapComponent.normalizeElements(elements)}
          maxZoom={2}
          minZoom={0.3}
          cy={(cy) => (cyRef.current = cy)}
        ></MindmapBox>
        <MindmapExport />
      </Layout>
    </Wrapper>
  );
};

const Wrapper = tw.div`
`;
const Layout = tw.div`
flex
`;
const MindmapBox = styled(MindmapComponent)`
  width: 100%;
  height: 50vh;
  background-color: #f9f9f9;
`;

export default Mindmap;
