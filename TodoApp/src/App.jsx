import { useState } from 'react'
import { QueryClient,QueryClientProvider } from '@tanstack/react-query'
import Demo from "./Demo"
import './App.css';


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
    </QueryClientProvider>
    </div>
  )
}

export default App
