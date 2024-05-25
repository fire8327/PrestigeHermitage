<template>
    <FormKit @submit="userReg" type="form" :actions="false" messages-class="hidden" form-class="flex flex-col gap-4 items-center justify-center grow text-xl">
        <p class="text-2xl font-semibold font-Nunito tracking-widest text-[#12B1DE]">Регистрация</p>
        <div class="flex items-center lg:items-start gap-4 max-lg:flex-col md:w-2/3 lg:w-1/2">
            <FormKit type="text" v-model="user.surname" validation="required" messages-class="text-[#E9556D] font-semibold font-Nunito tracking-widest" name="Фамилия" outer-class="w-full lg:w-1/3" input-class="px-4 py-2 border border-[#12B1DE] rounded-xl focus:outline-none w-full" placeholder="Фамилия"/>
            <FormKit type="text" v-model="user.name" validation="required" messages-class="text-[#E9556D] font-semibold font-Nunito tracking-widest" name="Имя" outer-class="w-full lg:w-1/3" input-class="px-4 py-2 border border-[#12B1DE] rounded-xl focus:outline-none w-full" placeholder="Имя"/>
            <FormKit type="text" v-model="user.patronymic" validation="required" messages-class="text-[#E9556D] font-semibold font-Nunito tracking-widest" name="Отчество" outer-class="w-full lg:w-1/3" input-class="px-4 py-2 border border-[#12B1DE] rounded-xl focus:outline-none w-full" placeholder="Отчество"/>
        </div>
        <div class="flex items-center lg:items-start gap-4 max-lg:flex-col md:w-2/3 lg:w-1/2">
            <FormKit type="text" v-model="user.login" validation="required" messages-class="text-[#E9556D] font-semibold font-Nunito tracking-widest" name="Логин" outer-class="w-full lg:w-1/2" input-class="px-4 py-2 border border-[#12B1DE] rounded-xl focus:outline-none w-full" placeholder="Логин"/>
            <FormKit type="password" v-model="user.password" validation="required|length:6" messages-class="text-[#E9556D] font-semibold font-Nunito tracking-widest" name="Пароль" outer-class="w-full lg:w-1/2" input-class="px-4 py-2 border border-[#12B1DE] rounded-xl focus:outline-none w-full" placeholder="••••••"/>
        </div>
        <FormKit type="text" v-model="user.phone" validation="required|length:11" messages-class="text-[#E9556D] font-semibold font-Nunito tracking-widest" name="Телефон" outer-class="w-full lg:w-1/2" input-class="px-4 py-2 border border-[#12B1DE] rounded-xl focus:outline-none w-full" placeholder="Телефон"/>
        <FormKit @change="loadImage" type="file" messages-class="text-[#E9556D] font-semibold font-Nunito tracking-widest" name="Аватар" outer-class="w-full md:w-2/3 lg:w-1/2" accept=".png,.jpg,.jpeg,.svg,.webp,.bmp" input-class="px-4 py-2 border border-[#12B1DE] rounded-xl focus:outline-none w-full" help-class="text-gray-400 text-sm" help="*Аватар"/>
        <button type="submit" class="w-[160px] text-center py-0.5 px-4 rounded-full bg-[#12B1DE] border border-[#12B1DE] text-white transition-all duration-500 hover:text-[#12B1DE] hover:bg-transparent">Регистрация</button>
        <div class="flex items-center justify-center gap-4 w-full md:w-2/3 lg:w-1/2 my-10">
            <div class="w-1/3 h-px bg-[#12B1DE]"></div>  
            <p class="font-semibold font-Nunito tracking-widest text-[#12B1DE]">или</p>
            <div class="w-1/3 h-px bg-[#12B1DE]"></div>  
        </div>
        <NuxtLink to="/auth" class="w-[160px] text-center py-0.5 px-4 rounded-full hover:bg-[#12B1DE] border border-[#12B1DE] hover:text-white transition-all duration-500 text-[#12B1DE] bg-transparent">Вход</NuxtLink>
    </FormKit>
</template>

<script setup>
    /* название страницы */
    useSeoMeta({
        title: 'Регистрация',
        lang: 'ru'
    })


    /* создание пользователя */
    const user = ref({
        name: "",
        surname: "",
        patronymic: "",
        login: "",
        phone: "",
        password: ""
    })


    /* создание сообщений */
    const { showMessage } = useMessagesStore()


    /* подключение БД и роутера */
    const supabase = useSupabaseClient()
    const router = useRouter()


    /* добавление фото */
    let files = []
    const loadImage = (el) => {
        files = el.target.files
        console.log(files)
    }  


    /* регистрация пользователя */
    const userReg = async () => {
        const { data: users, error: usersError } = await supabase
        .from('users')
        .select("*")
        .eq('login', user.value.login)

        if (users[0]) {
            user.value.login = ""
            return showMessage("Такой  логин уже используется!", false)              
        } 

        let insertUser = { 
            name: user.value.name,
            surname: user.value.surname,
            patronymic: user.value.patronymic, 
            login: user.value.login, 
            password: user.value.password, 
            phone: user.value.phone
        }

        if (files && files.length > 0) {
            const { data: uploadData, error: uploadError } = await supabase.storage.from('users').upload(`avatars/${files[0].name}`, files[0])          

            if (uploadError) {
                return showMessage('Произошла ошибка!', false)
            }

            insertUser.avatar = `avatars/${files[0].name}`
        }

        const { data, error } = await supabase
        .from('users')
        .insert(insertUser)
        .select()

        if (data) {
            console.log(data)
            showMessage('Успешная регистрация!', true)
            router.push('/auth')
        } else {
            showMessage('Произошла ошибка!', false)
        }
    }

</script>