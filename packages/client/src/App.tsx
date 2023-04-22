import React from "react";
import { createRoot } from 'react-dom/client';

import "./index.scss";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: client</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Tailwind</div>
  </div>
);


const container = document.getElementById('app');
if (container != null) {
  const root = createRoot(container);
  root.render(<App />);
}
