<template>
    <div class="flex flex-col gap-6">
        <div class="relative">
            <NuxtLink to="/" class="grid grid-cols-5 gap-6 p-4 rounded-xl transition-all duration-500 hover:bg-white hover:shadow-[0px_0px_13px_-7px_black] w-full">
                <img src="https://images.cdn-cian.ru/images/kvartira-cheboksary-molodezhnyy-pereulok-2173105432-4.jpg" alt="" class="col-span-5 xl:col-span-2 rounded-xl w-full">
                <div class="flex flex-col gap-4 col-span-5 md:col-span-3 xl:col-span-2">
                    <p class="text-xl font-semibold font-Nunito tracking-widest">1-комн. квартира, 31 м², 4/5 этаж</p>
                    <p class="text-gray-500 text-sm">Чувашская респ., Чебоксары, р-н Калининский, мкр. Лумумбы, Молодежный пер., 7 (ссылка?)</p>
                    <p class="text-2xl">25 000 ₽/мес.</p>
                    <div class="flex flex-col gap-2 w-full text-base">
                        <div class="flex items-center gap-2">
                            <p>Оплата ЖКХ</p>
                            <div class="border-b border-dotted border-gray-400 grow h-px"></div>
                            <p>Включена</p>
                        </div>
                        <div class="flex items-center gap-2">
                            <p>Залог</p>
                            <div class="border-b border-dotted border-gray-400 grow h-px"></div>
                            <p>5 000 ₽</p>
                        </div>
                        <div class="flex items-center gap-2">
                            <p>Предоплата</p>
                            <div class="border-b border-dotted border-gray-400 grow h-px"></div>
                            <p>2 месяца</p>
                        </div>
                        <div class="flex items-center gap-2">
                            <p>Срок аренды</p>
                            <div class="border-b border-dotted border-gray-400 grow h-px"></div>
                            <p>несколько месяцев</p>
                        </div>
                    </div>
                    <p class="text-sm mt-auto">Уютная чистая квартира в центре города со всем необходимым для комфортного проживания. Рядом Мега Молл, стадион, детский сад, магазины, остановки общественного транспорта.</p>
                </div>
                <div class="flex flex-col gap-4 col-span-5 md:col-span-2 xl:col-span-1 md:ml-6">               
                    <!-- <img src="" alt=""> -->
                    <div class="p-4 rounded-full bg-gray-200 flex items-center justify-center border border-gray-400 text-[#12B1DE] w-fit">
                        <Icon class="text-3xl" name="material-symbols:person"/>
                    </div>
                    <div class="flex flex-col gap-2">
                        <p class="text-xs text-gray-400">СОБСТВЕННИК</p>
                        <p class="text-xl">ID 97615939</p>
                    </div>
                    <button @click="isPhoneShow = true" v-if="!isPhoneShow" class="w-full py-2 rounded-xl font-semibold text-lg text-white bg-[#12B1DE]">Показать телефон</button>
                    <div v-else class="flex flex-col gap-2">
                        <NuxtLink class="text-base">+7 906 135-70-36</NuxtLink>
                        <p class="text-sm text-gray-400">
                            Не вносите предоплату
                            до просмотра объекта
                            и заключения договора!
                        </p>
                    </div>
                </div>
            </NuxtLink>
            <div class="flex items-center gap-2 self-end text-[#12B1DE] absolute z-[2] top-8 right-8 xl:right-4 xl:top-4">
                <button class="p-2 flex items-center justify-center rounded-full bg-gray-200">
                    <Icon class="text-2xl" name="material-symbols:favorite-outline"/>
                </button>
                <button class="p-2 flex items-center justify-center rounded-full bg-gray-200">
                    <Icon class="text-2xl" name="material-symbols:share"/>
                </button>
            </div>
        </div>
        <div class="w-full h-px bg-gray-300"></div>
    </div>
</template>

<script setup>
    /* показ номера телефона */
    const isPhoneShow = ref(false)
</script>