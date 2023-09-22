import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3011/admin',
})

export async function getInstrumentationConfig(storeId: string) {
  const response = await api.get(`/instrument/${storeId}`)

  const data = response.data as {
    status: boolean
    instrumentations: Array<{
      id: string
      name: string
      description: string
      active: boolean
    }>
  }

  return data ?? { status: false, instrumentations: [] }
}

export async function setInstrumentationList(
  storeId: string,
  instrumentations: string[]
) {
  const response = await api.post(`/instrument/${storeId}`, {
    instrumentations,
  })

  return response.data
}

export async function setInstrumentationStatus(
  storeId: string,
  status: boolean
) {
  const response = await api.post(`/instrument/status/${storeId}`, {
    status,
  })

  return response.data
}
