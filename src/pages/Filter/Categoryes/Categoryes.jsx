import React, { useState } from 'react';
import './Categoryes.css';

const categories = [
  { name: 'Jewelry', count: 19 },
  { name: 'Bracelets', count: 5 },
  { name: 'Brooches', count: 6 },
  { name: 'Earrings', count: 7 },
  { name: 'Necklace', count: 10 },
  { name: 'Rings', count: 4 }
];

function Categoryes() {
  const [selected, setSelected] = useState('Jewelry');
  const [expanded, setExpanded] = useState(true);

  const toggleExpand = () => setExpanded(!expanded);

  return (
    <div className="category-box border rounded p-3 bg-white">
      <div
        className="d-flex justify-content-between align-items-center mb-2"
        onClick={toggleExpand}
        style={{ cursor: 'pointer' }}
      >
        <h6 className="m-0 ">Categories</h6>
        <span>{expanded ? '▾' : '▸'}</span>
      </div>
      <hr />
      {expanded && (
        <ul className="list-unstyled mb-0">
          {categories.map((cat) => (
            <li key={cat.name} className="d-flex align-items-center mb-2">
              <input
                type="checkbox"
                id={cat.name}
                checked={selected === cat.name}
                onChange={() => setSelected(cat.name)}
                className="form-check-input me-2 custom-checkbox"
              />
              <label htmlFor={cat.name} className={`m-0 category-label ${selected === cat.name ? 'active' : ''}`}>
                {cat.name} <span className="text-muted">({cat.count})</span>
              </label>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Categoryes;


