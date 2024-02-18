// packages/ui-library/index.js

// import { init } from 'snabbdom';
import { init } from 'https://unpkg.com/snabbdom@latest/dist/snabbdom.esm.js';
import eventListeners from 'snabbdom/modules/eventlisteners';

const patch = init([eventListeners]);

export const createApp = (container, template) => {
  let state = {};

  const updateState = (newState) => {
    state = { ...state, ...newState };
    render();
  };

  const render = () => {
    const newVNode = template(state, updateState);
    patch(container, newVNode);
  };

  const mount = () => {
    render();
    console.log('Component mounted');
  };

  mount(); // Initial mount

  return { updateState };
};
