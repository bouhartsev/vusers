<template>
    <div class="hello-world">
        <h1>Это что-то...</h1>
        <p>
            Так вкратце можно ответить на вопрос "Что это?". Эта работа
            предназначена для стажировки в Kaspersky. Если вы видите этот текст,
            значит ещё не всё соответствует задумке автора. Конечно,
            дорабатывать можно бесконечно, но хочется всё-таки прийти к
            логическому завершению. Скоро здесь будет описание сайта.
        </p>
        <NuxtLink to="/users/"
            ><el-button type="primary" plain>Список пользователей</el-button>
        </NuxtLink>
        <br />
        <el-image
            :src="require(`~/assets/main-functions.svg`)"
            style="width: 300px; margin: 5px"
            alt="основные функции здесь"
        >
            <div slot="placeholder" class="image-slot">
                // основные функции здесь
            </div>
        </el-image>
        <el-divider />
        <h2>О продукте</h2>
        <p>
            Изготовлено и упаковано: 12.06.2022
            <br />
            Годен до: скончания веков
            <br />
            <el-link type="primary" href="//bouhartsev.top" target="_blank"
                ><b>Сайт производителя</b></el-link
            >
        </p>
        <h2>Об авторе</h2>
        <p>
            ничего писать не нужно, потому что Матвей Бухарцев - знаменитость в
            мире IT. Если вы этого не знали, то можете ознакомиться с основной
            информацией по ссылке выше.
        </p>
    </div>
</template>

<script>
export default {
    name: "IndexPage",
};
</script>

<style scoped>
.hello-world {
    max-width: 500px;
    margin: auto;
}
</style>
