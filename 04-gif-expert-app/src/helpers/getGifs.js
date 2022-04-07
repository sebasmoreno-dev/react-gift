

export const getGifs = async ( category ) => {
  // hacemos una petición a la API de Giphy
  const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category )}&limit=10&api_key=O0Z2Bh0rOUis74vmaaF0E7kgOsJ7fR1E`;
  const resp = await fetch( url );
  const { data } = await resp.json();

  //extraer los datos que necesitamos
  const gifs = data.map( ({ id, title, images }) => {

    return {
      id: id,
      title: title,
      url: images?.downsized_medium.url
    }
  })

  return gifs;
}