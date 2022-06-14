<template>
    <el-menu
        :mode="(mobile)?'vertical':'horizontal'"
        :default-active="$nuxt.$route.path"
        :router="true"
    >
        <el-menu-item index="/">Приветствие</el-menu-item>
        <el-menu-item index="/users/">Пользователи</el-menu-item>
    </el-menu>
</template>

<script>
export default {
    props: {
        mobile: Boolean,
    }
};
</script>

<style></style>
