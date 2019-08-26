<template>
  <div id="app">
    <TopBar/>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import TopBar from './components/TopBar.vue'

  @Component({
    components: {
      TopBar,
    },
  })
  export default class App extends Vue { }
</script>

<style lang="stylus">
</style>
