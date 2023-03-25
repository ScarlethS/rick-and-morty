const baseURL = "https://rickandmortyapi.com/api/";

export const getCharacter = (searchName) => {
   const url = `${baseURL}/character/?name=${searchName}`
    return fetch(url)
   .then((res) => res.json())
   .then(data => data.results)
   .catch(error => console.log(error));

  };

//   export const getEpisode= () => {
//     const urlEpisode = `${baseURL}/episode/`
//     return fetch(urlEpisode)
//     .then((res) => res.json())
//     .then(data => data.results)
//     .catch(error => console.log('Error', error));
//    };


//   export const getDetailsCharacter = () => {
//     const urlDetails = `${baseURL}/character/{id}`
//     return fetch(urlDetails)
//     .then((res) => res.json())
//     .then(data => data.results)
//     .catch(error => console.log('Error', error));
//    };