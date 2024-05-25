<template>
    <div class="flex flex-col gap-6">
       <p class="text-2xl font-semibold font-Nunito tracking-widest">Каталог недвижимости</p>
        <FlatCard v-for="flat in flats" v-bind="flat"></FlatCard>
    </div>
</template>

<script setup>
    /* подключение БД */
    const supabase = useSupabaseClient() 

    const { data:flats, error } = await supabase
    .from('flats')
    .select('*, users (*)')   
</script>