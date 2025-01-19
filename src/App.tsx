import React from "react";
import "./App.css";

import Input from "./input.json";
import { DataNode } from "./types/types";
import { NodeFactory } from "./components/NodeFactory";

function App() {
  const dataInput: DataNode[] = Input;

  return (
    <div className="App">
      <div className="Wrapper">
        {dataInput.map((node) => (
          <NodeFactory
            node={node}
            marks={{ bold: false, italicize: false, underline: false }}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
