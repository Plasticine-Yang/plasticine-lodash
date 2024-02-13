import { readFile, writeFile } from 'fs/promises'
import { resolve } from 'path'

import { ALL_LANGS, LATEST_VERSION } from '../constants'
import { Lang } from '../enums'
import { DOCS_PATH } from './constants'

/**
 * 在 LATEST_VERSION 目录下创建两种语言的 API 文档
 */
export async function createApi(moduleName: string, apiName: string) {
  await Promise.all(ALL_LANGS.map((lang) => _createApi(moduleName, apiName, lang)))
}

async function _createApi(moduleName: string, apiName: string, lang: Lang) {
  // 1. 获取相关目录路径
  const latestVersionDir = resolve(DOCS_PATH, LATEST_VERSION)
  const langDir = resolve(latestVersionDir, `${lang}/api/${moduleName}`)

  // 2. 创建 md
  const apiDocPath = resolve(langDir, `${apiName}.md`)
  await writeFile(apiDocPath, `# ${apiName}`, 'utf-8')

  // 3. 更新 _meta.json
  const metaJsonPath = resolve(langDir, '_meta.json')
  const meta: string[] = JSON.parse(await readFile(metaJsonPath, 'utf-8'))
  meta.push(apiName)
  await writeFile(metaJsonPath, JSON.stringify(meta), 'utf-8')
}
