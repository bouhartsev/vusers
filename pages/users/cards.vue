<template>
    <div>
        <Settings>
            <template #left>
                <label for="sorting"
                    >Сортировка по имени
                    <el-select
                        v-model="current_sort"
                        placeholder="не сортировать"
                        name="sorting"
                    >
                        <el-option label="не сортировать" value="" />
                        <el-option label="в алфавитном порядке" value="name" />
                        <el-option label="в обратном порядке" value="-name" />
                    </el-select>
                </label>
            </template>
            <template #right>
                <el-select
                    v-model="current_group"
                    name="sorting"
                    class="hidden-lg-only"
                >
                    <el-option label="Все" value="" />
                    <el-option
                        v-for="item in usersGroups"
                        :key="item.name"
                        :label="item.name"
                        :value="item.name"
                    />
                </el-select>
                <el-radio-group
                    v-model="current_group"
                    fill="inherit"
                    text-color="inherit"
                    class="hidden-md-and-down"
                >
                    <el-radio-button label="" class="el-button--default"
                        >Все</el-radio-button
                    >
                    <el-radio-button
                        v-for="item in usersGroups"
                        :key="item.name"
                        :label="item.name"
                        :class="'el-button--' + item.color"
                        >{{ item.name }}</el-radio-button
                    >
                </el-radio-group>
            </template>
        </Settings>

        <dataset
            v-loading="$store.state.loading"
            v-slot="{ ds }"
            :ds-data="usersData"
            :ds-filter-fields="{
                group: current_group,
            }"
            :ds-sortby="[current_sort]"
        >
            <!-- <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">Выделить всё</el-checkbox> -->
            <el-row :gutter="12" :data-show-entries="ds.showEntries(15)">
                <dataset-item>
                    <template #default="{ row }">
                        <!-- Почему-то группа отключает отображение текстовых элементов -->
                        <!-- <el-checkbox-group v-model="selectedUsers" @change="handleSelectionChange"> -->
                        <el-col :xs="24" :sm="8">
                            <el-card class="user-card" shadow="hover">
                                <el-checkbox
                                    :label="row.id"
                                    class="top-left"
                                    >{{
                                }}</el-checkbox>
                                <p>
                                    <b>{{ row.name }}</b>
                                </p>
                                <el-avatar
                                    shape="square"
                                    :size="128"
                                    :src="row.picture"
                                    ><img
                                        src="~assets/avatar.png"
                                        alt="Avatar Placeholder"
                                /></el-avatar>
                                <el-upload
                                    class="top-right"
                                    action="//httpbin.org/post"
                                    accept="image/*"
                                    :show-file-list="false"
                                    :on-success="onLoadImg"
                                    v-if="!row.picture"
                                    ><el-button
                                        icon="el-icon-upload"
                                        @click="load_img_ind = row.id"
                                        circle
                                    ></el-button>
                                </el-upload>
                                <p>
                                    {{ row.group }}
                                    <br />
                                    {{ row.phone }}
                                </p>
                            </el-card>
                        </el-col>
                        <!-- </el-checkbox-group> -->
                    </template>
                    <template #noDataFound>
                        <div class="col-md-12 pt-2">
                            <p class="text-center">Данные не найдены</p>
                        </div>
                    </template>
                </dataset-item>
            </el-row>
            <el-pagination
                background
                layout="prev, pager, next"
                :page-count="ds.dsPagecount"
                @current-change="ds.setActive"
            />
        </dataset>
    </div>
</template>

<script>
export default {
    data() {
        return {
            current_group: "",
            load_img_id: null,
            current_sort: "",
            // selectedUsers: [],
        };
    },
    props: {
        usersData: Array,
        usersGroups: Array,
        handleSelectionChange: Function,
    },
    methods: {
        onLoadImg(res, file) {
            this.$store.commit("SET_USER_IMG", {
                id: this.load_img_ind,
                url: URL.createObjectURL(file.raw),
            });
        },
    },
};
</script>

<style scoped>
.el-radio-button__inner {
    border-left: 1px;
}
</style>
>
