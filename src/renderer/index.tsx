import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('root') as HTMLDivElement).render(
    <HashRouter>
      <App />
    </HashRouter>
  );
});

// // calling IPC exposed from preload script
// window.electron.ipcRenderer.once('ipc-example', (arg) => {
//   // eslint-disable-next-line no-console
//   console.log(arg);
// });
// window.electron.ipcRenderer.sendMessage('ipc-example', ['ping']);
