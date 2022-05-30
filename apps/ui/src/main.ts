/// <reference types="svelte" />
import App from './App.svelte';

const app = new App({
  target: document.body,
  props: {
    name: 'to this example',
  },
});

export default app;
