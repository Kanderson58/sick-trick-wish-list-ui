export const getTricks = () => {
  return fetch('http://localhost:3001/api/v1/tricks')
    .then(response => {
      if(response.ok) {
        return response.json()
      } else {
        throw new Error(response.errorText)
      }
    })
    .catch(error => console.log(error))
}