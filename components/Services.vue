<template>
    <div class="flex flex-col gap-6">
       <p class="text-2xl">Услуги</p>
       <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div class="flex flex-col gap-4 rounded-xl bg-white p-4">
                <Icon class="text-5xl text-[#12B1DE]" name="carbon:web-services-definition"/>
                <p>Юридические услуги</p>
                <NuxtLink class="underline text-gray-500">Подробнее</NuxtLink>
            </div>
            <div class="flex flex-col gap-4 rounded-xl bg-white p-4">
                <Icon class="text-5xl text-[#12B1DE]" name="ph:building-apartment-light"/>
                <p>Ипотека</p>
                <NuxtLink class="underline text-gray-500">Подробнее</NuxtLink>
            </div>
            <div class="flex flex-col gap-4 rounded-xl bg-white p-4">
                <Icon class="text-5xl text-[#12B1DE]" name="teenyicons:cost-estimate-outline"/>
                <p>Оценка недвижимости</p>
                <NuxtLink class="underline text-gray-500">Подробнее</NuxtLink>
            </div>
       </div>
    </div>
</template>