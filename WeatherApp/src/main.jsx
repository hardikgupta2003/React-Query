import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ReactQueryDevtools } from 'react-query-devtools'
import { useQuery, useQueryClient, useMutation , QueryClient} from 'react-query';
import { QueryClientProvider } from 'react-query';
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <App />
    {/* <ReactQueryDevtools  initialIsOpen={false} position='bottom-right'/> */}
    </QueryClientProvider>
  </React.StrictMode>,
)
