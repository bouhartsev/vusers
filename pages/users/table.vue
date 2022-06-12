<template>
    <div>
        <el-table
            :data="usersData"
            height="500"
            style="width: 100%"
            @selection-change="handleSelectionChange"
            v-infinite-scroll="load"
            v-loading="$store.state.loading"
        >
            <el-table-column type="selection" width="55"></el-table-column>
            <!-- <el-table-column label="Date" width="120">
                <template slot-scope="scope">{{ scope.row.date }}</template>
            </el-table-column> -->
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
            users: [],
        };
    },
    props: {
        usersData: Array,
        usersGroups: Array,
    },
    methods: {
        filterHandler(value, row, column) {
            const property = column["property"];
            return row[property] === value;
        },
        handleSelectionChange(val) {
            console.log(this.rdsRows());
            this.multipleSelection = val;
        },
        getColorType(group) {
            return this.usersGroups.find((x) => x.name == group)?.color;
        },
        load() {
            const uLen = this.users.length;
            for (let i = uLen; i < this.usersData.length && i < uLen + 5; i++)
                this.users += this.usersData[i];
        },
    },
};
</script>

<style></style>
