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

const dias = Array(qntDias)
    .fill(undefined)
    .reduce((acc, _, i) => {
        const diaAtual = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth() + 1,
            i + 1
        );

        body?.users[0].days.forEach(({ day }: any) => {
            const dayAtual = new Date(day)
            console.log(dayAtual)
            const diaNoAno = dayAtual.getDate() + dayAtual.getMonth() * 30 + dayAtual.getFullYear() * 365
            if (day === diaAtual.toISOString()) {
                console.log("opa")
            }
        });

        acc.push({
            dia: diaAtual,
            schedules: [],
        });
        return acc;
    }, []);

console.log(dias);

const days = ref(body?.users[0].days);
</script>

<template>
    <NuxtLayout name="schedules">
        <template #left_main>
            <div class="flex flex-col">
                <span>Bom dia,</span>
                <span class="text-2xl font-semibold">Joaquim Pires</span>
            </div>
            <div class="flex align-center h-[40px] gap-4">
                <img
                    class="w-[25px] h-[25px] self-center"
                    src="/assets/img/clockIcon.png"
                    alt="Clock Icon"
                />
                <span class="flex items-center">Minha agenda</span>
            </div>
            <div class="flex align-center h-[40px] gap-4">
                <img
                    class="w-[25px] h-[25px] self-center"
                    src="/assets/img/gearIcon.png"
                    alt="Gear Icon"
                />
                <span class="flex items-center">Configurações</span>
            </div>
            <div class="flex align-center h-[40px] gap-4">
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
            <DayCard v-for="(cardInfo, i) in days" :info="cardInfo" :key="i" />
            <DayCard v-for="(cardInfo, i) in days" :info="cardInfo" :key="i" />
            <DayCard v-for="(cardInfo, i) in days" :info="cardInfo" :key="i" />
            <DayCard v-for="(cardInfo, i) in days" :info="cardInfo" :key="i" />
        </template>
    </NuxtLayout>
</template>
