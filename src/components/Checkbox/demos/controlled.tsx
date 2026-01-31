import React, { useState } from 'react';
import { Checkbox } from '../Checkbox';

export default () => {
  const [checked, setChecked] = useState(false);

  return (
    <div style={{ display: 'grid', gap: 12 }}>
      <Checkbox
        name="terms"
        label="Accept terms"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
      <div>checked: {String(checked)}</div>
    </div>
  );
};
