<template>
    <div class="flex flex-col gap-6">
        <div class="relative">
            <NuxtLink :to="`/catalog/flat-${props.id}`" class="grid grid-cols-5 gap-6 p-4 rounded-xl transition-all duration-500 hover:bg-white hover:shadow-[0px_0px_13px_-7px_black] w-full">
                <img :src="`https://odsofactmcvehjzaoqqk.supabase.co/storage/v1/object/public/flats/${props.images[0]}`" alt="" class="col-span-5 xl:col-span-2 rounded-xl w-full aspect-video object-cover">
                <div class="flex flex-col gap-4 col-span-5 md:col-span-3 xl:col-span-2">
                    <p class="text-xl font-semibold font-Nunito tracking-widest">{{ props.type }}, {{ props.rooms }}-комн., {{ props.totalArea }} м², {{ props.floorNumber }}/{{ props.floorQuantity }} этаж</p>
                    <p class="text-gray-500 text-sm">{{ props.address }}</p>
                    <p class="text-2xl">{{ props.price.toLocaleString() }} <span v-html="props.dealType == 'Аренда' ? '₽/мес.' : '₽'"></span></p>
                    <div class="flex flex-col gap-2 w-full text-base" v-if="props.dealType == 'Аренда'">
                        <div class="flex items-center gap-2">
                            <p>Оплата ЖКХ</p>
                            <div class="border-b border-dotted border-gray-400 grow h-px"></div>
                            <p>{{ props.HCS }}</p>
                        </div>
                        <div class="flex items-center gap-2">
                            <p>Залог</p>
                            <div class="border-b border-dotted border-gray-400 grow h-px"></div>
                            <p>{{ Math.round(props.price/5).toLocaleString() }} ₽</p>
                        </div>
                        <div class="flex items-center gap-2">
                            <p>Предоплата</p>
                            <div class="border-b border-dotted border-gray-400 grow h-px"></div>
                            <p>{{ props.prepayment }}</p>
                        </div>
                        <div class="flex items-center gap-2">
                            <p>Срок аренды</p>
                            <div class="border-b border-dotted border-gray-400 grow h-px"></div>
                            <p>{{ props.rentalPeriod }}</p>
                        </div>
                    </div>
                    <p class="text-sm mt-auto">{{ props.desc }}</p>
                </div>
                <div class="flex flex-col gap-4 col-span-5 md:col-span-2 xl:col-span-1 md:ml-6">               
                    <img v-if="props.users.avatar" :src="`https://odsofactmcvehjzaoqqk.supabase.co/storage/v1/object/public/users/${props.users.avatar}`" alt="" class="rounded-full w-16 h-16">
                    <div v-else class="p-4 rounded-full bg-gray-200 flex items-center justify-center border border-gray-400 text-[#12B1DE] w-fit">
                        <Icon class="text-3xl" name="material-symbols:person"/>
                    </div>
                    <div class="flex flex-col">
                        <p class="text-xs text-gray-400">СОБСТВЕННИК</p>
                        <p class="text-xl">ID {{ props.users.id }}</p>
                    </div>                    
                </div>
            </NuxtLink>
            <div class="flex items-center gap-2 self-end absolute z-[2] top-8 right-8 xl:right-4 xl:top-4">
                <button v-if="authenticated" @click="toggleFavourite()" class="p-2 flex items-center justify-center rounded-full bg-gray-200 transition-all duration-500" :class="checkFavourite ? 'text-red-500' : 'text-gray-600'">
                    <Icon class="text-2xl" name="material-symbols:favorite-outline"/>
                </button>
                <button @click="copyUrl(`/catalog/flat-${props.id}`)" class="p-2 flex items-center justify-center rounded-full bg-gray-200 text-[#12B1DE]">
                    <Icon class="text-2xl" name="material-symbols:share"/>
                </button>
            </div>
        </div>
        <div class="w-full h-px bg-gray-300"></div>
    </div>
</template>

<script setup>
    /* пропсы */
    const props = defineProps({
        id: Number,
        rooms: String,
        address: String,
        totalArea: String,
        floorNumber: Number,
        floorQuantity: Number,
        HCS: String,
        price: Number,
        prepayment: String,
        rentalPeriod: String,
        desc: String,
        dealType: String,
        type: String,
        images: Array,
        users: Object
    })


    /* проверка входа */
    const { authenticated } = storeToRefs(useUserStore())


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
    const supabase = useSupabaseClient() 
    const { data: favourites, error } = await supabase
    .from('favourites')
    .select('*')
    .eq('flatId', props.id)
    .eq('userId', props.users.id)

    const checkFavourite = ref(false)

    if (favourites && favourites.length>0) {
        checkFavourite.value = true
    }

    const toggleFavourite = async () => {
        if (checkFavourite.value) {
            const { error } = await supabase
            .from('favourites')
            .delete()
            .eq('flatId', props.id)
            .eq('userId', props.users.id)

            if(error) {
                console.log(error)
                showMessage("Произошла ошибка!", false)   
            } else {            
                showMessage("Удалено из избранного!", true)   
                checkFavourite.value = false
            }
        } else {
            const { error } = await supabase
            .from('favourites')
            .insert({ userId: props.users.id, flatId: props.id })

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