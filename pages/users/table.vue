<template>
    <div class="fill-container">
      <el-divider/>
      <!-- Почему-то бесконечный скролл не работает правильно -->
        <el-table
            :data="users"
            :height="500"
            class="fill-child"
            @selection-change="handleSelectionChange"
            v-infinite-scroll="load"
            :infinite-scroll-disabled="infScrollDis"
            v-loading="$store.state.loading"
        >
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column
                sortable
                property="name"
                label="Полное имя"
                width="200"
            />
            <el-table-column
                property="email"
                label="Электронная почта"
                width="250"
            />
            <el-table-column
                prop="group"
                label="Группа"
                width="150"
                :filters="usersGroupFilter"
                :filter-method="filterHandler"
                filter-placement="bottom-end"
            >
                <template slot-scope="scope">
                    <el-tag
                        :type="getColorType(scope.row.group)"
                        disable-transitions
                        >{{ scope.row.group }}</el-tag
                    >
                </template>
            </el-table-column>
            <el-table-column
                property="phone"
                label="Номер телефона"
                width="200"
            />
            <!-- <div slot="append">Loading...</div> -->
        </el-table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            usersGroupFilter: this.usersGroups.map((x) => {
                return { text: x["name"], value: x["name"] };
            }),
            counter: 1,
            LOADING_CONST: 10,
            loading: false,
        };
    },
    props: {
        usersData: Array,
        usersGroups: Array,
        handleSelectionChange: Function,
        getColorType: Function,
    },
    computed: {
        users() {
            return this.usersData.slice(0, this.counter * this.LOADING_CONST);
        },
        infScrollDis() {
            return this.loading || this.noMore;
        },
        noMore() {
            return this.counter * this.LOADING_CONST >= this.usersData.length;
        },
    },
    methods: {
        filterHandler(value, row, column) {
            const property = column["property"];
            return row[property] === value;
        },
        load() {
            console.log("load");
            this.loading = true;
            setTimeout(() => {
                this.counter++;
                this.loading = false;
            }, 1000);
        },
    },
};
</script>

<style></style>
