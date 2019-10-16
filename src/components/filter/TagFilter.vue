<template>
    <div>
        <label v-for="tag in tags"
            :key="tag">
            <input
                type="checkbox"
                :value="tag"
                v-model="selectedTags">
            {{ tag }}
        </label>
    </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue, Watch } from 'vue-property-decorator'

@Component({
})
export default class TagFilter extends Vue {
    @Prop() public tags!: string[]
    @Prop() public value!: string[]
    public selectedTags: string[] = []

    public mounted() {
        if (this.value) {
            this.updateSelectedTags()
        }
    }

    @Watch('value')
    public updateSelectedTags() {
        if (this.selectedTags !== this.value) {
            this.selectedTags = this.value
        }
    }

    @Watch('selectedTags')
    @Emit('input')
    public updateValue() {
        return this.selectedTags
    }
}
</script>