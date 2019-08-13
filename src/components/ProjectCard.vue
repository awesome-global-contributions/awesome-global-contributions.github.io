<template>
    <div>
       <p v-if="project == null">
           Empty project
       </p>
       <div v-else>
           <p>name: {{ this.project.name }}</p>
           <p>description: {{ this.project.description }}</p>
           <p>license:
               <a
                v-if="this.project.licenseUrl"
                :href="this.project.licenseUrl">
                {{ this.project.name }}</a>
               <span v-else>{{ this.project.name }}</span>
           </p>
           <p>programming languages: {{ this.project.programmingLanguages.join(', ') }}</p>
           <p>rating: {{ this.project.rating }}</p>
           <p>repoUrl:
               <a :href="this.project.repoUrl">{{ this.project.repoUrl }}</a>
           </p>
           <p>websiteUrl:
               <a :href="this.project.websiteUrl">{{ this.project.websiteUrl }}</a>
           </p>
           <p>sdgs: {{ this.project.sdgs.join(', ') }}</p>
       </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import Project from '../dataobjects/Project'

@Component({})
export default class App extends Vue {
    @Prop(Project) public project?: Project
}
</script>

<style lang="stylus" scoped>
</style>