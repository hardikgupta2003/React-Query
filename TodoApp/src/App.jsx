import { useState } from 'react'
import { QueryClient,QueryClientProvider } from '@tanstack/react-query'
import Demo from "./Demo"
import './App.css';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools' 

const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      refetchOnWindowFocus:false,
    },
  },
})
function App() {

  return (
   <div className=" w-full flex flex-col items-center justify-start h-screen ">
      <QueryClientProvider client={queryClient}>
     <Demo />
     {/* <ReactQueryDevtools initialIsOpen={false} position='bottom-right'/> */}
    </QueryClientProvider>
    </div>
  )
}

export default App
