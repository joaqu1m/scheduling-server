<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>
<style>
.layout-enter-active,
.layout-leave-active {
    transition: all 1s;
}
.layout-enter-from,
.layout-leave-to {
    filter: grayscale(1);
}
</style>
