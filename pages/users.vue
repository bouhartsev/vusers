<template>
    <div>
        <h1 style="text-align:center;">Список пользователей</h1>
        <el-divider/>
        <el-radio-group v-model="current_view" @change="changeView">
            <el-radio-button
                v-for="item in views"
                :key="item.value"
                :label="item.value"
                >{{ item.label }}</el-radio-button
            >
        </el-radio-group>
        <el-input
            placeholder="Поиск"
            prefix-icon="el-icon-search"
            v-model="search"
            clearable
        >
        </el-input>
        <NuxtChild :usersData="users" :usersGroups="usersGroups" />
    </div>
</template>

<script>
import { mapGetters } from "vuex";

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
            current_view: $nuxt.$route.name.split("-")[1],

            // users: [],
            usersGroups: [
                { name: "Руководство", color: "success" },
                { name: "Бухгалтерия", color: "primary" },
                { name: "Отдел кадров", color: "warning" },
                { name: "ИТД", color: "info" },
            ],

            search: "",
        };
    },
    methods: {
        changeView: function (view) {
            this.$router.push({ path: "/users/" + view });
        },
    },
    created() {
        this.$store.dispatch("GET_USERS");
    },
    computed: {
        ...mapGetters(["users"]),
        // users() {
        //     this.usersData = this.$store.getters.users;
        //     return this.usersData;
        // }
    },
};
</script>

<style></style>
