<template>
  <div class="wrapper">
    <ProjectForm/>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import ProjectForm from '../components/ProjectForm.vue'

  @Component({
    components: {
      ProjectForm
    },
  })
  export default class CreatePage extends Vue {}
</script>

<style lang="stylus" scoped>
  
</style>
