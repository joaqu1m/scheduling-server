<template>
    <!-- {{ info.id }}
    {{ info.day }}
    {{ info.schedules }} -->
    <div
        class="h-[90%] min-w-[300px] bg-primary-white drop-shadow-xl rounded-lg"
    >
        <div
            class="w-full h-[75px] bg-primary-purple flex items-center justify-center text-white rounded-tr-lg rounded-tl-lg"
        >
            {{ WeekDaysENUM(new Date(info?.day)?.getDay()) || "" }}
        </div>
    </div>
</template>
<script lang="ts" setup>
const { info } = defineProps(["info"]);
</script>
