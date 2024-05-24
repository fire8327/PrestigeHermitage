<template>
    <footer class="text-lg">
        <div class="flex flex-col gap-4 bg-white rounded-2xl p-4">
            <div class="flex max-lg:flex-col items-center lg:justify-between gap-6 container mx-auto">
                <NuxtLink to="/">
                    <img src="/images/header/logo.png" alt="" class="w-40">
                </NuxtLink>
                <div class="flex max-md:flex-col items-center gap-6">
                    <div class="flex flex-col">
                        <p class="text-gray-400 text-sm">Email</p>
                        <NuxtLink to="mailto:prestigeHermitage@mail.ru" class="font-Nunito font-semibold transition-all duration-500 hover:text-[#12B1DE]">prestigeHermitage@mail.ru</NuxtLink>
                    </div>
                    <div class="flex flex-col">
                        <p class="text-gray-400 text-sm">Телефон</p>
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
            </div>
            <p class="text-gray-400 text-center text-base">@ Prestige Hermitage, 2024</p>
        </div>
    </footer>
</template>

<script setup>

</script>