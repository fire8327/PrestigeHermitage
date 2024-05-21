<template>
    <div class="flex flex-col gap-6">
       <p class="text-2xl font-semibold font-Nunito tracking-widest">Юридические услуги</p>
       <div class="flex flex-col gap-4">
            <p class="flex items-center gap-4 border-b border-gray-400 pb-2"><span class="text-2xl text-[#12B1DE]">01 </span>Консультации по вопросам недвижимости</p>
            <p class="flex items-center gap-4 border-b border-gray-400 pb-2"><span class="text-2xl text-[#12B1DE]">02 </span>Юридическое сопровождение сделок</p>
            <p class="flex items-center gap-4 border-b border-gray-400 pb-2"><span class="text-2xl text-[#12B1DE]">03 </span>Составление договоров в простой письменной форме</p>
            <p class="flex items-center gap-4 border-b border-gray-400 pb-2"><span class="text-2xl text-[#12B1DE]">04 </span>Представление и защита интересов клиента в суде</p>
            <p class="flex items-center gap-4 border-b border-gray-400 pb-2"><span class="text-2xl text-[#12B1DE]">05 </span>Составление претензий, жалоб, исковых заявлений, отзыва на исковое заявление</p>
            <p class="flex items-center gap-4 border-b border-gray-400 pb-2"><span class="text-2xl text-[#12B1DE]">06 </span>Составление письменного юридического заключения по предоставленным документам</p>
            <p class="flex items-center gap-4 border-b border-gray-400 pb-2"><span class="text-2xl text-[#12B1DE]">07 </span>Представительство в государственных инстанциях (ПИБ, КЗРиЗ, КУГИ)</p>
       </div>
    </div>
    <div class="flex flex-col gap-6">
       <p class="text-2xl font-semibold font-Nunito tracking-widest">Ипотека</p>
       <p class="flex items-center gap-4 border-b border-gray-400 pb-2"><span class="text-2xl text-[#12B1DE]">01 </span>Кредитование под залог покупаемой квартиры/дома</p>
       <p class="flex items-center gap-4 border-b border-gray-400 pb-2"><span class="text-2xl text-[#12B1DE]">02 </span>Кредитование комнат</p>
       <p class="flex items-center gap-4 border-b border-gray-400 pb-2"><span class="text-2xl text-[#12B1DE]">03 </span>Кредитование под залог имеющейся недвижимости</p>
       <p class="flex items-center gap-4 border-b border-gray-400 pb-2"><span class="text-2xl text-[#12B1DE]">04 </span>Рефинансирование имеющегося кредита</p>
       <p class="flex items-center gap-4 border-b border-gray-400 pb-2"><span class="text-2xl text-[#12B1DE]">05 </span>Кредитование собственников бизнеса/ИП</p>
       <p class="flex items-center gap-4 border-b border-gray-400 pb-2"><span class="text-2xl text-[#12B1DE]">06 </span>Кредитование земельных участков</p>
        <FormKit form-class="rounded-xl flex flex-col gap-4 p-4 bg-white items-center" type="form" :actions="false" messages-class="hidden">
            <p class="text-xl font-semibold font-Nunito tracking-widest text-center">Калькулятор ипотеки</p>
            <FormKit @change="calculateResult" type="text" v-model="mortgageForm.price" name="Стоимость недвижимости" validation="required|number" messages-class="text-[#E9556D] font-semibold font-Nunito tracking-widest" outer-class="w-full" input-class="w-full rounded-xl bg-transparent focus:outline-none border border-[#292929]/50 py-2 px-4" placeholder="Стоимость недвижимости" help-class="text-sm text-[#292929]/50" help="Сумма, которую за вас заплатит банк (₽)"></FormKit>
            <FormKit @change="calculateResult" type="text" v-model="mortgageForm.firstPay" name="Первоначальный взнос" validation="required|number" messages-class="text-[#E9556D] font-semibold font-Nunito tracking-widest" outer-class="w-full" input-class="w-full rounded-xl bg-transparent focus:outline-none border border-[#292929]/50 py-2 px-4" placeholder="Первоначальный взнос" help-class="text-sm text-[#292929]/50" help="Ваш первичный взнос в качестве погашения кредита (обычно сразу после сделки) (₽)"></FormKit>
            <FormKit @change="calculateResult" type="text" v-model="mortgageForm.period" name="Срок кредита (лет)" validation="required|number" messages-class="text-[#E9556D] font-semibold font-Nunito tracking-widest" outer-class="w-full" input-class="w-full rounded-xl bg-transparent focus:outline-none border border-[#292929]/50 py-2 px-4" placeholder="Срок кредита (лет)" help-class="text-sm text-[#292929]/50" help="Как долго в годах планируете возвращать долг (лет)"></FormKit>
            <FormKit @change="calculateResult" type="text" v-model="mortgageForm.percent" name="Процентная ставка" validation="required|number" messages-class="text-[#E9556D] font-semibold font-Nunito tracking-widest" outer-class="w-full" input-class="w-full rounded-xl bg-transparent focus:outline-none border border-[#292929]/50 py-2 px-4" placeholder="Процентная ставка" help-class="text-sm text-[#292929]/50" help="Столько процентов начисляется на ваш долг в год (%)"></FormKit>
            <p><span class="text-xl font-semibold font-Nunito tracking-widest">Ежемесячный платёж:</span> {{ mortgageForm.result }}₽</p>
        </FormKit>
    </div>
    <div class="flex flex-col gap-6">
       <p class="text-2xl font-semibold font-Nunito tracking-widest">Оценка недвижимости</p>
       <p class="flex items-center gap-4 border-b border-gray-400 pb-2"><span class="text-2xl text-[#12B1DE]">01 </span>Оценка привлекательности района, его инфраструктуры, уровня безопасности и экологической обстановки.</p>
       <p class="flex items-center gap-4 border-b border-gray-400 pb-2"><span class="text-2xl text-[#12B1DE]">02 </span>Уровень ремонта, качество используемых материалов.</p>
       <p class="flex items-center gap-4 border-b border-gray-400 pb-2"><span class="text-2xl text-[#12B1DE]">03 </span>Наличие рядом школ, больниц, торговых центров, парков и других объектов социальной инфраструктуры.</p>
       <p class="flex items-center gap-4 border-b border-gray-400 pb-2"><span class="text-2xl text-[#12B1DE]">04 </span>Консультации, подбор и сопровождение для наших клиентов – БЕЗ КОМИССИИ</p>
       <p class="flex items-center gap-4 border-b border-gray-400 pb-2"><span class="text-2xl text-[#12B1DE]">05 </span>Работа с использованием субсидий и материнского капитала</p>
       <p class="flex items-center gap-4 border-b border-gray-400 pb-2"><span class="text-2xl text-[#12B1DE]">06 </span>Услуга "trade-in" – новая квартира в зачет имеющегося жилья</p>
    </div>
</template>

<script setup>
    /* калькулятор ипотеки */
    const mortgageForm = ref({
        price: null,
        firstPay: null,
        period: null,
        percent: null,
        result: null 
    })

    const calculateResult = () => {
        let monthlyInterestRate = (mortgageForm.value.percent / 100) / 12
        let totalPayments = mortgageForm.value.period * 12
        let result = ((mortgageForm.value.price - mortgageForm.value.firstPay) * monthlyInterestRate) / (1 - Math.pow((1 + monthlyInterestRate), -totalPayments))
        mortgageForm.value.result  = result.toLocaleString()
    }
</script>