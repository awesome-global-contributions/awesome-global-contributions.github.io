<template>
  <div>
    <highlight-code
      lang="yaml"
      :code="yaml"
    ></highlight-code>
    <el-button
      type="primary"
      :loading="loading"
      v-show="copySupported && yaml != undefined"
      @click="copyToClipboard">Copy to Clipboard</el-button>
  </div>
</template>

<script lang="ts">
  import { Input } from 'element-ui'
  import { Component, Prop, Vue } from 'vue-property-decorator'

  import { copyToClipboard } from '../modules/CopyToClipboard'

  @Component({
      components: {
        Input,
      },
  })
  export default class YamlViewer extends Vue {
      @Prop(String)
      public yaml?: string

      // only for visual feedback
      private loading: boolean = false
      private copySupported: boolean = document.queryCommandSupported('copy')

      public copyToClipboard() {
        // tslint:disable-next-line:triple-equals
        if (this.yaml != undefined) {
          copyToClipboard(this.yaml)
        }
      }
  }
</script>

<style lang="stylus" scoped>
  
</style>
