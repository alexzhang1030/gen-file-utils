import { getFilesFromDict } from '..'

test('hello vitest', () => {
  expect(getFilesFromDict()).toMatchInlineSnapshot(`
    [
      {
        "children": "123",
        "type": "div",
      },
    ]
  `)
})
