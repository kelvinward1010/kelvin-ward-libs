import React from 'react';
import { Input } from '../Input';

export default () => (
  <div style={{ display: 'grid', gap: 12, maxWidth: 360 }}>
    <Input placeholder="Enter your name" />
    <Input placeholder="Disabled input" disabled />
  </div>
);
