<template>
    <header class="w-full grid-container py-6 relative bg-white lg:rounded-b-3xl">
        <div class="flex flex-col gap-4">
            <div class="flex items-center justify-between">
                <NuxtLink to="/about" class="text-gray-400 text-base transition-all duration-500 hover:text-[#292929]">О компании</NuxtLink>
                <NuxtLink to="tel:8 911-976-05-22" class="font-Nunito font-semibold transition-all duration-500 hover:text-[#12B1DE]">8 911-976-05-22</NuxtLink>
            </div>
            <div class="w-full h-px bg-gray-400"></div>
            <div class="flex items-center justify-between">
                <NuxtLink to="/">
                    <img src="/images/header/logo.png" alt="" class="w-40">
                </NuxtLink>
                <nav class="flex items-center gap-6 text-lg transition-all duration-500 max-lg:flex-col max-lg:absolute max-lg:w-full max-lg:left-0 max-lg:bg-white max-lg:py-6 max-lg:rounded-b-3xl z-[4]" :class="isMenuShow ? 'max-lg:top-full' : 'max-lg:top-0 max-lg:-translate-y-full'">
                    <NuxtLink to="/catalog" class="flex flex-col after:w-0 after:h-px after:bg-[#292929] after:transition-all after:duration-500 hover:after:w-full">Поиск квартир</NuxtLink>
                    <NuxtLink to="/news" class="flex flex-col after:w-0 after:h-px after:bg-[#292929] after:transition-all after:duration-500 hover:after:w-full">Новости</NuxtLink>
                    <NuxtLink to="/services" class="flex flex-col after:w-0 after:h-px after:bg-[#292929] after:transition-all after:duration-500 hover:after:w-full">Услуги</NuxtLink>
                    <NuxtLink to="/FAQ" class="flex flex-col after:w-0 after:h-px after:bg-[#292929] after:transition-all after:duration-500 hover:after:w-full">FAQ</NuxtLink>
                    <NuxtLink to="/contacts" class="flex flex-col after:w-0 after:h-px after:bg-[#292929] after:transition-all after:duration-500 hover:after:w-full">Контакты</NuxtLink>
                    <NuxtLink v-if="authenticated" to="/profile" class="px-4 py-2 rounded-full bg-gray-100 text-[#12B1DE]">Профиль</NuxtLink>
                    <NuxtLink v-else to="/auth" class="px-4 py-2 rounded-full bg-gray-100 text-[#12B1DE]">Войти</NuxtLink>
                </nav>
                <button type="button" class="lg:hidden" @click="isMenuShow = !isMenuShow">
                    <Icon class="text-3xl" name="ic:round-menu"/>
                </button>
            </div>
        </div>
        <div @click="isMenuShow = false" class="w-full col-span-full inset-0 bg-black/70 fixed left-0 top-36 lg:hidden z-[3]" :class="{'hidden' : !isMenuShow}"></div>
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


    /* проверка входа */
    const { authenticated } = storeToRefs(useUserStore())
</script>