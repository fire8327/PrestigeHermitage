<template>
    <div class="flex flex-col gap-6">
        <p class="text-2xl font-semibold font-Nunito tracking-widest">{{ news[0].title }}</p>
        <div class="flex items-center gap-4">
            <button @click="copyUrl(`/news/news-${news[0].id}`)" class="rounded-full p-2 bg-gray-200 flex items-center justify-center">
                <Icon class="text-xl text-[#12B1DE]" name="material-symbols:share"/>
            </button>
            <p class="text-gray-400 text-base mt-auto">{{ new Date (news[0].date).toLocaleDateString() }}</p>
        </div>
        <p v-html="news[0].desc.replace(/(?:\r\n|\r|\n)/g, '<br>')" class="text-gray-400"></p>
        <NuxtLink to="/news" class="flex items-center gap-2 text-[#12B1DE] transition-all duration-300 hover:opacity-50">
            <span class="font-semibold font-Nunito tracking-widest">К другим новостям</span>
            <Icon class="text-3xl" name="ri:arrow-go-back-fill"/>
        </NuxtLink>
    </div>
</template>

<script setup>
    /* подключение к бд */
    const { id } = useRoute().params
    const supabase = useSupabaseClient() 

    const { data:news, error } = await supabase
    .from('news')
    .select('*') 
    .eq('id', id) 


    /* создание сообщений */
    const { showMessage } = useMessagesStore()


    /* получение адреса и его копирование */
    const fullUrl = computed(() => {
        const { protocol, host } = window.location
        return `${protocol}//${host}`
    })

    const copyUrl = async (link) => {
        await navigator.clipboard.writeText(`${fullUrl.value}/${link}`)
        return showMessage("Скопировано!", true)
    }
</script>