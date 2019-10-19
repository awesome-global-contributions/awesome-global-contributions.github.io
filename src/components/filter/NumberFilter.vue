<template>
    <label>
        At least:
        <input
            type="number"
            min="0"
            :max="maxValue"
            v-model="selectedValue">
    </label>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue, Watch } from 'vue-property-decorator'

@Component({

})
export default class NumberFilter extends Vue {
    @Prop(Number) public maxValue?: number
    @Prop(Number) public value?: number

    private selectedValue: string = '0'

    public mounted() {
        if (this.value != null) {
            this.selectedValue = this.value.toString()
        }
    }

    private get selectedNumberValue() {
        return parseInt(this.selectedValue, 10)
    }

    @Watch('value')
    private updateSelectedValue() {
        if (this.value !== this.selectedNumberValue) {
            this.selectedValue = (this.value || 0).toString()
        }
    }

    @Watch('selectedValue')
    @Emit('input')
    private watchNumberMaximum() {
        if (this.maxValue !== undefined && this.selectedNumberValue > this.maxValue) {
            this.selectedValue = this.maxValue.toString()
        }

        if (!isNaN(this.selectedNumberValue)) {
            return this.selectedNumberValue
        } else {
            return 0
        }
    }
}
</script>
