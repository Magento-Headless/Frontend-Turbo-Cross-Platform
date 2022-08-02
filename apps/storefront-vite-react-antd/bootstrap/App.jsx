import { useEffect } from 'react'

import getStoreConfig from '../src/graphql/getStoreConfig.gql'

import { useQuery } from '../hooks'

const App = () => {
  const fetchStoreQuery = useQuery(getStoreConfig)

  useEffect(() => {
    const fetchStoreConfig = async () => {
      const { data } = await fetchStoreQuery()
      console.log(data)
    }
    
    fetchStoreConfig()
  }, [])

  return (
    <div className="App">
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
