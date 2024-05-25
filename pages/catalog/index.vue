<template>
    <div class="flex flex-col gap-6">
        <p class="text-2xl font-semibold font-Nunito tracking-widest">Каталог недвижимости</p>
        <div class="flex max-lg:flex-col items-center lg:items-end lg:justify-between gap-6">
            <div class="flex gap-4 max-lg:flex-col max-lg:w-full">
                <div class="flex flex-col lg:w-2/5">
                    <p class="text-sm text-gray-400">Цена</p>
                    <div class="flex items-center gap-2">
                        <input v-model="filters.minPrice" placeholder="От" type="text" class="px-4 py-2 border border-[#12B1DE] rounded-xl focus:outline-none w-1/2">
                        <input v-model="filters.maxPrice" placeholder="До" type="text" class="px-4 py-2 border border-[#12B1DE] rounded-xl focus:outline-none w-1/2">
                    </div>
                </div>
                <div class="flex flex-col lg:w-1/5">
                    <p class="text-sm text-gray-400">Тип недвижимости</p>
                    <select v-model="filters.type" class="px-4 py-2 border border-[#12B1DE] rounded-xl focus:outline-none">
                        <option :value="type" v-for="type in inputTypes">{{ type }}</option>
                    </select>
                </div>
                <div class="flex flex-col lg:w-1/5">
                    <p class="text-sm text-gray-400">Комнатность</p>
                    <select v-model="filters.rooms" class="px-4 py-2 border border-[#12B1DE] rounded-xl focus:outline-none">
                        <option :value="rooms" v-for="rooms in inputRooms">{{ rooms }}</option>
                    </select>
                </div>
                <div class="flex flex-col lg:w-1/5">
                    <p class="text-sm text-gray-400">Тип сделки</p>
                    <select v-model="filters.dealType" class="px-4 py-2 border border-[#12B1DE] rounded-xl focus:outline-none">
                        <option :value="dealType" v-for="dealType in inputDealTypes">{{ dealType }}</option>
                    </select>
                </div>
            </div>
            <div class="flex items-center gap-2">
                <button @click="filterProducts" class="px-4 py-2 w-fit h-fit rounded-xl border border-[#12B1DE] text-white bg-[#12B1DE] transition-all duration-500 hover:bg-transparent hover:text-[#12B1DE]">Применить</button>
                <button @click="cancelFilters" class="px-4 py-2 w-fit h-fit rounded-xl border border-[#12B1DE] hover:text-white hover:bg-[#12B1DE] transition-all duration-500 bg-transparent text-[#12B1DE]">Отменить</button>                
            </div>
        </div>
        <FlatCard v-for="flat in flats" v-bind="flat"></FlatCard>
    </div>
</template>

<script setup>
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
        filters.value.type = "Все"
        filters.value.dealType = "Все"
        filters.value.rooms = "Все"
    }
</script>