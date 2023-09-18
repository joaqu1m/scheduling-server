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
                v-for="{ hour } in hours"
                class="w-full h-[4%] border-gray-300 border-b-[1px] hover:bg-gray-200"
            >
                <span class="text-gray-400"> {{ hour }}h </span>
            </div>
            <!-- {{ info.schedules }} -->
        </div>
    </div>
</template>
<script lang="ts" setup>
const { info } = defineProps(["info"]);

const diaNoAno1 =
    info.day.getDate() +
    info.day.getMonth() * 30 +
    info.day.getFullYear() * 365;

let hours = ref(
    Array(24)
        .fill(undefined)
        .reduce((acc, _, i) => {
            info.schedules.forEach((v: any, i2: number) => {
                console.log(v);
                const fullDate = new Date(v.timeStart);

                const diaNoAno2 =
                    fullDate.getDate() +
                    fullDate.getMonth() * 30 +
                    fullDate.getFullYear() * 365;

                if (diaNoAno1 === diaNoAno2) {
                    console.log(info.day);
                    console.log(new Date(v.timeStart));
                }
            });
            return acc.concat({
                hour: `${String(i).length === 1 ? "0" : ""}${i}`,
                // atrelated
            });
        }, [])
);
</script>
