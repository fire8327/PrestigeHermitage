<template>
    <div class="flex flex-col gap-6">
        <p class="text-2xl font-semibold font-Nunito tracking-widest">Редактирование недвижимости</p>
        <NuxtLink to="/profile" class="flex items-center gap-2 text-[#12B1DE] transition-all duration-300 hover:opacity-50">
            <span class="font-semibold font-Nunito tracking-widest">Назад</span>
            <Icon class="text-3xl" name="ri:arrow-go-back-fill"/>
        </NuxtLink>
        <FormKit @submit="updFlat" type="form" :actions="false" messages-class="hidden" form-class="flex flex-col gap-4 items-center justify-center">
            <FormKit v-model="flat.address" type="text" validation="required" messages-class="text-[#E9556D] font-semibold font-Nunito tracking-widest" name="Адрес" outer-class="w-full md:w-2/3 lg:w-1/2" input-class="px-4 py-2 border border-[#12B1DE] rounded-xl focus:outline-none w-full" placeholder="Адрес"/>
            <div class="flex items-center lg:items-start gap-4 max-lg:flex-col md:w-2/3 lg:w-1/2">
                <FormKit v-model="flat.totalArea" type="text" validation="required|number" messages-class="text-[#E9556D] font-semibold font-Nunito tracking-widest" name="Общая площадь" outer-class="w-full lg:w-1/3" input-class="px-4 py-2 border border-[#12B1DE] rounded-xl focus:outline-none w-full" placeholder="Общая площадь"/>
                <FormKit v-model="flat.livingArea" type="text" validation="required|number" messages-class="text-[#E9556D] font-semibold font-Nunito tracking-widest" name="Жилая площадь" outer-class="w-full lg:w-1/3" input-class="px-4 py-2 border border-[#12B1DE] rounded-xl focus:outline-none w-full" placeholder="Жилая площадь"/>
                <FormKit v-model="flat.kitchenArea" type="text" validation="required|number" messages-class="text-[#E9556D] font-semibold font-Nunito tracking-widest" name="Площадь кухни" outer-class="w-full lg:w-1/3" input-class="px-4 py-2 border border-[#12B1DE] rounded-xl focus:outline-none w-full" placeholder="Площадь кухни"/>
            </div>
            <div class="flex items-center lg:items-start gap-4 max-lg:flex-col md:w-2/3 lg:w-1/2">
                <FormKit v-model="flat.floorNumber" type="text" validation="required|number" messages-class="text-[#E9556D] font-semibold font-Nunito tracking-widest" name="Этаж" outer-class="w-full lg:w-1/2" input-class="px-4 py-2 border border-[#12B1DE] rounded-xl focus:outline-none w-full" placeholder="Этаж"/>
                <FormKit v-model="flat.floorQuantity" type="text" validation="required|number" messages-class="text-[#E9556D] font-semibold font-Nunito tracking-widest" name="Этажей в доме" outer-class="w-full lg:w-1/2" input-class="px-4 py-2 border border-[#12B1DE] rounded-xl focus:outline-none w-full" placeholder="Этажей в доме"/>
            </div>
            <FormKit v-model="flat.price" type="text" validation="required|number" messages-class="text-[#E9556D] font-semibold font-Nunito tracking-widest" name="Аренда" outer-class="w-full md:w-2/3 lg:w-1/2" input-class="px-4 py-2 border border-[#12B1DE] rounded-xl focus:outline-none w-full" placeholder="Аренда (₽/мес.)"/>
            <FormKit v-model="flat.desc" type="textarea" validation="required" messages-class="text-[#E9556D] font-semibold font-Nunito tracking-widest" name="Описание" outer-class="w-full md:w-2/3 lg:w-1/2" input-class="px-4 py-2 border border-[#12B1DE] rounded-xl focus:outline-none w-full" placeholder="Описание"/>
            <FormKit v-model="flat.type" type="select" :options="['Квартира', 'Дом/Дача' , 'Коттедж', 'Таунхаус']" validation="required" messages-class="text-[#E9556D] font-semibold font-Nunito tracking-widest" name="Тип объекта" outer-class="w-full md:w-2/3 lg:w-1/2" input-class="px-4 py-2 border border-[#12B1DE] rounded-xl focus:outline-none w-full" placeholder="Тип объекта"/>
            <FormKit v-model="flat.dealType" type="select" :options="['Продажа', 'Аренда']" validation="required" messages-class="text-[#E9556D] font-semibold font-Nunito tracking-widest" name="Тип сделки" outer-class="w-full md:w-2/3 lg:w-1/2" input-class="px-4 py-2 border border-[#12B1DE] rounded-xl focus:outline-none w-full" placeholder="Тип сделки"/>
            <FormKit v-model="flat.rooms" type="radio" :options="['1' , '2', '3', '4', '5', '6+']" validation="required" inner-class="hidden" options-class="flex items-center gap-4 flex-wrap mt-4" wrapper-class="block px-4 py-2 border border-[#12B1DE] rounded-xl transition-all duration-500 has-[:checked]:bg-[#12B1DE] has-[:checked]:text-white cursor-pointer" messages-class="text-[#E9556D] font-semibold font-Nunito tracking-widest" name="Количество комнат" outer-class="w-full md:w-2/3 lg:w-1/2" label="Количество комнат"/>
            <FormKit v-if="flat.dealType == 'Аренда'" v-model="flat.HCS" type="select" :options="['Включена', 'Отдельно']" validation="required" messages-class="text-[#E9556D] font-semibold font-Nunito tracking-widest" name="Оплата ЖКХ" outer-class="w-full md:w-2/3 lg:w-1/2" input-class="px-4 py-2 border border-[#12B1DE] rounded-xl focus:outline-none w-full" placeholder="Оплата ЖКХ"/>
            <div v-if="flat.dealType == 'Аренда'" class="flex items-center lg:items-start gap-4 max-lg:flex-col md:w-2/3 lg:w-1/2">
                <FormKit v-model="flat.prepayment" type="select" :options="['1 месяц', '2 месяца', '3 месяца', '4 месяца', '5 месяцев']" validation="required" messages-class="text-[#E9556D] font-semibold font-Nunito tracking-widest" name="Предоплата" outer-class="w-full md:w-2/3 lg:w-1/2" input-class="px-4 py-2 border border-[#12B1DE] rounded-xl focus:outline-none w-full" placeholder="Предоплата"/>
                <FormKit v-model="flat.rentalPeriod" type="select" :options="['Несколько месяцев', 'От года', 'Более года']" validation="required" messages-class="text-[#E9556D] font-semibold font-Nunito tracking-widest" name="Срок аренды" outer-class="w-full md:w-2/3 lg:w-1/2" input-class="px-4 py-2 border border-[#12B1DE] rounded-xl focus:outline-none w-full" placeholder="Срок аренды"/>
            </div>
            <button type="submit" class="w-[160px] text-center py-0.5 px-4 rounded-full bg-[#12B1DE] border border-[#12B1DE] text-white transition-all duration-500 hover:text-[#12B1DE] hover:bg-transparent">Обновить</button>
        </FormKit>
    </div>
