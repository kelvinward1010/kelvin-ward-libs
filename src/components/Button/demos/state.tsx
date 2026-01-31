import React, { useState } from 'react';
import { Button } from 'kelvinward-libs';

export default () => {
  const [count, setCount] = useState(0);

  return (
    <div style={{ display: 'grid', gap: 12, maxWidth: 420 }}>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <Button onClick={() => setCount((c) => c + 1)}>Click me ({count})</Button>
        <Button disabled>Disabled</Button>
      </div>

      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <Button className="is-primary">Primary</Button>
        <Button className="is-danger">Danger</Button>
      </div>
    </div>
  );
};
