<template>
    <div>
        <div ref="qart"></div>
        <button @click="convertToImage">download to image</button>
    </div>
</template>

<script type="application/ecmascript">
  export default {
    props: ['config'],
    name: 'VueQart',
    data () {
      return {
        msg: ''
      }
    },
    mounted(){
      new QArt({
        value: this.config.value,
        imagePath: this.config.imagePath,
        filter: this.config.filter
      }).make(this.$refs.qart);
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

