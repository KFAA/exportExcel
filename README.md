# exportExcel

##### 注意xlsx、xlsx-style的版本

##### 在node_modules中找到xlsx-tyle/dist/cpexcel.js

```js
// 找到 cpexcel.js 中的807行 将 var cpt = require('./cpt' + 'able') 改为

var cpt = cptable

// 不改会报错 
```
*可以不用引入xlsx，xlsx-style中有xlsx的主要文件，但是需要改动xlsx-style/old.js中引入xlsx的路径，不然也会报错。

`npm i xlsx xlsx-style blob --save`