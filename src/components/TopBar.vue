<template>
  <el-menu class="el-menu-demo" mode="horizontal" :router="true">
    <el-menu-item index="/">Project List</el-menu-item>
    <el-menu-item index="/create">Add a Project</el-menu-item>
  </el-menu>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'

  @Component({})
  export default class TopBar extends Vue {}
</script>
