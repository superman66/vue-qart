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
    watch: {
      'config.value': function (val, oldVal) {
        this.config.vaule = val;
        this.renderQrcode(this.config);
      console.log('new: %s, old: %s', val, oldVal)
      },
    },
    mounted(){
      this.renderQrcode(this.config)
    },
    
    methods: {
      renderQrcode(config){
        this.qart =  new QArt(config);
        this.qart.make(this.$refs.qart)
      },
      convertToImage(){
        const myCanvas = this.$refs.qart.children[0];
        const type = 'image/png';
        let image = myCanvas.toDataURL(type).replace(type, "image/octet-stream");
        window.location.href = image; // it will save locally
      }
    }
  }
</script>

