import { useEffect, useState } from 'react'
import { useQuery, useQueryClient, useMutation , QueryClient} from '@tanstack/react-query';
import './App.css'
import axios from 'axios';

function App() {
  const [quote, setQuote] = useState("");

const query = useQuery({queryKey:[],
                        queryFn: () => {
                          const response = axios.get(`https://api.quotable.io/random`)
                            .then(res => {
                              setQuote(res.data)
                              console.log(res.data.content)
                            })
                            .catch(err => console.log
                              (`Error: ${err}`)
                            )
                            return response
                        },
                        staleTime: Infinity,
                        cacheTime: 0,
  })
  console.log(query)



  return (
    <div className="">

    
        
      <h1>Get a Random Quote</h1>
        <button >Generate</button>
        <p className=''>{quote.content}</p>
      


    </div>
  )
}

export default App
