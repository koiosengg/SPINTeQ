import React from 'react';
import stackImg from '../../assets/Solutions/stack.png';

const Stack = () => {
  return (
    <section className="solutions-stack">
      <div className="solutions-stack-header">
        <p className="solutions-stack-label">VISUAL STACK</p>
        <h2 className="solutions-stack-title">
          Building Intelligence,<br />Layer by Layer
        </h2>
      </div>
      <div className="solutions-stack-visual">
        <img src={stackImg} alt="Visual Stack Diagram" className="solutions-stack-img" />
      </div>
    </section>
  );
};

export default Stack;
