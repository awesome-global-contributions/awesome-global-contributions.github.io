<template>
  <div id="app">
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'

  @Component({
    components: {
    },
  })
  export default class App extends Vue { }
</script>

<style lang="stylus">
    @import 'assets/Typography.styl'
</style>
