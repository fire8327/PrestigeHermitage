<template>
    <div class="flex flex-col gap-8">
        <div class="w-full h-px bg-gray-400"></div>
        <div class="flex gap-6 max-lg:flex-col">
            <div class="lg:w-1/3 flex flex-col gap-4">
                <p class="text-2xl font-semibold font-Nunito tracking-widest">Контакты</p>
                <div class="flex flex-col gap-2">
                    <p class="text-sm text-gray-400">Адрес</p>
                    <p class="font-Nunito font-semibold">улица Московский проспект, дом 29</p>
                </div>
                <div>
                    <p class="text-sm text-gray-400">Режим работы</p>
                    <p class="mt-2 font-Nunito font-semibold">Пн-Пт: с 9:00 до 21:00</p>
                    <p class="font-Nunito font-semibold">Cб-Вс: с 12:00 до 18:00</p>
                </div>
                <div class="flex flex-col gap-2">
                    <p class="text-sm text-gray-400">Email</p>
                    <NuxtLink to="mailto:prestigeHermitage@mail.ru" class="font-Nunito font-semibold transition-all duration-500 hover:text-[#12B1DE]">prestigeHermitage@mail.ru</NuxtLink>
                </div>
                <div class="flex flex-col gap-2">
                    <p class="text-sm text-gray-400">Телефон для связи</p>
                    <NuxtLink to="tel:8 911-976-05-22" class="font-Nunito font-semibold transition-all duration-500 hover:text-[#12B1DE]">8 911-976-05-22</NuxtLink>
                </div>
                <div class="flex items-center gap-2">
                    <NuxtLink to="https://vk.com/id325184698" target="_blank" class="transition-all duration-500 hover:text-[#12B1DE]">
                        <Icon class="text-3xl" name="mdi:vk"/>
                    </NuxtLink>
                    <NuxtLink to="https://t.me/SaechkaSchastlivaya" target="_blank" class="transition-all duration-500 hover:text-[#12B1DE]">
                        <Icon class="text-3xl" name="ic:baseline-telegram"/>
                    </NuxtLink>
                    <NuxtLink to="https://www.instagram.com/prestigehermitagespb?igsh=MXh3NDd1MndpcXJkMw%3D%3D&utm_source=qr" target="_blank" class="transition-all duration-500 hover:text-[#12B1DE]">
                        <Icon class="text-3xl" name="basil:instagram-outline"/>
                    </NuxtLink>
                </div>
            </div>
            <iframe class="w-full h-[400px] lg:w-2/3 lg:h-full rounded-xl border border-gray-200" src="https://yandex.ru/map-widget/v1/?um=constructor%3A01b5d493b8a272d4d278e0cbf38cd49c07fe929bbf2fe0b4f6cbacb690afca8d&amp;source=constructor" frameborder="0"></iframe>
        </div>
        <div class="w-full h-px bg-gray-400"></div>
    </div>
    <Feedback></Feedback>
</template>

<script setup>
    /* название страницы */
    useSeoMeta({
        title: 'Контакты',
        lang: 'ru'
    })
</script>