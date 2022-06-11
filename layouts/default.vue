<template>
    <div>
        <el-header>
            <a href="/" class="logo-link"><Logo /></a>
            <div class="flex-grow" />
            <el-menu
                mode="horizontal"
                :default-active="$nuxt.$route.path"
                :router="true"
            >
                <el-menu-item index="/">Приветствие</el-menu-item>
                <el-menu-item index="/users/">
                    <!-- <NuxtLink to="/users/"> -->
                    Пользователи
                    <!-- </NuxtLink> -->
                </el-menu-item>
            </el-menu>
        </el-header>
        <el-main>
            <Nuxt />
        </el-main>
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
</style>
