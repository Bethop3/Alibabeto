import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { apolloClient } from './global/apollo/client.ts'
import { BrowserRouter } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ApolloProvider client={apolloClient}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>
)
