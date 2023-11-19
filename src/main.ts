import "./app.css";
import App from "./App.svelte";

const appDoc = document.getElementById("app")!;

const app = new App({
  target: appDoc,
});

export default app;
