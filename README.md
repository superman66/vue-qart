[![Travis](https://img.shields.io/travis/superman66/vue-qart.svg?style=plastic)](https://travis-ci.org/superman66/vue-qart) [![npm](https://img.shields.io/npm/v/vue-qart.svg?style=plastic)](https://www.npmjs.com/package/vue-qart) [![npm](https://img.shields.io/npm/dt/vue-qart.svg?style=plastic)](https://www.npmjs.com/package/vue-qart)
# vue-qart
##  You should read it before you using vue-qart
>because of qart.js's author doesn't publish the lastest version to npm. so, the new options `size`, `version`,`background`,`fillType` doesn't work in vue-qart until qart.js' author publish the lastest version.

>For More Detail, seeing this issue: [size option doesn't works](https://github.com/kciter/qart.js/issues/20)

the Vue 2.x Component for [kciter's qart.js](https://github.com/kciter/qart.js)
<br>
<img src="demo/assets/qrcode.png"/>
<br>
Check the [DEMO](http://superman66.github.io/vue-qart/)
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
<vue-q-art :config="config"></vue-q-art>
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
        }
    }
}
```
**for imagePath prop, you can use base64 instead of image path.**

For more details you should definitely check out [qart.js](https://github.com/kciter/qart.js) 


**download to image**

passing `download` props, to show download button, it support: 
- text - button text
- visible - setting download button visible or not
- style - setting download button style
- type - image type,such as `image/png`
- filename


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
