import {isNumber} from './utils'

describe('verificar funcion isNumber', () => {
  test('100 en string es numer', () => {
    const res = isNumber('100')
    expect(res).toBe(true)
  })
  test('100 en number en number', () => {
    expect(isNumber(100)).toBe(true)
  })
  test('string es un numero', () => {
    expect(isNumber('string')).toBe(false)
  })
  test('20h20 es un numero', () => {
    expect(isNumber('20h20')).toBe(false)
  })
})