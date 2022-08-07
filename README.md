### 多入口打包

- htmlWebpackPlugin中的chunks

htmlWebpackPlugin中的chunks
chunks 选项的作用主要是针对多入口(entry)文件。当你有多个入口文件的时候，对应就会生成多个编译后的 js 文件。那么 chunks 选项就可以决定是否都使用这些生成的 js 文件。

chunks 默认会在生成的 html 文件中引用所有的 js 文件，当然你也可以指定引入哪些特定的文件。

- splitchunk分包chunk的默认值为async，对动态导入的文件单独打包。
- 对于目前的多页应用而言，h5使用iview这个第三方库，pc使用elenmentui，并且还有公共使用的部分，我们希望都单独提取出来各自打包，公共的见cacheGroups的default配置
