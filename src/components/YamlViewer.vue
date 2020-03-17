<template>
  <div>
    <highlight-code
      lang="yaml"
      :code="yaml"
    ></highlight-code>
    <el-button
      :type="copyButtonType"
      v-show="copySupported && yaml != undefined"
      :icon="copyIcon"
      @click="copyToClipboard">{{ copyText }}</el-button>
  </div>
</template>

<script lang="ts">
  import { Input } from 'element-ui'
  import { Component, Prop, Vue } from 'vue-property-decorator'

  import { copyToClipboard } from '../modules/CopyToClipboard'

  const COPY_TEXT = 'Copy to Clipboard'
  const COPIED_TEXT = 'Successfully copied'

  const COPY_BUTTON_TYPE_NORMAL = 'primary'
  const COPY_BUTTON_TYPE_SUCCESS = 'success'

  @Component({
    components: {
      Input,
    },
  })
  export default class YamlViewer extends Vue {
    @Prop(String)
    public yaml?: string

    // only for visual feedback
    private copyText: string = COPY_TEXT
    private copyIcon: string = ''
    private copyButtonType: string = COPY_BUTTON_TYPE_NORMAL

    private copySupported: boolean = document.queryCommandSupported('copy')

    public copyToClipboard() {
      // tslint:disable-next-line:triple-equals
      if (this.yaml != undefined) {
        copyToClipboard(this.yaml)
          .then(this.showCopiedVisualFeedback)
          .catch(() => window.alert('Copy did not work. Most likely your browser doesn\'t support it'))
      }
    }

    private showCopiedVisualFeedback() {
      this.copyText = COPIED_TEXT
      this.copyIcon = 'el-icon-check'
      this.copyButtonType = COPY_BUTTON_TYPE_SUCCESS

      setTimeout(() => {
        this.copyText = COPY_TEXT
        this.copyIcon = ''
        this.copyButtonType = COPY_BUTTON_TYPE_NORMAL
      }, 2000)
    }
  }
</script>

<style lang="stylus" scoped>
  
</style>
