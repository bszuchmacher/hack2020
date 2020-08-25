import axios from 'axios'

const baseUrl = "https://co2footprintrocks.herokuapp.com/"

export async function uploadPicture(file) {
  const response = await axios.post(`${baseUrl}/productpicture`, file);
  const productData = await response.data
  return productData
  }