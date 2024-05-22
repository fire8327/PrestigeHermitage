<template>
    <div class="flex flex-col gap-4 overflow-hidden relative">
        <button @click="isAnswerShow =! isAnswerShow" class="flex items-center gap-4 p-4 justify-between rounded-xl transition-all duration-300" :class="isAnswerShow ? 'bg-[#12B1DE] text-white' : 'bg-white hover:bg-gray-200'">
            <span class="text-left">{{ props.question }}</span>
            <Icon class="text-3xl transition-all duration-500 max-md:!hidden" :class="{'rotate-45' : isAnswerShow}" name="ic:baseline-add-circle"/>
        </button>
        <p class="transition-all duration-500"  :class="isAnswerShow ? 'h-[230px] md:h-32' : 'h-0'">{{ props.answer }}</p>
    </div>
</template>

<script setup>
    /* показ ответа */
    const isAnswerShow = ref(false)


    /* пропсы */
    const props = defineProps({
        question: String,
        answer: String
    })
</script>