# vue-qart

the Vue 2.x directive for [kciter's qart.js](https://github.com/kciter/qart.js)
<br>
<img src="demo/assets/qrcode.png"/>
<br>
Check the [DEMO](http://www.iamsuperman.cn/vue-qart/demo/)
## Installation
**install with NPM**
```
npm install vue-qart --save
```
**Import**
```$xslt
import VueQArt from 'vue-qart'

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
