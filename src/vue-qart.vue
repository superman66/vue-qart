<template>
    <div>
        <div ref="qart"></div>
        <button @click="convertToImage" v-if="downloadButton">download t2o image</button>
    </div>
</template>


<script type="application/ecmascript">
import QArt from 'qartjs';
  export default {
    props: ['config', 'downloadButton'],
    name: 'VueQart',
  
    data () {
      return {
        msg: '',
      }
    },
    mounted(){
      new QArt(this.config).make(this.$refs.qart);
    },

    methods: {
      convertToImage(){
        const myCanvas = this.$refs.qart.children[0];
        const type = 'image/png';
        let image = myCanvas.toDataURL(type).replace(type, "image/octet-stream");
        window.location.href = image; // it will save locally
      }
    }
  }
</script>

