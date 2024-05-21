<template>
    <header class="w-full grid-container py-6 relative bg-white rounded-b-3xl">
        <div class="flex flex-col gap-4">
            <div class="flex items-center justify-between">
                <NuxtLink class="text-gray-500 text-base transition-all duration-500 hover:text-[#292929]">О компании</NuxtLink>
                <NuxtLink to="tel:+7 495 126-16-38" class="text-xl">+7 495 126-16-38</NuxtLink>
            </div>
            <div class="w-full h-px bg-gray-400"></div>
            <div class="flex items-center justify-between">
                <NuxtLink to="/">
                    <img src="/images/header/logo.png" alt="" class="w-40">
                </NuxtLink>
                <nav class="flex items-center gap-6 text-lg">
                    <NuxtLink class="flex flex-col after:w-0 after:h-px after:bg-[#292929] after:transition-all after:duration-500 hover:after:w-full">Поис квартир</NuxtLink>
                    <NuxtLink class="flex flex-col after:w-0 after:h-px after:bg-[#292929] after:transition-all after:duration-500 hover:after:w-full">Новости</NuxtLink>
                    <NuxtLink class="flex flex-col after:w-0 after:h-px after:bg-[#292929] after:transition-all after:duration-500 hover:after:w-full">Услуги</NuxtLink>
                    <NuxtLink class="flex flex-col after:w-0 after:h-px after:bg-[#292929] after:transition-all after:duration-500 hover:after:w-full">FAQ</NuxtLink>
                    <NuxtLink class="flex flex-col after:w-0 after:h-px after:bg-[#292929] after:transition-all after:duration-500 hover:after:w-full">Контактная информации</NuxtLink>
                    <NuxtLink class="px-4 py-2 rounded-full bg-gray-100 text-[#12B1DE]">Войти</NuxtLink>
                </nav>
            </div>
        </div>
    </header>
</template>

<script setup>

</script>