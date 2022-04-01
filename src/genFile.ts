import fs from 'fs'
import path from 'path'

// JSON Scheme  -> VUE Template

export function genFilesFromDict(
  root: string,
  schemeDict: string,
  outputDict: string
) {
  if (!fs.existsSync(path.resolve(root, '../', outputDict)))
    fs.mkdirSync(path.resolve(root, outputDict))
  const files = fs.readdirSync(schemeDict)
  files.forEach((filePath: string) => {
    const json = readJson(path.resolve(schemeDict, filePath))
    writeFile(filePath.split('.')[0], outputDict, json)
  })
}

function readJson(path: string) {
  return JSON.parse(fs.readFileSync(path, 'utf8'))
}

function writeFile(fileName: string, filePath: string, scheme: Scheme) {
  fs.writeFileSync(
    path.resolve(filePath, `${fileName}.vue`),
    `
<template>
    ${genCodeStr(scheme)}
</template>
  `,
    'utf-8'
  )
}

interface Scheme {
  type: string
  children: string
}

function genCodeStr(schemes: Scheme) {
  return `
<${schemes.type}>
    ${schemes.children}
</${schemes.type}>
`
}
