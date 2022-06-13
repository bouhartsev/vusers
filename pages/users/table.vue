<template>
    <div>
        <el-table
            :data="usersData"
            :height="tableHeight"
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
            tableHeight: 300,
        };
    },
    props: {
        usersData: Array,
        usersGroups: Array,
        handleSelectionChange: Function,
        getColorType: Function,
    },
    created() {
        window.addEventListener("resize", this.onResize);
    },
    updated() {
        this.onResize();
    },
    mounted() {
        this.tableHeight = 500;
    },
    destroyed() {
        window.removeEventListener("resize", this.onResize);
    },
    methods: {
        onResize() {
            this.tableHeight = window.innerHeight - document.querySelector(".el-table").getClientRects()[0].top - 25; //
        },
        filterHandler(value, row, column) {
            const property = column["property"];
            return row[property] === value;
        },
    },
};
</script>

<style></style>
