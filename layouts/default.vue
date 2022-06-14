<template>
    <div class="fill-container" style="min-height: 100vh">
        <el-header class="main-header">
            <a href="/" class="logo-link"><Logo /></a>
            <div class="flex-grow" />
            <Menu class="hidden-sm-and-down" />
            <el-button
                icon="el-icon-menu"
                @click="menu = !menu"
                type="text"
                class="hidden-md-and-up"
            />
        </el-header>
        <el-drawer
            direction="rtl"
            :visible.sync="menu"
            style="z-index: 50"
            title="Меню"
        >
            <Menu mobile />
        </el-drawer>
        <el-main style="text-align: center" class="fill-child">
            <Nuxt />
        </el-main>
        <!-- <el-footer><el-link href="//bouhartsev.top" target="_blank">bouhartsev</el-link> © 2022</el-footer> -->
    </div>
</template>

<script>
export default {
    layout: "default",
    data() {
        return { menu: false };
    },
};
</script>

<style>
body {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    /* overflow-y: overlay; */
    margin: 0;
}
.main-header {
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
.fill-container {
    display: flex;
    flex-direction: column;
    height: 100%;
}
.fill-child {
    width: 100%;
    flex-grow: 1;
}
</style>
