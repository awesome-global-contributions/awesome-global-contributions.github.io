<template>
  <div class="topbar">
    <router-link class="logo" to="/">
      <img class="logo-img" src="../assets/logo.svg" alt="Logo Awesome Global Contributions"/>
    </router-link>
    <div class="links">
      <router-link class="link" to="/">Awesome Projects</router-link>
      <router-link class="link" to="/create">Add a Project</router-link>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'

  @Component({})
  export default class TopBar extends Vue {}
</script>

<style lang="stylus" scoped>
  .topbar
    position fixed
    top 0
    right 0
    left 0
    height 5rem

    color white
    box-shadow 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)

/* don't do this for mobile (hovering is generally clunky there)
    &:hover
      box-shadow 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)
*/

    display flex
    flex-direction column

    .logo
      height 2rem

      background-color #00600f

      display flex
      justify-content space-around

      .logo-img
        height 2rem
        max-width 100%

    .links
      height 3rem

      background-color #388e3c

      display flex
      justify-content space-around
      align-items stretch

      .link
        padding .5rem

        color inherit
        text-decoration none

        display flex
        align-items: center

</style>

<style lang="stylus">
  .main
    margin-top 5rem
</style>