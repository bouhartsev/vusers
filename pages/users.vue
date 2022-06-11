<template>
    <div>
        <h1>Список пользователей</h1>
        <el-radio-group v-model="current_view" @change="changeView">
            <el-radio-button
                v-for="item in views"
                :key="item.value"
                :label="item.value"
                >{{ item.label }}</el-radio-button
            >
        </el-radio-group>
        <NuxtChild />
        <el-backtop />
    </div>
</template>

<script>
export default {
    data() {
        return {
            views: [
                {
                    value: "table",
                    label: "таблица",
                },
                {
                    value: "cards",
                    label: "карточки",
                },
                {
                    value: "groups",
                    label: "группы",
                },
            ],
            current_view: $nuxt.$route.name.split('-')[1],
        };
    },
    methods: {
        changeView: function (view) {
            this.$router.push({path:"/users/"+view});
        },
    },
};
</script>

<style></style>
