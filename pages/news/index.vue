<template>
    <div class="flex flex-col gap-6">
       <p class="text-2xl font-semibold font-Nunito tracking-widest">Новости</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="relative" v-for="oneNew in news">
                <button @click="copyUrl(`/news/news-${oneNew.id}`)" class="absolute z-[2] top-6 right-6 rounded-full p-2 bg-gray-200 flex items-center justify-center">
                    <Icon class="text-xl text-[#12B1DE]" name="material-symbols:share"/>
                </button>
                <NuxtLink :to="`/news/news-${oneNew.id}`" class="bg-white rounded-xl w-full h-full p-4 flex flex-col gap-4 transition-all duration-500 hover:opacity-50">
                    <p class="text-xl font-semibold font-Nunito tracking-widest md:min-h-28 lg:min-h-24 pr-14">{{ oneNew.title }}</p>
                    <p class="text-gray-400 text-lg">{{ oneNew.preview }}</p>
                    <p class="text-gray-400 text-base mt-auto">{{ new Date (oneNew.date).toLocaleDateString() }}</p>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup>
    /* подключение БД */
    const supabase = useSupabaseClient() 

    const { data:news, error } = await supabase
    .from('news')
    .select('*')    
    .order('date', { ascending: true })


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
</script>