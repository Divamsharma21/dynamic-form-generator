import React from 'react';
import FormGenerator from './components/FormGenerator';
import './index.css';

const App: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center">Dynamic Form Generator</h1>
      <FormGenerator />
    </div>
  );
};

export default App;