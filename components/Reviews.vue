<template>
    <div class="flex flex-col gap-6">
        <p class="text-2xl font-semibold font-Nunito tracking-widest">Отзывы</p>
        <Swiper :loop="true" 
                :space-between="20" 
                :modules="[SwiperPagination, SwiperAutoplay]" 
                :pagination="{ clickable: true }" 
                :autoplay="{delay:3500}" 
                :breakpoints = "{
                    320: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    1280: {
                        slidesPerView: 4,
                    }
                }"
                class="w-full text-xl !pb-10">
            <SwiperSlide class="!flex flex-col gap-4 rounded-xl border border-[#12B1DE] p-4" v-for="review in reviews">
                    <p class="font-semibold font-Nunito tracking-widest">{{ review.users.surname }} {{ review.users.name }}</p>
                    <p v-html="review.desc" class="text-gray-400"></p>
            </SwiperSlide>
        </Swiper>
    </div>
    <div class="flex flex-col gap-6" v-if="authenticated">
        <p class="text-2xl font-semibold font-Nunito tracking-widest">Оставить отзыв</p>
        <FormKit @submit="addReview" type="form" :actions="false" messages-class="hidden" form-class="flex flex-col gap-4 items-center justify-center">
            <FormKit type="textarea" v-model="reviewText" validation="required" messages-class="text-[#E9556D] font-semibold font-Nunito tracking-widest" name="Отзыв" outer-class="w-full" input-class="px-4 py-2 border border-[#12B1DE] rounded-xl focus:outline-none w-full" placeholder="Ваш отзыв"/>
            <button type="submit" class="w-[160px] text-center py-0.5 px-4 rounded-full bg-[#12B1DE] border border-[#12B1DE] text-white transition-all duration-500 hover:text-[#12B1DE] hover:bg-transparent">Отправить</button>
        </FormKit>
    </div>
</template>

<script setup>
    /* подключение БД и создание роутера */
    const supabase = useSupabaseClient()
    const router = useRouter() 

    const { data: reviews, error } = await supabase
    .from('reviews')
    .select('*, users (*)')   


    /* проверка входа */
    const { authenticated, id  } = storeToRefs(useUserStore())


    /* создание сообщений */
    const showMessage = useMessagesStore().showMessage

    
    /* добавление отзыва */
    const reviewText = ref()
    const addReview = async () => {
        const { data, error } = await supabase
        .from('reviews')
        .insert({
            desc: reviewText.value.replace(/(?:\r\n|\r|\n)/g, '<br>'), 
            userId: id.value
        })

        if(error) {
            console.log(error)
            showMessage("Произошла ошибка!", false)   
        } else {            
            showMessage("Отзыв добавлен!", true)   
            router.go()
        }
    } 
</script>