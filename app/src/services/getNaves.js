const BASE_URL = '/api/naves'

// export default function getNaves () {
//   return fetch(BASE_URL)
//     .then(res => res.json())
//     .then(response => {
//       if (Array.isArray(response)) { // valido si la respuesta es un array
//         // const {}
//         console.log('aaaaa')
//         console.log(response)
//         return response
//       }
//     })
// }
export default async function getNaves () {
  const res = await fetch(BASE_URL)
  const response = await res.json()
  if (Array.isArray(response)) {
    return response
  }
}
