<template>
    <div class="input-number">
        <input type="number" v-model="model" :min="props.min" :max="props.max" />
        <span>{{props.unit}}</span>
    </div>
</template>

<script lang="ts" setup>
const model=defineModel()
const props = defineProps({
    unit: {
        type: String,
        required: true,
    },
    min:{
        type:Number,
        default:0,
        required: false,
    },
    max:{
        type:Number,
        default:false,
        required: false,
    }
});
</script>

<style lang="scss" scoped>
.input-number {
    @apply flex rounded outline outline-1 outline-gray-400 gap-4 p-4 has-[:focus]:outline-black;

    &>input::-webkit-inner-spin-button,
    &>input::-webkit-outer-spin-button {
        @apply appearance-none;
    }

    &>input {
        -moz-appearance: textfield;
        @apply grow;
    }
    &>input:focus {
        @apply outline-none;
    }

}
</style>