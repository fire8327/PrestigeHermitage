<template>
    <div class="flex max-lg:flex-col gap-6">
        <div class="flex flex-col gap-6 lg:w-2/3">
            <NuxtLink to="/catalog" class="flex items-center gap-2 text-[#12B1DE] transition-all duration-300 hover:opacity-50">
                <span class="font-semibold font-Nunito tracking-widest">Назад</span>
                <Icon class="text-3xl" name="ri:arrow-go-back-fill"/>
            </NuxtLink>
            <p class="text-2xl font-semibold font-Nunito tracking-widest">Сдаётся {{ flats[0].rooms }}-комн. квартира, {{ flats[0].totalArea }}м²</p>
            <p class="text-sm text-gray-400">{{ flats[0].address }}</p>
            <Swiper :space-between="20" :loop="true" :modules="[SwiperAutoplay, SwiperPagination]" :autoplay="{delay: 3500}" :pagination="{clickable: true}" :slidesPerView="1" class="w-full">
                <SwiperSlide class="w-full" v-for="image in flats[0].images">
                    <img :src="`https://odsofactmcvehjzaoqqk.supabase.co/storage/v1/object/public/flats/${image}`" alt="" class="w-full rounded-xl aspect-video object-cover">
                </SwiperSlide> 
            </Swiper>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6 text-[#12B1DE]">
                <div class="flex items-center gap-4">
                    <img src="/images/flats/1.svg" alt="">
                    <div class="flex flex-col">
                        <p class="text-sm text-gray-400">Общая площадь</p>
                        <p class="font-semibold font-Nunito tracking-widest">{{ flats[0].totalArea }} м²</p>
                    </div>
                </div>
                <div class="flex items-center gap-4">
                    <img src="/images/flats/2.svg" alt="">
                    <div class="flex flex-col">
                        <p class="text-sm text-gray-400">Жилая площадь</p>
                        <p class="font-semibold font-Nunito tracking-widest">{{ flats[0].livingArea }} м²</p>
                    </div>
                </div>
                <div class="flex items-center gap-4">
                    <img src="/images/flats/3.svg" alt="">
                    <div class="flex flex-col">
                        <p class="text-sm text-gray-400">Площадь кухни</p>
                        <p class="font-semibold font-Nunito tracking-widest">{{ flats[0].kitchenArea }} м²</p>
                    </div>
                </div>
                <div class="flex items-center gap-4">
                    <img src="/images/flats/4.svg" alt="">
                    <div class="flex flex-col">
                        <p class="text-sm text-gray-400">Этаж</p>
                        <p class="font-semibold font-Nunito tracking-widest">{{ flats[0].floorNumber }} из {{ flats[0].floorQuantity }}</p>
                    </div>
                </div>
            </div>
            <p>{{ flats[0].desc }}</p>
        </div>
        <div class="flex flex-col gap-8 lg:w-1/3">
            <div class="flex items-center gap-2 self-end">
                <button @click="toggleFavourite()" class="p-2 flex items-center justify-center rounded-full bg-gray-200 transition-all duration-500" :class="checkFavourite ? 'text-red-500' : 'text-gray-600'">
                    <Icon class="text-2xl" name="material-symbols:favorite-outline"/>
                </button>
                <button @click="copyUrl(`/catalog/flat-${flats[0].id}`)" class="p-2 flex items-center justify-center rounded-full bg-gray-200 text-[#12B1DE]">
                    <Icon class="text-2xl" name="material-symbols:share"/>
                </button>
            </div>
            <div class="flex flex-col w-full gap-6 rounded-xl bg-white shadow-[0px_0px_13px_-7px_black] p-4">
                <p class="text-2xl font-semibold font-Nunito tracking-widest">{{ flats[0].price.toLocaleString() }} ₽/мес.</p>
                <div class="flex flex-col gap-2 w-full text-base">
                    <div class="flex items-center gap-2">
                        <p>Оплата ЖКХ</p>
                        <div class="border-b border-dotted border-gray-400 grow h-px"></div>
                        <p>{{ flats[0].HCS }}</p>
                    </div>
                    <div class="flex items-center gap-2">
                        <p>Залог</p>
                        <div class="border-b border-dotted border-gray-400 grow h-px"></div>
                        <p>{{ Math.round(flats[0].price/5).toLocaleString() }} ₽</p>
                    </div>
                    <div class="flex items-center gap-2">
                        <p>Предоплата</p>
                        <div class="border-b border-dotted border-gray-400 grow h-px"></div>
                        <p>{{ flats[0].prepayment }}</p>
                    </div>
                    <div class="flex items-center gap-2">
                        <p>Срок аренды</p>
                        <div class="border-b border-dotted border-gray-400 grow h-px"></div>
                        <p>{{ flats[0].rentalPeriod }}</p>
                    </div>
                </div>
                <button type="button" @click="isPhoneShow = true" v-if="!isPhoneShow" class="w-full py-2 rounded-xl font-semibold text-lg text-white bg-[#12B1DE]">Показать телефон</button>
                <div v-else class="flex flex-col gap-2">
                    <NuxtLink :to="`tel:flats[0].users.phone`" class="text-base">{{ flats[0].users.phone }}</NuxtLink>
                    <p class="text-sm text-gray-400">
                        Не вносите предоплату
                        до просмотра объекта
                        и заключения договора!
                    </p>
                </div>
            </div>
            <div class="flex items-center gap-4 rounded-xl bg-white shadow-[0px_0px_13px_-7px_black] p-4">
                <img v-if="flats[0].users.avatar" :src="`https://odsofactmcvehjzaoqqk.supabase.co/storage/v1/object/public/users/${flats[0].users.avatar}`" alt="" class="rounded-full w-16 h-16">
                <div v-else class="p-4 rounded-full bg-gray-200 flex items-center justify-center border border-gray-400 text-[#12B1DE] w-fit">
                    <Icon class="text-3xl" name="material-symbols:person"/>
                </div>
                <div class="flex flex-col">
                    <p class="text-xs text-gray-400">СОБСТВЕННИК</p>
                    <p class="text-xl">ID {{ flats[0].users.id }}</p>
                </div> 
            </div>
        </div>
    </div>
</template>

<script setup>
    /* подключение БД и роут */
    const supabase = useSupabaseClient() 
    const { id } = useRoute().params

    const { data:flats, error:flatsError } = await supabase
    .from('flats')
    .select('*, users (*)')   
    .eq('id', id)


    /* показ номера телефона */
    const isPhoneShow = ref(false)


    /* создание сообщений */
    const { showMessage } = useMessagesStore()


    /* получение адреса и его копирование */
    const fullUrl = computed(() => {
        const { protocol, host } = window.location
        return `${protocol}//${host}`
    })

    const copyUrl = async (link) => {
        await navigator.clipboard.writeText(`${fullUrl.value}${link}`)
        return showMessage("Скопировано!", true)
    }


    /* добавление в избранное */
    const { data: favourites, error } = await supabase
    .from('favourites')
    .select('*')
    .eq('flatId', flats[0].id)
    .eq('userId', flats[0].users.id)

    const checkFavourite = ref(false)

    if (favourites && favourites.length>0) {
        checkFavourite.value = true
    }

    const toggleFavourite = async () => {
        if (checkFavourite.value) {
            const { error } = await supabase
            .from('favourites')
            .delete()
            .eq('flatId', flats[0].id)
            .eq('userId', flats[0].users.id)

            if(error) {
                console.log(error)
                showMessage("Произошла ошибка!", false)   
            } else {            
                showMessage("Удаленно из избранного!", true)   
                checkFavourite.value = false
            }
        } else {
            const { error } = await supabase
            .from('favourites')
            .insert({ userId: flats[0].users.id, flatId: flats[0].id })

            if(error) {
                console.log(error)
                showMessage("Произошла ошибка!", false)   
            } else {            
                showMessage("Добавлено в избранное!", true)  
                checkFavourite.value = true 
            }
        }
    }
</script>