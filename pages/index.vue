<template>
    <Swiper :space-between="20" :loop="true" :modules="[SwiperAutoplay, SwiperPagination]" :autoplay="{delay: 3500}" :pagination="{clickable: true}" :slidesPerView="1" class="w-full">
        <SwiperSlide class="w-full">
            <img src="/images/hero/1.jpg" alt="" class="w-full rounded-xl aspect-video">
        </SwiperSlide>
        <SwiperSlide class="w-full">
            <img src="/images/hero/2.jpg" alt="" class="w-full rounded-xl aspect-video">
        </SwiperSlide>
        <SwiperSlide class="w-full">
            <img src="/images/hero/3.jpg" alt="" class="w-full rounded-xl aspect-video">
        </SwiperSlide>
        <SwiperSlide class="w-full">
            <img src="/images/hero/4.jpg" alt="" class="w-full rounded-xl aspect-video">
        </SwiperSlide>
        <SwiperSlide class="w-full">
            <img src="/images/hero/5.jpg" alt="" class="w-full rounded-xl aspect-video">
        </SwiperSlide>
        <SwiperSlide class="w-full">
            <img src="/images/hero/6.jpg" alt="" class="w-full rounded-xl aspect-video">
        </SwiperSlide>    
    </Swiper>
    <div class="flex flex-col gap-6">
        <p class="text-2xl">Преимущества</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="flex flex-col gap-8">
                <div class="rounded-xl bg-white flex flex-col px-8 py-6">
                    <p class="text-3xl">Сами</p>
                    <p>С возможными рисками и без поддержки</p>
                </div>
                <div class="flex flex-col gap-4 p-4">
                    <div class="flex flex-col">
                        <p class="text-gray-400 ml-8 text-base">Проверка жильцов</p>
                        <div class="flex items-center gap-2">
                            <Icon class="text-2xl" name="material-symbols:close-small-rounded"/>
                            <p>Везение и интуиция</p>
                        </div>
                    </div>
                    <div class="flex flex-col">
                        <p class="text-gray-400 ml-8 text-base">Фото</p>
                        <div class="flex items-center gap-2">
                            <Icon class="text-2xl" name="material-symbols:close-small-rounded"/>
                            <p>Как получится</p>
                        </div>
                    </div>
                    <div class="flex flex-col">
                        <p class="text-gray-400 ml-8 text-base">Неожиданный съезд жильцов</p>
                        <div class="flex items-center gap-2">
                            <Icon class="text-2xl" name="material-symbols:close-small-rounded"/>
                            <p>Начинаете всё с начала</p>
                        </div>
                    </div>
                    <div class="flex flex-col">
                        <p class="text-gray-400 ml-8 text-base">Стоимость</p>
                        <div class="flex items-center gap-2">
                            <Icon class="text-2xl" name="material-symbols:close-small-rounded"/>
                            <p>Ваше время и силы</p>
                        </div>
                    </div>
                    <div class="flex flex-col">
                        <p class="text-gray-400 ml-8 text-base">Договор аренды</p>
                        <div class="flex items-center gap-2">
                            <Icon class="text-2xl" name="material-symbols:close-small-rounded"/>
                            <p>Из интернета</p>
                        </div>
                    </div>
                    <div class="flex flex-col">
                        <p class="text-gray-400 ml-8 text-base">Бытовые проблемы</p>
                        <div class="flex items-center gap-2">
                            <Icon class="text-2xl" name="material-symbols:close-small-rounded"/>
                            <p>Решаете сами</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col gap-8">
                <div class="rounded-xl bg-[#12B1DE] flex flex-col px-8 py-6 text-white">
                    <p class="text-3xl">С нами</p>
                    <p>Мы бесплатно и быстро всё сделаем за вас</p>
                </div>
                <div class="flex flex-col gap-4 p-4">
                    <div class="flex flex-col">
                        <p class="text-gray-400 ml-8 text-base">Проверка жильцов</p>
                        <div class="flex items-center gap-2">
                            <Icon class="text-2xl text-[#12B1DE]" name="ic:outline-check"/>
                            <p>Сделаем за вас</p>
                        </div>
                    </div>
                    <div class="flex flex-col">
                        <p class="text-gray-400 ml-8 text-base">Фото</p>
                        <div class="flex items-center gap-2">
                            <Icon class="text-2xl text-[#12B1DE]" name="ic:outline-check"/>
                            <p>Профессиональное фото бесплатно</p>
                        </div>
                    </div>
                    <div class="flex flex-col">
                        <p class="text-gray-400 ml-8 text-base">Неожиданный съезд жильцов</p>
                        <div class="flex items-center gap-2">
                            <Icon class="text-2xl text-[#12B1DE]" name="ic:outline-check"/>
                            <p>Найдём новых</p>
                        </div>
                    </div>
                    <div class="flex flex-col">
                        <p class="text-gray-400 ml-8 text-base">Стоимость</p>
                        <div class="flex items-center gap-2">
                            <Icon class="text-2xl text-[#12B1DE]" name="ic:outline-check"/>
                            <p>Бесплатно</p>
                        </div>
                    </div>
                    <div class="flex flex-col">
                        <p class="text-gray-400 ml-8 text-base">Договор аренды</p>
                        <div class="flex items-center gap-2">
                            <Icon class="text-2xl text-[#12B1DE]" name="ic:outline-check"/>
                            <p>Составлен юристами</p>
                        </div>
                    </div>
                    <div class="flex flex-col">
                        <p class="text-gray-400 ml-8 text-base">Бытовые проблемы</p>
                        <div class="flex items-center gap-2">
                            <Icon class="text-2xl text-[#12B1DE]" name="ic:outline-check"/>
                            <p>Помогаем на протяжении всего срока</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Services></Services>
    <div class="flex flex-col gap-6">
        <p class="text-2xl">Этапы покупки</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="flex flex-col gap-4 rounded-xl bg-white p-4 md:pb-10">
                <p class="text-2xl"><span class="text-[#12B1DE]">01. </span>Выбор недвижимости</p>
                <div class="flex flex-col">
                    <p class="flex items-center gap-2">
                        <span>—</span>
                        <span>Недвижимость для любых целей</span>
                    </p>
                    <p class="flex items-center gap-2">
                        <span>—</span>
                        <span>От надёжных застройщиков</span>
                    </p>
                    <p class="flex items-center gap-2">
                        <span>—</span>
                        <span>Служба индивидуальных показов</span>
                    </p>
                </div>
            </div>
            <div class="flex flex-col gap-4 rounded-xl bg-white p-4 md:pb-10">
                <p class="text-2xl"><span class="text-[#12B1DE]">02. </span>Подготовка к сделке</p>
                <div class="flex flex-col">
                    <p class="flex items-center gap-2">
                        <span>—</span>
                        <span>Помощь в оформлении страхования</span>
                    </p>
                    <p class="flex items-center gap-2">
                        <span>—</span>
                        <span>Проверка документов</span>
                    </p>
                    <p class="flex items-center gap-2">
                        <span>—</span>
                        <span>Юридическая поддержка</span>
                    </p>
                </div>
            </div>
            <div class="flex flex-col gap-4 rounded-xl bg-white p-4 md:pb-10">
                <p class="text-2xl"><span class="text-[#12B1DE]">03. </span>Сделка</p>
                <div class="flex flex-col">
                    <p class="flex items-center gap-2">
                        <span>—</span>
                        <span>Организация проведения сделки</span>
                    </p>
                    <p class="flex items-center gap-2">
                        <span>—</span>
                        <span>Присутствие менеджера на всех этапах сделки</span>
                    </p>
                    <p class="flex items-center gap-2">
                        <span>—</span>
                        <span>Курьерская служба</span>
                    </p>
                </div>
            </div>
            <div class="flex flex-col gap-4 rounded-xl bg-white p-4 md:pb-10">
                <p class="text-2xl"><span class="text-[#12B1DE]">04. </span>ПОСТ-сопровождение</p>
                <div class="flex flex-col">
                    <p class="flex items-center gap-2">
                        <span>—</span>
                        <span>Контроль качества квартиры</span>
                    </p>
                    <p class="flex items-center gap-2">
                        <span>—</span>
                        <span>Информационная поддержка</span>
                    </p>
                    <p class="flex items-center gap-2">
                        <span>—</span>
                        <span>Помощь в продлении страховки</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>