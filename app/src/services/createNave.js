const BASE_URL = '/api/naves'

export default async function createNave (dataToSend) {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    body: JSON.stringify(dataToSend),
    headers: { 'Content-Type': 'application/json' }
  })
  const response = await res.json()
  return response
}
