import { cac } from 'cac'

import { createApi } from './create-api'

const cli = cac('doc-site-cli')

cli
  .command('<moduleName> <apiName>', 'create an api')
  .alias('create-api')
  .action((moduleName: string, apiName: string) => {
    createApi(moduleName, apiName)
  })

cli.help()
cli.parse()
