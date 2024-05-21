<template>
    <div class="flex flex-col gap-6 bg-white rounded-xl p-4 border border-gray-400/60">
        <p class="text-2xl font-semibold font-Nunito tracking-widest">Связаться с нами</p>
        <div class="flex flex-col gap-4 items-center">
            <p class="text-gray-400 text-center max-w-2xl text-base">Если у вас есть вопросы, вы хотите оставить отзыв, пожалуйста оставьте свои контакты. Мы обязательно свяжемся с вами в ближайшее время!</p>
            <FormKit @submit="feedback" type="form" :actions="false" form-class="flex flex-col gap-4 w-full md:w-1/2 rounded-xl text-lg" messages-class="hidden">
                <FormKit type="text" v-model="feedbackForm.name" name="Имя" validation="required" messages-class="text-[#E9556D] font-semibold font-Nunito tracking-widest" input-class="w-full rounded-xl bg-transparent focus:outline-none border border-[#292929]/50 py-2 px-4" placeholder="Ваше имя"></FormKit>
                <FormKit type="text" v-model="feedbackForm.email" name="Почта" validation="required|email" messages-class="text-[#E9556D] font-semibold font-Nunito tracking-widest" input-class="w-full rounded-xl bg-transparent focus:outline-none border border-[#292929]/50 py-2 px-4" placeholder="Ваша почта"></FormKit>
                <FormKit type="text" v-model="feedbackForm.phone" name="Номер телефона" validation="required" messages-class="text-[#E9556D] font-semibold font-Nunito tracking-widest" input-class="w-full rounded-xl bg-transparent focus:outline-none border border-[#292929]/50 py-2 px-4" placeholder="Ваш номер телефона"></FormKit>
                <FormKit type="select" :options="['Телефон', 'Почта', 'Whatsapp', 'Telegram']" v-model="feedbackForm.method" name="Предпочтительный способ связи" validation="required" messages-class="text-[#E9556D] font-semibold font-Nunito tracking-widest" input-class="w-full rounded-xl bg-transparent focus:outline-none border border-[#292929]/50 py-2 px-4" placeholder="Предпочтительный способ связи"></FormKit>
                <FormKit type="textarea" v-model="feedbackForm.comment" name="Комментарий" messages-class="text-[#E9556D] font-semibold font-Nunito tracking-widest" input-class="w-full rounded-xl bg-transparent focus:outline-none border border-[#292929]/50 py-2 px-4" placeholder="Комментарий"></FormKit>
                <button type="submit" class="px-4 py-1.5 rounded-xl bg-[#12B1DE] text-white transition-all duration-500 hover:bg-[#292929]">Отправить</button>
            </FormKit>
        </div>
    </div>
</template>

<script setup>
    /* создание формы */
    const feedbackForm = ref({
        name: "",
        email: "",
        phone: "",
        method: "",
        comment: ""
    })  


    /* создание сообщений */
    const { showMessage } = useMessagesStore()


    /* отправка данных */
    const token = "6406240248:AAE6aeqzjCr6-4gDh3OfHtgDxwFAfdZamYk"
    const chatId = "-4201917800"
    const URL = `https://api.telegram.org/bot${token}/sendMessage`

    const feedback = async() =>{
        let msg = "<b>Заявка на обратную связь</b>\n"
        + `<b>Имя:</b> ${feedbackForm.value.name}\n`
        + `<b>Почта:</b> ${feedbackForm.value.email}\n`
        + `<b>Номер телефона:</b> ${feedbackForm.value.phone}\n`
        + `<b>Предпочтительный способ связи:</b> ${feedbackForm.value.method}\n`
        + `<b>Комментарий:</b> ${feedbackForm.value.comment}\n`
        const {data, error} = await useFetch(URL,{
            body:{
                'chat_id': chatId,
                'parse_mode': 'html',
                'text': msg
            },
            method:'post'
        })

        if (error.value) return showMessage("При отправке произошла ошибка!", false)
        showMessage("Успешная отправка!", true)
        feedbackForm.value.name = ""
        feedbackForm.value.email = ""
        feedbackForm.value.phone = ""
        feedbackForm.value.method = ""
        feedbackForm.value.comment = ""
    }
</script>