<template>
	<div>
    	<h1>Это что-то...</h1>
		<p>Конкретнее? Эта работа предназначена для стажировки в Kaspersky. Если вы видите этот текст, значит вы смотрите устаревшую версию. Посмотреть актуальную (более красиво оформленную) версию этого сайта можно <a href="//vusers.bouhartsev.top">по ссылке</a>.</p>
		<NuxtLink to="/users/"><el-button type="primary" plain>Список пользователей</el-button></NuxtLink>
		<br>
		<i>// Основные функции здесь</i>
		<el-divider/>
		<h2>Об авторе</h2>
		<p>здесь писать не нужно, потому что Матвей Бухарцев - знаменитость в мире IT. Если вы этого не знали, то можете ознакомиться с основной информацией по ссылке ниже.</p>
		<el-link type="primary" href="//bouhartsev.top" target="_blank"><b>Сайт производителя</b></el-link>
	</div>
</template>

<script>
export default {
    name: "IndexPage",
};
</script>
