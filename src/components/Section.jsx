import React from 'react';

function Section({ title, text }) {
  
  return (
    <section className="section">
      <h2 className="title">{title}</h2>
      <hr/>
      <p>{text}</p>
    </section>
  );
}

export default Section;