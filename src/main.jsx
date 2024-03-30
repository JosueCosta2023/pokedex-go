import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Reset from './styles/GlobalStyle.js'
import { ThemeProvider } from './contexts/theme-context.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <Reset />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
