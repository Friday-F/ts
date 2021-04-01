import ts from 'rollup-plugin-typescript2' //解析ts插件
import { nodeResolve } from '@rollup/plugin-node-resolve' //解析第三方插件
import serve from 'rollup-plugin-serve' //启动本地服务插件
import path from 'path'
export default{
  input:'src/index.ts',
  output:{
    format:'iife', //输出的文件类型， iife:一个自动执行的功能
    file:path.resolve(__dirname,'dist/bundle.js'),//输出文件
    sourcemap:true, //根据源码产生映射文件
  },
  plugins:[
    nodeResolve({
      extensions:['.js','.ts']
    }),
    ts({
      tsconfig:path.resolve(__dirname,'tsconfig.json')
    }),
    serve({
      openPage:'/public/index.html',
      contentBase:'',
      port:4000
    })
  ]
}
