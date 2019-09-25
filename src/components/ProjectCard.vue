<template>
    <div>
       <div v-if="project != null" class="project card">
           <h1 class="name">{{ this.project.name }}</h1>
           <p class="description">{{ this.project.description }}</p>
           <p class="rating" :class="{ 'has-comment': project.ratingComment != undefined }" :title="project.ratingComment">
                <font-awesome-icon v-for="i in project.rating" :key="i" class="filled star" :icon="['fas', 'star']"/>
                <font-awesome-icon v-for="i in 10-project.rating" :key="project.rating+i" class="empty star" :icon="['far', 'star']"/>
           </p>
           <p class="programming languages">
               <span v-for="lang in project.programmingLanguages" :key="lang" class="badge">{{ lang }}</span>
           </p>
           <p class="frameworks">
               <span v-for="fw in project.frameworksUsed" :key="fw" class="badge">{{ fw }}</span>
           </p>
           <div class="basic links">
                <a v-if="this.project.licenseUrl"
                    :href="this.project.licenseUrl"
                    class="linking item license">
                    <span class="label">License</span>
                    <span class="type">{{ this.project.license }}</span>
                </a>
                <span v-else class="item license">
                    <span class="label">License</span>
                    <span class="type">{{ this.project.license }}</span>
                </span>
                <span class="divider"/>
                <a :href="this.project.repoUrl" class="linking item repository">Repository</a>
                <span class="divider"/>
                <a :href="this.project.websiteUrl" class="linking item website">Website</a>
           </div>
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
.project.card
    margin-top 1rem
    margin-bottom 1rem
    border 1px solid #AAA

    > *
        padding 0.5rem

    .name
        margin 0
        font-size 1.6em
    
    .description
        margin 0

    .rating
        margin 0

        display flex
        justify-content center
        align-items center

        &.has-comment
            cursor help

    .programming.languages
        margin 0
        padding-bottom 0

        display flex
        flex-wrap wrap

        .badge
            background-color #F5D76E
            padding .2em .8em
            margin .2rem
            border-radius 1rem

    .frameworks
        margin 0
        padding-top 0

        display flex
        flex-wrap wrap

        .badge
            background-color #87D37C
            padding .2em .8em
            margin .2rem
            border-radius 1rem

    .basic.links
        padding 0
        border-top 1px solid #AAA
        display flex
        align-items stretch

        .item
            color inherit
            padding .5rem
            flex 1

            display flex
            justify-content center
            align-items center

            &:not(.linking)
                cursor not-allowed
        
        .divider
            border-right 1px solid #AAA

        .license
            flex-direction column

</style>