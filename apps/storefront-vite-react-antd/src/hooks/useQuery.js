import { useCallback } from 'react'

import { formatURL, shrinkQuery } from '../utils'

export const useQuery = (document) => {
  const defaults = {
    credentials: 'same-origin',
    method: 'GET',
    mode: 'cors',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  }

  return useCallback(
    async (variables = {}, options = {}) => {
      const query = {
        query: document.loc.source.body,
        operationName: document.definitions[0].name.value,
        variables: JSON.stringify(variables)
      }
      const url = formatURL(query)
      const apiURL = shrinkQuery(`${import.meta.env.REACT_APP_GRAPHQL_URL}/graphql?${url}`)

      const response = await fetch(apiURL, {
        ...defaults,
        ...options
      })
      const result = await response.json()
      return result
    },
    [document]
  )
}
