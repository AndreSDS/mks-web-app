import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import { GlobalStyle } from './assets/styles/globalStyles'
import { store } from './context/store'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <>
    <GlobalStyle />
    <Provider store={store}>
      <App />
    </Provider>
    </>
  </React.StrictMode>
)
