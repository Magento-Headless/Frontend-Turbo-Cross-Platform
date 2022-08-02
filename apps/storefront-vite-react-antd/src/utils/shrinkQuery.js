import { stripIgnoredCharacters } from 'graphql/utilities/stripIgnoredCharacters'

export const shrinkQuery = (fullURL) => {
  const url = new URL(fullURL)

  // Read from URL implicitly decodes the querystring
  const query = url.searchParams.get('query')
  if (!query) {
    return fullURL
  }

  const strippedQuery = stripIgnoredCharacters(query)

  // URLSearchParams.set will use application/x-www-form-urlencoded encoding
  url.searchParams.set('query', strippedQuery)

  return url.toString()
}
