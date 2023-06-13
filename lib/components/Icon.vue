<script setup lang="ts">
const props = defineProps({
    icon: {
        type: String,
        required: true
    }
});
</script>

<template>
    <svg class="icon"><use :xlink:href="'#' + props.icon" /></svg>
</template>

<style scoped lang="scss">
.icon {
    --size: 1rem;

    width: var(--size);
    height: var(--size);
}
</style>