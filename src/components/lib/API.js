import axios from 'axios'

const baseUrl = "http://172.16.1.72:5000"

export async function uploadPicture(file) {
  const response = await axios.post(`${baseUrl}/productpicture`, file);
  const productData = await response.data
  return productData
  console.log(productData);
  }