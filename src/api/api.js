import axios from 'axios'

export const getApiOrders = async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=15')
  return response.data
}