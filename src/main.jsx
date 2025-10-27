import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//To provide our redux store to the entire react app we import it here
import { Provider } from 'react-redux';
import store from './store/index.js';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  {/* We wrap our App component with the Provider component and pass the store as a prop */}
  <Provider store={store}>
    <App />
  </Provider>
  </StrictMode>,
)
