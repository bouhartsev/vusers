<template>
    <div class="fill-container">
        <el-header>
            <a href="/" class="logo-link"><Logo /></a>
            <div class="flex-grow" />
            <el-menu
                mode="horizontal"
                :default-active="$nuxt.$route.path"
                :router="true"
            >
                <el-menu-item index="/">Приветствие</el-menu-item>
                <el-menu-item index="/users/">Пользователи</el-menu-item>
            </el-menu>
        </el-header>
        <el-main style="text-align:center" class="fill-child">
            <Nuxt />
        </el-main>
        <!-- <el-footer><el-link href="//bouhartsev.top" target="_blank">bouhartsev</el-link> © 2022</el-footer> -->
    </div>
</template>

<script>
export default {
    layout: "default",
};
</script>

<style>
body {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    overflow-y: overlay;
    margin: 0;
}
header {
    display: flex;
    align-items: center;
    position: sticky;
    top: 0;
    background: white;
    box-shadow: white 10px 10px;
    z-index: 100;
}
.logo-link {
    height: 80%;
}
.logo-link > * {
    height: 100%;
}
.flex-grow {
    flex-grow: 1;
}
/* .fill-container {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.fill-child {
  width: 100%;
  flex-grow: 3;
} */
</style>
