<template>
    <div>
      <el-divider/>
        <el-table
            :data="usersData"
            height="500"
            @selection-change="handleSelectionChange"
            row-key="id"
            v-loading="$store.state.loading"
            use-virtual
            use-row-key
        >
            <el-table-column type="selection" width="50"></el-table-column>
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
                :show-overflow-tooltip="true"
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
            // counter: 1,
            // LOADING_CONST: 10,
            // loading: false,
        };
    },
    props: {
        usersData: Array,
        usersGroups: Array,
        handleSelectionChange: Function,
        getColorType: Function,
    },
    computed: {
        // users() {
        //     return this.usersData.slice(0, this.counter * this.LOADING_CONST);
        // },
        // infScrollDis() {
        //     return this.loading || this.noMore;
        // },
        // noMore() {
        //     return this.counter * this.LOADING_CONST >= this.usersData.length;
        // },
    },
    methods: {
        filterHandler(value, row, column) {
            const property = column["property"];
            return row[property] === value;
        },
    },
};
</script>

<style></style>
