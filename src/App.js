import { Background, Controls, MiniMap, NodeToolbar, Panel, ReactFlow } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import "./App.css";

const nodes = [
  {
    id: '1',
    position: { x: 300, y: 250 },
    data: { label: 'Hello' },
  },
  {
    id: '2',
    position: { x: 30, y: 250 },
    data: { label: 'Two' },
  },
  {
    id: '3',
    position: { x: 300, y: 25 },
    data: { label: 'Three' },
  },
];
const styles = {
  background: 'black',
 
};

function App() {
  return (
    <div style={{ height: '100%' }}>
      <ReactFlow nodes={nodes} >
        <Background />
        <Controls />
        <MiniMap />
        <Panel />
        <NodeToolbar />
      </ReactFlow>
    </div>
    
  );
}

export default App;