</template>

<script setup>
    /* название страницы */
    useSeoMeta({
        title: 'Редактирование недвижимости',
        lang: 'ru'
    })


    /* подключение БД */
    const supabase = useSupabaseClient() 
    const { id } = useRoute().params

    const { data:flats, error } = await supabase
    .from('flats')
    .select('*')   
    .eq('id', id)  


    /* создание сообщений и роутера */
    const { showMessage } = useMessagesStore()
    const router = useRouter()


    /* форма квартиры */
    const flat = ref({
        address: flats[0].address,
        totalArea: flats[0].totalArea,
        livingArea: flats[0].livingArea,
        kitchenArea: flats[0].kitchenArea,
        floorNumber: flats[0].floorNumber,
        floorQuantity: flats[0].floorQuantity,
        price: flats[0].price,
        desc: flats[0].desc,
        type: flats[0].type,
        rooms: flats[0].rooms,
        HCS: flats[0].HCS,
        prepayment: flats[0].prepayment,
        rentalPeriod: flats[0].rentalPeriod,
        dealType: flats[0].dealType
    }) 


    /* обновление */
    const updFlat = async () => {
        if(flat.value.dealType != 'Аренда') {
            flat.value.HCS = ""
            flat.value.prepayment = ""
            flat.value.rentalPeriod = ""
        }

        const { data: flats, error:flatsError } = await supabase
        .from('flats')
        .update(flat.value)
        .eq('id', id)

        if(flatsError) {
            console.log(error)
            showMessage("Произошла ошибка!", false)   
        } else {            
            showMessage("Данные обновлены!", true) 
            router.push("/profile")
        }
    }
</script>