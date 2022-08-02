export const formatURL = (params) => {
  const result = Object.keys(params).map((key) => { 
    return encodeURIComponent(key) + '=' + encodeURIComponent(params[key])
  })

  return result.join('&')
}
