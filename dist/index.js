// src/Button.tsx
import { jsx } from "react/jsx-runtime";
function Button({ className = "", children, ...props }) {
  return /* @__PURE__ */ jsx("button", { ...props, className: `kelvinward-btn ${className}`, children });
}
export {
  Button
};
//# sourceMappingURL=index.js.map