<template>
    <div class="flex flex-col gap-6">
        <p class="text-2xl font-semibold font-Nunito tracking-widest">Личные данные</p>
        <FormKit @submit="updateUser" type="form" :actions="false" messages-class="hidden" form-class="flex flex-col gap-4 items-center justify-center">
            <div class="flex items-center lg:items-start gap-4 max-lg:flex-col md:w-2/3 lg:w-1/2">
                <FormKit type="text" v-model="user.surname" validation="required" messages-class="text-[#E9556D] font-semibold font-Nunito tracking-widest" name="Фамилия" outer-class="w-full lg:w-1/3" input-class="px-4 py-2 border border-[#12B1DE] rounded-xl focus:outline-none w-full" placeholder="Фамилия"/>
                <FormKit type="text" v-model="user.name" validation="required" messages-class="text-[#E9556D] font-semibold font-Nunito tracking-widest" name="Имя" outer-class="w-full lg:w-1/3" input-class="px-4 py-2 border border-[#12B1DE] rounded-xl focus:outline-none w-full" placeholder="Имя"/>
                <FormKit type="text" v-model="user.patronymic" validation="required" messages-class="text-[#E9556D] font-semibold font-Nunito tracking-widest" name="Отчество" outer-class="w-full lg:w-1/3" input-class="px-4 py-2 border border-[#12B1DE] rounded-xl focus:outline-none w-full" placeholder="Отчество"/>
            </div>
            <div class="flex items-center lg:items-start gap-4 max-lg:flex-col md:w-2/3 lg:w-1/2">
                <FormKit type="text" v-model="user.login" validation="required" messages-class="text-[#E9556D] font-semibold font-Nunito tracking-widest" name="Логин" outer-class="w-full lg:w-1/2" input-class="px-4 py-2 border border-[#12B1DE] rounded-xl focus:outline-none w-full" placeholder="Логин"/>
                <FormKit type="password" v-model="user.password" validation="required|length:6" messages-class="text-[#E9556D] font-semibold font-Nunito tracking-widest" name="Пароль" outer-class="w-full lg:w-1/2" input-class="px-4 py-2 border border-[#12B1DE] rounded-xl focus:outline-none w-full" placeholder="••••••"/>
            </div>
            <div class="relative rounded-xl border border-[#12B1DE] overflow-hidden w-full md:w-2/3 lg:w-1/2 group">
                <img :src="isAvatar ? formAvatar : '/images/profile/main.png'" alt="" :class="isAvatar ? 'w-full transition-all duration-500 group-hover:scale-125' : 'mx-auto p-4'">
                <label class="cursor-pointer absolute inset-0 bg-black/30 opacity-0 transition-all duration-500 group-hover:opacity-100 flex items-center justify-center">
                    <Icon class="text-3xl text-white" name="material-symbols:edit-rounded"/>
                    <FormKit @change="loadImage" type="file" accept=".png,.jpg,.jpeg,.svg,.webp,.bmp" outer-class="hidden"/>
                </label>
            </div>
            <button type="submit" class="w-[160px] text-center py-0.5 px-4 rounded-full bg-[#12B1DE] border border-[#12B1DE] text-white transition-all duration-500 hover:text-[#12B1DE] hover:bg-transparent">Обновить</button>
        </FormKit>
    </div>
    <div class="flex flex-col gap-6">
        <p class="text-2xl font-semibold font-Nunito tracking-widest">Добавление недвижимости</p>
        <FormKit @submit="addFlat" type="form" :actions="false" messages-class="hidden" form-class="flex flex-col gap-4 items-center justify-center">
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
            <FormKit v-model="flat.price" type="text" validation="required|number" messages-class="text-[#E9556D] font-semibold font-Nunito tracking-widest" name="Стоимость/Аренда" outer-class="w-full md:w-2/3 lg:w-1/2" input-class="px-4 py-2 border border-[#12B1DE] rounded-xl focus:outline-none w-full" placeholder="Стоимость/Аренда"/>
            <FormKit v-model="flat.desc" type="textarea" messages-class="text-[#E9556D] font-semibold font-Nunito tracking-widest" name="Описание" outer-class="w-full md:w-2/3 lg:w-1/2" input-class="px-4 py-2 border border-[#12B1DE] rounded-xl focus:outline-none w-full" placeholder="Описание"/>
            <FormKit v-model="flat.type" type="select" :options="['Квартира', 'Дом/Дача' , 'Коттедж', 'Таунхаус']" validation="required" messages-class="text-[#E9556D] font-semibold font-Nunito tracking-widest" name="Тип объекта" outer-class="w-full md:w-2/3 lg:w-1/2" input-class="px-4 py-2 border border-[#12B1DE] rounded-xl focus:outline-none w-full" placeholder="Тип объекта"/>
            <FormKit v-model="flat.dealType" type="select" :options="['Продажа', 'Аренда']" validation="required" messages-class="text-[#E9556D] font-semibold font-Nunito tracking-widest" name="Тип сделки" outer-class="w-full md:w-2/3 lg:w-1/2" input-class="px-4 py-2 border border-[#12B1DE] rounded-xl focus:outline-none w-full" placeholder="Тип сделки"/>
            <FormKit v-model="flat.rooms" type="radio" :options="['1' , '2', '3', '4', '5', '6+']" validation="required" inner-class="hidden" options-class="flex items-center gap-4 flex-wrap mt-4" wrapper-class="block px-4 py-2 border border-[#12B1DE] rounded-xl transition-all duration-500 has-[:checked]:bg-[#12B1DE] has-[:checked]:text-white cursor-pointer" messages-class="text-[#E9556D] font-semibold font-Nunito tracking-widest" name="Количество комнат" outer-class="w-full md:w-2/3 lg:w-1/2" label="Количество комнат"/>
            <FormKit v-if="flat.dealType == 'Аренда'" v-model="flat.HCS" type="select" :options="['Включена', 'Отдельно']" validation="required" messages-class="text-[#E9556D] font-semibold font-Nunito tracking-widest" name="Оплата ЖКХ" outer-class="w-full md:w-2/3 lg:w-1/2" input-class="px-4 py-2 border border-[#12B1DE] rounded-xl focus:outline-none w-full" placeholder="Оплата ЖКХ"/>
            <div v-if="flat.dealType == 'Аренда'" class="flex items-center lg:items-start gap-4 max-lg:flex-col md:w-2/3 lg:w-1/2">
                <FormKit v-model="flat.prepayment" type="select" :options="['1 месяц', '2 месяца', '3 месяца', '4 месяца', '5 месяцев']" validation="required" messages-class="text-[#E9556D] font-semibold font-Nunito tracking-widest" name="Предоплата" outer-class="w-full md:w-2/3 lg:w-1/2" input-class="px-4 py-2 border border-[#12B1DE] rounded-xl focus:outline-none w-full" placeholder="Предоплата"/>
                <FormKit v-model="flat.rentalPeriod" type="select" :options="['Несколько месяцев', 'От года', 'Более года']" validation="required" messages-class="text-[#E9556D] font-semibold font-Nunito tracking-widest" name="Срок аренды" outer-class="w-full md:w-2/3 lg:w-1/2" input-class="px-4 py-2 border border-[#12B1DE] rounded-xl focus:outline-none w-full" placeholder="Срок аренды"/>
            </div>
            <FormKit @change="uploadFlatImages" type="file" multiple="true" accept=".png,.jpg,.jpeg,.svg,.webp,.bmp" validation="required" messages-class="text-[#E9556D] font-semibold font-Nunito tracking-widest" name="Фото" outer-class="w-full md:w-2/3 lg:w-1/2" input-class="px-4 py-2 border border-[#12B1DE] rounded-xl focus:outline-none w-full" placeholder="Фото"/>
            <button type="submit" class="w-[160px] text-center py-0.5 px-4 rounded-full bg-[#12B1DE] border border-[#12B1DE] text-white transition-all duration-500 hover:text-[#12B1DE] hover:bg-transparent">Добавить</button>
        </FormKit>
    </div>
    <div class="flex flex-col gap-6" v-if="flatsArray && flatsArray.length>0">
        <p class="text-2xl font-semibold font-Nunito tracking-widest">Управление недвижимостью</p>
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            <div class="flex flex-col gap-4 p-4 border border-[#12B1DE] rounded-xl" v-for="flat in flatsArray">
                <div class="flex items-center gap-4 self-end">
                    <NuxtLink :to="`/profile/edit-${flat.id}`">
                        <Icon class="text-3xl text-amber-500" name="material-symbols:edit-outline"/>
                    </NuxtLink>
                    <button @click="deleteFlat(flat.id, flatsArray.indexOf(flat))">
                        <Icon class="text-3xl text-red-500" name="material-symbols:delete-rounded"/>
                    </button>
                </div>
                <p class="text-xl font-semibold font-Nunito tracking-widest">{{ flat.type }}, {{ flat.rooms }}-комн., {{ flat.totalArea }} м², {{ flat.floorNumber }}/{{ flat.floorQuantity }} этаж</p>
                <p class="text-gray-400">ID {{ flat.id }}</p>
                <img :src="`https://odsofactmcvehjzaoqqk.supabase.co/storage/v1/object/public/flats/${flat.images[0]}`" alt="" class="rounded-xl aspect-video object-cover">
            </div>
        </div>
    </div>
    <div class="flex flex-col gap-6" v-if="favouritesFlats && favouritesFlats.length>0">
        <p class="text-2xl font-semibold font-Nunito tracking-widest">Избранная недвижимость</p>
        <div class="flex flex-col gap-6" v-for="flat in favouritesFlats">
            <div class="relative">
                <NuxtLink :to="`/catalog/flat-${flat.flats.id}`" class="grid grid-cols-5 gap-6 p-4 rounded-xl transition-all duration-500 hover:bg-white hover:shadow-[0px_0px_13px_-7px_black] w-full">
                    <img :src="`https://odsofactmcvehjzaoqqk.supabase.co/storage/v1/object/public/flats/${flat.flats.images[0]}`" alt="" class="col-span-5 xl:col-span-2 rounded-xl w-full aspect-video object-cover">
                    <div class="flex flex-col gap-4 col-span-5 md:col-span-3 xl:col-span-2">
                        <p class="text-xl font-semibold font-Nunito tracking-widest">{{ flat.flats.type }}, {{ flat.flats.rooms }}-комн., {{ flat.flats.totalArea }} м², {{ flat.flats.floorNumber }}/{{ flat.flats.floorQuantity }} этаж</p>
                        <p class="text-gray-500 text-sm">{{ flat.flats.address }}</p>
                        <p class="text-2xl">{{ flat.flats.price.toLocaleString() }} ₽/мес.</p>
                        <div class="flex flex-col gap-2 w-full text-base">
                            <div class="flex items-center gap-2">
                                <p>Оплата ЖКХ</p>
                                <div class="border-b border-dotted border-gray-400 grow h-px"></div>
                                <p>{{ flat.flats.HCS }}</p>
                            </div>
                            <div class="flex items-center gap-2">
                                <p>Залог</p>
                                <div class="border-b border-dotted border-gray-400 grow h-px"></div>
                                <p>{{ Math.round(flat.flats.price/5).toLocaleString() }} ₽</p>
                            </div>
                            <div class="flex items-center gap-2">
                                <p>Предоплата</p>
                                <div class="border-b border-dotted border-gray-400 grow h-px"></div>
                                <p>{{ flat.flats.prepayment }}</p>
                            </div>
                            <div class="flex items-center gap-2">
                                <p>Срок аренды</p>
                                <div class="border-b border-dotted border-gray-400 grow h-px"></div>
                                <p>{{ flat.flats.rentalPeriod }}</p>
                            </div>
                        </div>
                        <p class="text-sm mt-auto">{{ flat.flats.desc }}</p>
                    </div>
                    <div class="flex flex-col gap-4 col-span-5 md:col-span-2 xl:col-span-1 md:ml-6">               
                        <img v-if="flat.users.avatar" :src="`https://odsofactmcvehjzaoqqk.supabase.co/storage/v1/object/public/users/${flat.users.avatar}`" alt="" class="rounded-full w-16 h-16">
                        <div v-else class="p-4 rounded-full bg-gray-200 flex items-center justify-center border border-gray-400 text-[#12B1DE] w-fit">
                            <Icon class="text-3xl" name="material-symbols:person"/>
                        </div>
                        <div class="flex flex-col">
                            <p class="text-xs text-gray-400">СОБСТВЕННИК</p>
                            <p class="text-xl">ID {{ flat.users.id }}</p>
                        </div>                    
                    </div>
                </NuxtLink>
                <div class="flex items-center gap-2 self-end absolute z-[2] top-8 right-8 xl:right-4 xl:top-4">
                    <button @click="removeFavourite(flat.id, favouritesFlats.indexOf(flat))" class="p-2 flex items-center justify-center rounded-full bg-gray-200 transition-all duration-500 text-red-500">
                        <Icon class="text-2xl" name="material-symbols:favorite-outline"/>
                    </button>
                    <button @click="copyUrl(`/catalog/flat-${flat.flats.id}`)" class="p-2 flex items-center justify-center rounded-full bg-gray-200 text-[#12B1DE]">
                        <Icon class="text-2xl" name="material-symbols:share"/>
                    </button>
                </div>
            </div>
            <div class="w-full h-px bg-gray-300"></div>
        </div>
    </div>  
    <div class="flex flex-col gap-6">
        <p class="text-2xl font-semibold font-Nunito tracking-widest">Выход из аккаунта</p>
        <button @click="logout" class="px-4 py-2 w-fit rounded-xl border border-[#12B1DE] text-white bg-[#12B1DE] transition-all duration-500 hover:bg-transparent hover:text-[#12B1DE]">Выйти</button>
    </div>
