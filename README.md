# vue-qart

the Vue 2.x directive for [kciter's qart.js](https://github.com/kciter/qart.js)
![](https://github.com/superman66/vue-qart/blob/master/examples/assets/qrcdoe.png)
## Installation
**install with NPM**
```
npm install vue-qart --save
```
**Import**
```$xslt
import VueQArt from 'VueQArt'

new Vue({
    directives: {VueQArt}
})
```
## Usage
**In template**
```html
<div v-vue-q-art="config"></div>
```
**Set config value**
```javascript
data () {
    return {
        msg: 'Welcome to Your Vue.js App',
        config: {
            value: 'https://www.baidu.com',
            imagePath: './examples/assets/logo.png',
            filter: 'color'
        },
    }
}
```

For more details you should definitely check out[qart.js](https://github.com/kciter/qart.js) 

## Build Setup
``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```
