[![Travis](https://img.shields.io/travis/superman66/vue-qart.svg?style=plastic)](https://travis-ci.org/superman66/vue-qart) [![npm](https://img.shields.io/npm/v/vue-qart.svg?style=plastic)](https://www.npmjs.com/package/vue-qart) [![npm](https://img.shields.io/npm/dt/vue-qart.svg?style=plastic)](https://www.npmjs.com/package/vue-qart)
# vue-qart

the Vue 2.x Component for [kciter's qart.js](https://github.com/kciter/qart.js)
<br>
<img src="demo/assets/qrcode.png"/>
<br>
Check the [DEMO](http://www.iamsuperman.cn/vue-qart/demo/)
## Installation
**install with NPM**
```javascript
npm install vue-qart --save
```
**Import**
```javascript
import VueQArt from 'vue-qart'

new Vue({
    components: {VueQArt}
})
```
## Usage
**In template**

```html
<vue-q-art :config="config" :downloadButton="downloadButton"></vue-q-art>
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
        downloadButton: false
    }
}
```
* `downloadButton` whether display donwload button.
For more details you should definitely check out [qart.js](https://github.com/kciter/qart.js) 

**download to image**

you can download the qrcode to image by using `canvas.toDataURL()`
```javascript
const myCanvas = this.$refs.qart.children[0];
const type = 'image/png';
let image = myCanvas.toDataURL(type).replace(type, "image/octet-stream");
window.location.href = image; // it will save locally
```

## Build Setup
```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080/demo/
npm run dev

# build demo 
npm run demo

# export the directive as a library
npm run build
```
