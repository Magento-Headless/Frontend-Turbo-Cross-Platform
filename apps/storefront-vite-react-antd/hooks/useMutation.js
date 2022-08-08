import { useCallback } from 'react'

export const useMutation = (document) => {
  const defaults = {
    credentials: 'same-origin',
    method: 'POST',
    mode: 'cors',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  }

  return useCallback(
    async (params = { variables: {}, options: {} }) => {
      const { variables, options } = params
      const query = {
        query: document.loc.source.body,
        operationName: document.definitions[0].name.value,
        variables
      }
      const apiURL = `${import.meta.env.REACT_APP_HOST_URL}/api-graphql`
      

      const response = await fetch(apiURL, {
        ...defaults,
        ...options,
        body: JSON.stringify(query)
      })
      
      const result = await response.json()
      return result
    },
    [document]
  )
}
