<template>
    <div class="flex">
        <div
            class="flex flex-col gap-14 text-lg text-white h-screen min-w-[290px] bg-gradient-to-tr from-10% from-primary-gray to-90% to-primary-purple pt-[40px] pl-[40px] drop-shadow-3xl"
        >
            <slot name="left_main" />
        </div>
        <div
            class="bg-primary-white w-full h-screen flex gap-10 overflow-x-scroll items-center pl-10"
        >
            <slot name="right_main" />
        </div>
    </div>
</template>
