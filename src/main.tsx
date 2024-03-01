import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import SmoothScroll from './components/atoms/SmothScroll/SmothScroll.tsx'
import { Provider } from 'react-redux'
import store from './store/store.ts'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <SmoothScroll />
    </Provider>
  </React.StrictMode>,
)
