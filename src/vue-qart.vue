<template>
    <div>
        <div ref="qart"></div>
        <a @click="convertToImage" v-if="download.visible" v-bind:style="download.style">{{download.text}}</a>
    </div>
</template>


<script type="application/ecmascript">
import QArt from 'qartjs'
export default {
  props: {
    config: {
      type: Object,
    },
    download: {
      type: Object,
      default: function() {
        return {
          visible: false,
        }
      },
    },
  },
  name: 'VueQart',

  data() {
    return {}
  },
  watch: {
    'config.value': function(val, oldVal) {
      this.config.value = val
      this.renderQrcode(this.config)
    },
  },
  mounted() {
    this.renderQrcode(this.config)
  },

  methods: {
    renderQrcode(config) {
      this.qart = new QArt(config)
      this.qart.make(this.$refs.qart)
      // this.$refs.qart.appendChild(this.qart.make())
    },
    convertToImage(e) {
      const { type = 'image/png', filename = 'download.png' } = this.download
      const myCanvas = this.$refs.qart.children[0];
      e.target.href = myCanvas.toDataURL(type)
      e.target.download = filename
    },
  },
}
</script>

