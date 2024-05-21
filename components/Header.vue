<template>
    <header class="w-full grid-container py-6 relative bg-white rounded-b-3xl">
        <div class="flex flex-col gap-4">
            <div class="flex items-center justify-between">
                <NuxtLink to="/about" class="text-gray-400 text-base transition-all duration-500 hover:text-[#292929]">О компании</NuxtLink>
                <NuxtLink to="tel:+7 495 126-16-38" class="text-xl font-Nunito font-semibold">+7 495 126-16-38</NuxtLink>
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
                    <NuxtLink class="flex flex-col after:w-0 after:h-px after:bg-[#292929] after:transition-all after:duration-500 hover:after:w-full">Контакты</NuxtLink>
                    <NuxtLink class="px-4 py-2 rounded-full bg-gray-100 text-[#12B1DE]">Войти</NuxtLink>
                </nav>
            </div>
        </div>
        <button type="button" @click="messageTitle = null" class="fixed top-10 right-10 z-[11] cursor-pointer flex items-center gap-2 px-6 py-2 text-lg rounded-2xl w-fit bg-white shadow-[0px_0px_13px_-7px_black]" :class="messageType ? ' text-[#12B1DE]/70' : 'text-red-500'" v-if="messageTitle">
            <Icon class="text-3xl" name="material-symbols:close-small-rounded"/>
            <span>{{messageTitle}}</span>
        </button>
    </header>
</template>

<script setup>
    /* создание меню */
    const isMenuShow = ref(false)


    /* хук */
    const nuxtApp = useNuxtApp()
    nuxtApp.hook('page:start', () => {
        isMenuShow.value = false
    })


    /* создание сообщений */
    const { messageTitle, messageType } = storeToRefs(useMessagesStore())
</script>