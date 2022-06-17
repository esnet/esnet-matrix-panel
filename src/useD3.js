import React from 'react';

export const useD3 = (renderFn, dependencies) => {
  const ref = React.useRef();

  React.useEffect(() => {
    renderFn(ref.current);
    return () => {};
  });
  return ref;
};