</template>

<script setup>
    /* название страницы */
    useSeoMeta({
        title: 'Личный кабинет',
        lang: 'ru'
    })


    /* подключение БД и проверка пользователя */
    const supabase = useSupabaseClient() 
    const { authenticated, role, id } = storeToRefs(useUserStore())

    const { data:users, error } = await supabase
    .from('users')
    .select('*')   
    .eq('id', id.value)  


    /* создание сообщений и роутера */
    const { showMessage } = useMessagesStore()
    const router = useRouter()


    /* создание формы пользователя и изображений */
    const user = ref({
        name: users[0].name,
        surname: users[0].surname,
        patronymic: users[0].patronymic,
        login: users[0].login,
        avatar: users[0].avatar,
        password: users[0].password
    }) 

    const isAvatar = ref(user.value.avatar)
    const formAvatar = ref()
    formAvatar.value = `https://odsofactmcvehjzaoqqk.supabase.co/storage/v1/object/public/users/${user.value.avatar}`


    /* добавление фото и превью */
    let images = []
    const loadImage = (el) => {
        images = el.target.files
        const reader  = new FileReader()
        reader.onload = (e) => {
            isAvatar.value = e.target.result
            formAvatar.value = e.target.result
        }
        reader.readAsDataURL(images[0])
        console.log(images)
    } 


    /* обновление данных */
    const updateUser = async () => {    
        let updateData = {
            name: user.value.name, 
            surname: user.value.surname, 
            patronymic: user.value.patronymic, 
            login: user.value.login, 
            password: user.value.password
        }

        if(images.length > 0) {
            await supabase.storage.from('users').upload(`avatars/${images[0].name}`, images[0])           
            updateData.avatar = `avatars/${images[0].name}`
        }

        if (images.length > 0 && user.value.avatar) {
            await supabase.storage.from('users').remove([user.value.avatar])
        }

        const { data, error } = await supabase
        .from('users')
        .update(updateData)
        .eq('id', id.value)
           
        if(error) {
            console.log(error)
            showMessage("Произошла ошибка!", false)   
        } else {            
            showMessage("Данные обновлены!", true)   
        }
    }


    /* управление недвижимостью */
    const { data:flats, error:flatsError } = await supabase
    .from('flats')
    .select('*')   
    .eq('userId', id.value)  

    const flatsArray = ref(flats)

    const deleteFlat = async (flatId, arrayId) => {
        const { error } = await supabase
        .from('flats')
        .delete()
        .eq('id', flatId)

        if(error) {
            console.log(error)
            showMessage("Произошла ошибка!", false)   
        } else {            
            showMessage("Удалено!", true)   
            flatsArray.value.splice(arrayId, 1)
        }
    }


    /* добавление квартиры */
    const flat = ref({
        address: "",
        totalArea: null,
        livingArea: null,
        kitchenArea: null,
        floorNumber: null,
        floorQuantity: null,
        price: null,
        desc: "",
        type: "",
        rooms: "",
        HCS: "",
        prepayment: "",
        rentalPeriod: "",
        dealType: ""
    }) 

    const flatFiles = ref([])
    const uploadFlatImages = (event) => {
        flatFiles.value = event.target.files
    }

    const addFlat = async () => {
        let insertFlat = {
            address: flat.value.address,
            totalArea: flat.value.totalArea,
            livingArea: flat.value.livingArea,
            kitchenArea: flat.value.kitchenArea,
            floorNumber: flat.value.floorNumber,
            floorQuantity: flat.value.floorQuantity,
            price: flat.value.price,
            desc: flat.value.desc,
            type: flat.value.type,
            rooms: flat.value.rooms,
            HCS: flat.value.HCS,
            prepayment: flat.value.prepayment,
            rentalPeriod: flat.value.rentalPeriod,
            dealType: flat.value.dealType,
            userId: id.value,
            images: []
        }

        const uploads = Array.from(flatFiles.value).map(file => {
            const filePath = `flatImages/${file.name}`
            insertFlat.images.push(filePath)
            return supabase.storage.from('flats').upload(filePath, file)
        })

        Promise.all(uploads)

        const { data, error } = await supabase
        .from('flats')
        .insert(insertFlat)
        .select()

        flatsArray.value.push(insertFlat)
           
        if(error) {
            console.log(error)
            showMessage("Произошла ошибка!", false)   
        } else {            
            showMessage("Данные успешно загружены!", true)   
        }
    }


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
    const { data: favourites, error:favouritesError } = await supabase
    .from('favourites')
    .select('*, flats(*), users(*)')
    .eq('userId', id.value)

    const favouritesFlats = ref(favourites)

    const removeFavourite = async (flatId, arrayId) => {
        const { error } = await supabase
        .from('favourites')
        .delete()
        .eq('id', flatId)

        if(error) {
            console.log(error)
            showMessage("Произошла ошибка!", false)   
        } else {            
            showMessage("Удаленно из избранного!", true)   
            favouritesFlats.value.splice(arrayId, 1)
        }
    }


    /* выход из аккаунта */
    const logout = () => {
        authenticated.value = false
        role.value = null
        showMessage("Успешный выход!", true)   
        router.push('/')
    }
</script>