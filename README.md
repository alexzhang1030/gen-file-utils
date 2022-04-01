# gen-file-utils

## what is it?

using `scheme` to generate files (now only `.vue`)

## how it works?

using `fs` to write file

## scheme rules:

```json
{
  "type": "div",
  "children": "123"
}
```

from dict `scheme` you need to create `.json` file

- `type`: html type
- `children`: html content (now only text)

## CLI

- `pnpm test`: run test
- `pnpm tr`: gen file

## thanks

- vitest
- tsup
- unplugin-auto-import
