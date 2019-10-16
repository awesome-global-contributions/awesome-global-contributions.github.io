<template>
    <div class="filter-wrapper">
        <a @click="toggleExpanded">
            <div>
                <span>{{ name }}</span>
                <span>
                    <font-awesome-icon :icon="faIcon"/>
                </span>
            </div>
            <div v-if="!isExpanded && summary && summary.trim() != ''">
                {{ summary }}
            </div>
        </a>
        <slot v-if="isExpanded"/>
    </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator'

@Component({
})
export default class FilterWrapper extends Vue {
    @Prop() public name!: string
    @Prop() public summary!: string
    public isExpanded: boolean = false

    get faIcon() {
        if (this.isExpanded) {
            return ['fas', 'angle-up']
        } else {
            return ['fas', 'angle-down']
        }
    }

    public toggleExpanded() {
        this.isExpanded = !this.isExpanded
    }
}
</script>