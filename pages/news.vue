<template>
    <div class="flex flex-col gap-6">
       <p class="text-2xl font-semibold font-Nunito tracking-widest">Новости</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <NuxtLink class="bg-white rounded-xl p-4 flex flex-col gap-4" v-for="n in 6">
                <button class="self-end rounded-full p-2 bg-gray-200 flex items-center justify-center">
                    <Icon class="text-xl text-[#12B1DE]" name="material-symbols:share"/>
                </button>
                <pre>{{fullUrl  }}</pre>
                <p class="text-xl font-semibold font-Nunito tracking-widest">Название новости</p>
                <p class="text-gray-400 text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit ex iste suscipit voluptate tempore commodi soluta, voluptas magnam error molestias. Itaque, corrupti id inventore atque neque aspernatur? Nulla, ab excepturi.</p>
                <p class="text-gray-400 text-base">22.03.2024</p>
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>
    /* const route = useRoute()
    const router = useRouter()

    const fullUrl = computed(() => {
        const { protocol, host } = window.location
        return `${protocol}//${host}`
    }) */
</script>