<template>
    <div class="flex flex-col gap-6">
        <p class="text-2xl font-semibold font-Nunito tracking-widest">Личные данные</p>
        <FormKit @submit="updateUser" type="form" :actions="false" messages-class="hidden" form-class="flex flex-col gap-4 items-center justify-center">
            <div class="flex items-center lg:items-start gap-4 max-lg:flex-col md:w-2/3 lg:w-1/2">
                <FormKit type="text" v-model="user.name" validation="required" messages-class="text-[#E9556D] font-semibold font-Nunito tracking-widest" name="Фамилия" outer-class="w-full lg:w-1/3" input-class="px-4 py-2 border border-[#12B1DE] rounded-xl focus:outline-none w-full" placeholder="Фамилия"/>
                <FormKit type="text" v-model="user.surname" validation="required" messages-class="text-[#E9556D] font-semibold font-Nunito tracking-widest" name="Имя" outer-class="w-full lg:w-1/3" input-class="px-4 py-2 border border-[#12B1DE] rounded-xl focus:outline-none w-full" placeholder="Имя"/>
                <FormKit type="text" v-model="user.patronymic" validation="required" messages-class="text-[#E9556D] font-semibold font-Nunito tracking-widest" name="Отчество" outer-class="w-full lg:w-1/3" input-class="px-4 py-2 border border-[#12B1DE] rounded-xl focus:outline-none w-full" placeholder="Отчество"/>
            </div>
            <div class="flex items-center lg:items-start gap-4 max-lg:flex-col md:w-2/3 lg:w-1/2">
                <FormKit type="text" v-model="user.login" validation="required" messages-class="text-[#E9556D] font-semibold font-Nunito tracking-widest" name="Логин" outer-class="w-full lg:w-1/2" input-class="px-4 py-2 border border-[#12B1DE] rounded-xl focus:outline-none w-full" placeholder="Логин"/>
                <FormKit type="text" v-model="user.password" validation="required|length:6" messages-class="text-[#E9556D] font-semibold font-Nunito tracking-widest" name="Пароль" outer-class="w-full lg:w-1/2" input-class="px-4 py-2 border border-[#12B1DE] rounded-xl focus:outline-none w-full" placeholder="••••••"/>
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
</template>

<script setup>
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
            const { data, error } = await supabase.storage.from('users').remove([user.value.avatar])
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
</script>