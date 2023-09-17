<script lang="ts" setup>
import BeatLoader from "vue-spinner/src/BeatLoader.vue";

definePageMeta({
    layout: false,
});

let isLoginLoading: Ref<boolean> = ref(false);

const login = () => {
    if (isLoginLoading.value) return;
    isLoginLoading.value = true;

    // setTimeout(() => {
    navigateTo("/schedules");
    // }, 2000);
};
</script>

<template>
    <NuxtLayout name="login">
        <template #left_main>
            <h3 class="text-4xl">Bem vindo de volta</h3>
            <h2 class="text-5xl font-bold">ScheduleReminder</h2>
            <span class="max-w-[250px]">Seu app pessoal de agendamentos</span>
        </template>
        <template #right_main>
            <span class="text-2xl text-[#271A31]">Login</span>
            <input
                class="border-black border-b-[0.5px] p-2 w-60 bg-transparent text-black focus:outline-none"
                type="text"
                placeholder="Email"
            />
            <input
                class="border-black border-b-[0.5px] p-2 w-60 bg-transparent text-black focus:outline-none"
                type="password"
                placeholder="Senha"
            />
            <button
                class="bg-primary-purple hover:bg-secondary-purple duration-300 transition-all text-white w-44 py-2 rounded-md font-bold"
                @click="login()"
            >
                <BeatLoader v-if="isLoginLoading" size="10px" color="white" />
                <span v-else>Entrar</span>
            </button>
        </template>
    </NuxtLayout>
</template>
