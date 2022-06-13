<template>
    <div>
        <h1 style="text-align: center">Список пользователей</h1>
        <el-divider />
        <el-row type="flex" style="margin-bottom: 20px">
            <el-col>
                <el-radio-group v-model="current_view" @change="changeView">
                    <el-radio-button
                        v-for="item in views"
                        :key="item.value"
                        :label="item.value"
                        >{{ item.label }}</el-radio-button
                    >
                </el-radio-group>
            </el-col>
            <el-col>
                <el-input
                    placeholder="Поиск"
                    prefix-icon="el-icon-search"
                    v-model="search"
                    clearable
            /></el-col>
        </el-row>
        <NuxtChild
            :usersData="users"
            :usersGroups="usersGroups"
            :handleSelectionChange="handleSelectionChange"
            :getColorType="getColorType"
        />
    </div>
</template>

<script>
// import { mapGetters } from "vuex";
import {findAny} from 'vue-dataset/src/helpers'

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
        handleSelectionChange(arg) {
            console.log(arg);
        },
        getColorType(group) {
            return this.usersGroups.find((x) => x.name == group)?.color;
        },
    },
    created() {
        this.$store.dispatch("GET_USERS");
    },
    computed: {
        // ...mapGetters(["users"]),
        users() {
            // поиск в трёх полях
            return this.$store.getters.users.filter(el=>findAny(["name", "phone", "email"],{},el, this.search));
            
        }
    },
};
</script>

<style>
.user-card {
  margin: 0 10px 10px;
  position: relative;
}
.top-right,
.top-left {
    position: absolute;
    top: 10px;
}
.top-left {
    left: 10px;
}
.top-right {
    right: 10px;
}
</style>
