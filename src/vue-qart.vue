<template>
    <div>
        <div ref="qart"></div>
        <button @click="convertToImage" v-if="download.visible" v-bind:style="download.style">{{download.text}}</button>
    </div>
</template>


<script type="application/ecmascript">
import QArt from "qartjs";
export default {
  props: {
    config: {
      type: Object,
    },
    download: {
      type: Object,
      default: function(){
        return {
          visible: false,
          text: '下载为图片',
          style: {}
        }
      }
    }
  },
  name: "VueQart",

  data() {
    return {
      msg: ""
    };
  },
  watch: {
    "config.value": function(val, oldVal) {
      this.config.value = val;
      this.renderQrcode(this.config);
    }
  },
  mounted() {
    this.renderQrcode(this.config);
  },

  methods: {
    renderQrcode(config) {
      this.qart = new QArt(config);
      this.qart.make(this.$refs.qart);
      // this.$refs.qart.appendChild(this.qart.make())
    },
    convertToImage() {
      const myCanvas = this.$refs.qart.children[0];
      const type = "image/png";
      let image = myCanvas.toDataURL(type).replace(type, "image/octet-stream");
      window.location.href = image; // it will save locally
    }
  }
};
</script>

