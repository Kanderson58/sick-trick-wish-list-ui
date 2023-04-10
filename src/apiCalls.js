export const getTricks = () => {
  return fetch('http://localhost:3001/api/v1/tricks')
    .then(response => {
      if(response.ok) {
        return response.json();
      } else {
        throw new Error(response.errorText);
      }
    })
    .catch(error => console.log(error));
}

export const addTrick = (trick) => {
  return fetch('http://localhost:3001/api/v1/tricks', {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(trick)
  });
}