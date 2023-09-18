<script lang="ts" setup>
definePageMeta({
    layout: false,
});

const { data } = await useFetch("/api/user/joaquim.pires@sptech.school");

const body = data.value?.body;

const currentDate = new Date();
const qntDias = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
).getDate();

const days = ref(
    Array(qntDias)
        .fill(undefined)
        .reduce((acc, _, i) => {
            let curSchedules;

            const diaAtual1 = new Date(
                currentDate.getFullYear(),
                currentDate.getMonth(),
                i + 1
            );
            const diaNoAno1 =
                diaAtual1.getDate() +
                diaAtual1.getMonth() * 30 +
                diaAtual1.getFullYear() * 365;

            body?.[0].days.forEach(({ day, schedules }) => {
                const diaAtual2 = new Date(day);
                const diaNoAno2 =
                    diaAtual2.getDate() +
                    diaAtual2.getMonth() * 30 +
                    diaAtual2.getFullYear() * 365;

                if (diaNoAno1 === diaNoAno2) {
                    curSchedules = schedules;
                } else {
                    curSchedules = [];
                }
            });

            acc.push({
                day: diaAtual1,
                schedules: curSchedules,
            });
            return acc;
        }, [])
);
</script>

<template>
    <NuxtLayout name="schedules">
        <template #left_main>
            <div class="flex flex-col">
                <span>Bom dia,</span>
                <span class="text-2xl font-semibold">Joaquim Pires</span>
            </div>
            <div class="flex align-center h-[40px] gap-4 cursor-pointer">
                <img
                    class="w-[25px] h-[25px] self-center"
                    src="/assets/img/clockIcon.png"
                    alt="Clock Icon"
                />
                <span class="flex items-center">Minha agenda</span>
            </div>
            <div class="flex align-center h-[40px] gap-4 cursor-pointer">
                <img
                    class="w-[25px] h-[25px] self-center"
                    src="/assets/img/gearIcon.png"
                    alt="Gear Icon"
                />
                <span class="flex items-center">Configurações</span>
            </div>
            <div
                class="flex align-center h-[40px] gap-4 cursor-pointer"
                @click="navigateTo('/login')"
            >
                <img
                    class="w-[25px] h-[25px] self-center"
                    src="/assets/img/logoffIcon.png"
                    alt="Logoff Icon"
                />
                <span class="flex items-center">Logoff</span>
            </div>
        </template>
        <template #right_main>
            <DayCard v-for="(cardInfo, i) in days" :info="cardInfo" :key="i" />
        </template>
    </NuxtLayout>
</template>
