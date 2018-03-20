const pify = require('../')

const NotANumber = new Error('Not A Number')
const add = ({ a, b, success, fail }) => {
  const result = a + b
  Number.isNaN(result) ? fail(NotANumber) : success(result)
}

test('pify', async () => {
  const $add = pify(add)

  // success
  expect(await $add({ a : 3, b: 2 })).toBe(5)

  // fail
  try {
    await $add({ a: 1, b: NaN })
  } catch(e) {
    expect(e).toBe(NotANumber)
  }
})
