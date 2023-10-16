import axios from "axios";

const getImages = (query) => {
  if (!query) {
    return Promise.resolve([]);
  } else {
    return axios
      .get(`https://images-api.nasa.gov/search?q=${query}`)
      .then((response) => {
        const data = response.data;

       
        const parsedImages = data.collection.items.filter(
          (item) => item.data[0].media_type === "image"
        );

        const images = parsedImages.map((item) => item.links[0].href);

        return images;
      })
      .catch((err) => {
        console.log(err);
        throw err; 
  })
};
}
export default getImages;
