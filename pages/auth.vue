<template>
    <FormKit @submit="authUser" type="form" :actions="false" messages-class="hidden" form-class="flex flex-col gap-4 items-center justify-center grow text-xl">
        <p class="text-2xl font-semibold font-Nunito tracking-widest text-[#12B1DE]">Вход</p>
        <div class="flex items-center lg:items-start gap-4 max-lg:flex-col md:w-2/3 lg:w-1/2">
            <FormKit v-model="user.login" type="text" validation="required" messages-class="text-[#E9556D] font-semibold font-Nunito tracking-widest" name="Логин" outer-class="w-full lg:w-1/2" input-class="px-4 py-2 border border-[#12B1DE] rounded-xl focus:outline-none w-full" placeholder="Логин"/>
            <FormKit v-model="user.password" type="password" validation="required|length:6" messages-class="text-[#E9556D] font-semibold font-Nunito tracking-widest" name="Пароль" outer-class="w-full lg:w-1/2" input-class="px-4 py-2 border border-[#12B1DE] rounded-xl focus:outline-none w-full" placeholder="••••••"/>
        </div>
        <button type="submit" class="w-[160px] text-center py-0.5 px-4 rounded-full bg-[#12B1DE] border border-[#12B1DE] text-white transition-all duration-500 hover:text-[#12B1DE] hover:bg-transparent">Вход</button>
        <div class="flex items-center justify-center gap-4 w-full md:w-2/3 lg:w-1/2 my-10">
            <div class="w-1/3 h-px bg-[#12B1DE]"></div>  
            <p class="font-semibold font-Nunito tracking-widest text-[#12B1DE]">или</p>
            <div class="w-1/3 h-px bg-[#12B1DE]"></div>  
        </div>
        <NuxtLink to="/reg" class="w-[160px] text-center py-0.5 px-4 rounded-full hover:bg-[#12B1DE] border border-[#12B1DE] hover:text-white transition-all duration-500 text-[#12B1DE] bg-transparent">Регистрация</NuxtLink>        
    </FormKit>
</template>

<script setup>
    /* создание пользователя */
    const user = ref({
        login: "",
        password: ""  
    })


    /* создание сообщений и подключение хранилищ */
    const { showMessage } = useMessagesStore()
    const userStore = useUserStore()


    /* подключение БД и роутера */
    const supabase = useSupabaseClient()
    const router = useRouter()


    /* вход */
    const authUser = async() => {  
        const { data: users, error } = await supabase
        .from('users')
        .select("*")
        .eq('login', user.value.login)
    
        if (!users[0]) {
            user.value.login = ""
            return showMessage("Неверно введен логин!", false)              
        }

        if (user.value.password !== users[0].password) {
            user.value.password = ""
            return showMessage('Неверно введен пароль!', false)            
        }

        showMessage('Успешный вход!', true)
        userStore.authenticated = true
        userStore.id = users[0].id
        userStore.role = users[0].role
        router.push('/profile')
    } 
</script>