<template>
    <div class="flex">
        <div
            v-if="screenWidth > 800"
            class="flex justify-center flex-col gap-10 text-2xl text-white h-screen w-[60%] bg-gradient-to-tr from-10% from-primary-gray to-90% to-primary-purple pl-[140px]"
        >
            <h3 class="text-4xl">Bem vindo de volta</h3>
            <h2 class="text-5xl font-bold">ScheduleReminder</h2>
            <span class="max-w-[250px]">Seu app pessoal de agendamentos</span>
        </div>
        <div
            :class="`flex flex-col justify-center items-center gap-14 h-screen bg-primary-white drop-shadow-4xl ${
                screenWidth > 800 ? 'w-[40%]' : 'w-[100%]'
            }`"
        >
            <span class="text-2xl text-[#271A31]">Login</span>
            <input
                class="border-black border-b-[0.5px] p-2 w-60 bg-transparent"
                type="text"
                placeholder="Email"
            />
            <input
                class="border-black border-b-[0.5px] p-2 w-60 bg-transparent"
                type="password"
                placeholder="Senha"
            />
            <button
                class="bg-primary-purple text-white px-20 py-2 rounded-md font-bold"
            >
                Entrar
            </button>
        </div>
    </div>
</template>
<script lang="ts" setup>
const screenWidth = computed(() => window.innerWidth);
</script>
