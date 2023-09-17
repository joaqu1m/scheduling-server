<template>
    <div class="flex">
        <div
            class="flex justify-center flex-col gap-10 text-2xl text-white h-screen w-[60%] bg-gradient-to-tr from-10% from-primary-gray to-90% to-primary-purple pl-[140px]"
        >
            <slot name="left_main" />
        </div>
        <div
            class="flex flex-col justify-center items-center gap-14 h-screen bg-primary-white drop-shadow-4xl w-[40%]"
        >
            <slot name="right_main" />
        </div>
    </div>
</template>
