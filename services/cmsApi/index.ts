import { config } from 'config'
const {
  CMS: { BASE_URL },
} = config

export const fetchAPI = async (API: string) => {
  const response = await fetch(`${BASE_URL}${API}`)
  const data = await response.json()

  return data
}
