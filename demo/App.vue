<template>
    <div id="app">
        <img src="logo.png">
        <h1>{{ msg }}</h1>
        <!--<div v-vue-q-art="config"></div>-->
        <vue-q-art :config="config" :downloadButton="downloadButton"></vue-q-art>
        change qrcode url: <input type="text" v-model="config.value">
    </div>
</template>

<script>
  import VueQArt from '../src/vue-qart.vue'
  export default {
    components: {
      VueQArt
    },
    name: 'app',
    data () {
      return {
        msg: 'the Vue 2.x directive for QArt.js',
        config: {
          value: 'https://www.baidu.com',
          imagePath: './assets/logo.png',
          filter: 'color',
          size: 500
        },
        downloadButton: false
      }
    }
  }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
