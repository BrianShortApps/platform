import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { applyTheme } from "./design";
import './index.css'
import App from './App.tsx'

applyTheme("dark");

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
