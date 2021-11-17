import { variables } from "@emredoganm/mono-core";
import React from "react";
import "./App.css";

interface AppProps {}

export const App: React.FC<AppProps> = () => {
  return (
    <div className="App" data-test-id="test for danger">
      <code>
        <pre>{JSON.stringify(variables, null, 2)}</pre>
      </code>
    </div>
  );
};
