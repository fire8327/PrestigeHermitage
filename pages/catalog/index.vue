<template>
    <div class="flex flex-col gap-6">
        <p class="text-2xl font-semibold font-Nunito tracking-widest">Каталог недвижимости</p>
        <FormKit type="form" :actions="false" form-class="flex flex-col items-center gap-6">
            <div class="grid grid-cols-1 gap-4 md:grid-cols-3 xl:grid-cols-7">
                <div class="flex flex-col xl:col-span-2">
                    <p class="text-sm text-gray-400">Цена</p>
                    <div class="flex items-start gap-2">
                        <FormKit type="text" v-model="filters.minPrice" validation="number" messages-class="text-[#E9556D] font-semibold font-Nunito tracking-widest" name="От" outer-class="w-1/2" input-class="px-4 py-2 border border-[#12B1DE] rounded-xl focus:outline-none w-full" placeholder="От"/>
                        <FormKit type="text" v-model="filters.maxPrice" validation="number" messages-class="text-[#E9556D] font-semibold font-Nunito tracking-widest" name="До" outer-class="w-1/2" input-class="px-4 py-2 border border-[#12B1DE] rounded-xl focus:outline-none w-full" placeholder="До"/>
                    </div>
                </div>
                <div class="flex flex-col">
                    <p class="text-sm text-gray-400">Тип недвижимости</p>
                    <FormKit type="select" :options="inputTypes" v-model="filters.type" messages-class="text-[#E9556D] font-semibold font-Nunito tracking-widest" name="Тип недвжимости" outer-class="w-full" input-class="px-4 py-2 border border-[#12B1DE] rounded-xl focus:outline-none w-full" placeholder="Тип недвжимости"/>
                </div>
                <div class="flex flex-col">
                    <p class="text-sm text-gray-400">Комнатность</p>
                    <FormKit type="select" :options="inputRooms" v-model="filters.rooms" messages-class="text-[#E9556D] font-semibold font-Nunito tracking-widest" name="Комнатность" outer-class="w-full" input-class="px-4 py-2 border border-[#12B1DE] rounded-xl focus:outline-none w-full" placeholder="Комнатность"/>
                </div>
                <div class="flex flex-col">
                    <p class="text-sm text-gray-400">Тип сделки</p>
                    <FormKit type="select" :options="inputDealTypes" v-model="filters.dealType" messages-class="text-[#E9556D] font-semibold font-Nunito tracking-widest" name="Тип сделки" outer-class="w-full" input-class="px-4 py-2 border border-[#12B1DE] rounded-xl focus:outline-none w-full" placeholder="Тип сделки"/>
                </div>
                <div class="flex flex-col">
                    <p class="text-sm text-gray-400">Минимальная площадь</p>
                    <FormKit type="text" v-model="filters.square" validation="number" messages-class="text-[#E9556D] font-semibold font-Nunito tracking-widest" name="Мин. площадь" outer-class="w-full" input-class="px-4 py-2 border border-[#12B1DE] rounded-xl focus:outline-none w-full" placeholder="Мин. площадь"/>
                </div>
                <div class="flex flex-col">
                    <p class="text-sm text-gray-400">Этаж</p>
                    <FormKit type="text" v-model="filters.floorNumber" validation="number" messages-class="text-[#E9556D] font-semibold font-Nunito tracking-widest" name="Этаж" outer-class="w-full" input-class="px-4 py-2 border border-[#12B1DE] rounded-xl focus:outline-none w-full" placeholder="Этаж"/>
                </div>
            </div>
            <div class="flex items-center gap-2">
                <button type="button" @click="filterProducts" class="px-4 py-2 w-fit h-fit rounded-xl border border-[#12B1DE] text-white bg-[#12B1DE] transition-all duration-500 hover:bg-transparent hover:text-[#12B1DE]">Применить</button>
                <button type="button" @click="cancelFilters" class="px-4 py-2 w-fit h-fit rounded-xl border border-[#12B1DE] hover:text-white hover:bg-[#12B1DE] transition-all duration-500 bg-transparent text-[#12B1DE]">Отменить</button>                
            </div>
        </FormKit>
        <FlatCard v-for="flat in flats" v-bind="flat"></FlatCard>
    </div>
</template>

<script setup>
    /* название страницы */
    useSeoMeta({
        title: 'Каталог недвижимости',
        lang: 'ru'
    })


    /* подключение БД */
    const supabase = useSupabaseClient() 

    const { data, error } = await supabase
    .from('flats')
    .select('*, users (*)')   


    /* фильтрация */
    const flats = ref(data)
    const inputTypes = ref(["Все"])
    const inputRooms = ref(["Все"])
    const inputDealTypes = ref(["Все"])
    flats.value.forEach(el => {
        if(!inputTypes.value.includes(el.type)) {
            inputTypes.value.push(el.type)
        }
        if(!inputRooms.value.includes(el.rooms)) {
            inputRooms.value.push(el.rooms)
        }
        if(!inputDealTypes.value.includes(el.dealType)) {
            inputDealTypes.value.push(el.dealType)
        }
    }) 

    const filters = ref({
        minPrice: null,
        maxPrice: null,
        square: null,
        floorNumber: null,
        type: "Все",
        dealType: "Все",
        rooms: "Все"
    })

    const filterProducts = () => {
        flats.value = data
        const filter = flats.value.filter(el => {
            if ((filters.value.type != 'Все' && el.type != filters.value.type) ||
                (filters.value.dealType != 'Все' && el.dealType != filters.value.dealType) ||
                (filters.value.rooms != 'Все' && el.rooms != filters.value.rooms) ||
                (filters.value.square && el.totalArea < filters.value.square) ||
                (filters.value.floorNumber && el.floorNumber != filters.value.floorNumber) ||
                (filters.value.minPrice && el.price < filters.value.minPrice) ||
                (filters.value.maxPrice && el.price > filters.value.maxPrice)) {
                return false
            }
            return true
        })     
        flats.value = filter
    }  

    const cancelFilters = () => {
        flats.value = data
        filters.value.minPrice = null
        filters.value.maxPrice = null
        filters.value.square = null
        filters.value.floorNumber = null
        filters.value.type = "Все"
        filters.value.dealType = "Все"
        filters.value.rooms = "Все"
    }
</script>