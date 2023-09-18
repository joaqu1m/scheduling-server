<template>
    <div
        class="h-[90%] min-w-[300px] bg-primary-white drop-shadow-xl rounded-lg"
    >
        <div
            class="w-full h-[75px] bg-primary-purple flex flex-col items-center justify-center text-white rounded-tr-lg rounded-tl-lg"
        >
            <span class="text-xl">
                {{ WeekDaysENUM(new Date(info?.day)?.getDay()) || "" }}
            </span>
            <span>
                {{ DateFormatter(info?.day).getFormattedDayAndMonth() || "" }}
            </span>
        </div>
        <div class="w-full h-[calc(100%-75px)] flex flex-col justify-evenly">
            <div
                v-for="(_, i) in Array(24)"
                class="w-full h-[4%] border-gray-300 border-b-[1px] hover:bg-gray-200 transition-all"
            >
                <span class="text-gray-400">
                    {{ String(i).length === 1 ? `0${i}` : i }}h
                </span>
            </div>
            <!-- {{ info.schedules }} -->
        </div>
    </div>
</template>
<script lang="ts" setup>
const { info } = defineProps(["info"]);

let schedules;
</script>
