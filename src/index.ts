import fs from 'fs'
import path from 'path'
import { root, outputDict, schemeDict } from '../config'

// JSON Scheme  -> VUE Template

if (!fs.existsSync(path.resolve(root, '../', outputDict)))
  fs.mkdirSync(path.resolve(root, outputDict))

export function getFilesFromDict() {
  const files = fs.readdirSync(schemeDict)
  const jsonContents = []
  files.forEach((filePath: string) => {
    const json = readJson(path.resolve(schemeDict, filePath))
    jsonContents.push(json)
    writeFile(filePath.split('.')[0], outputDict, json)
  })
  return jsonContents
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
