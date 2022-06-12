<template>
    <div>
        Filter (group)
        <!-- <label for="sorting"
            >Сортировка
            <el-select
                v-model="current_sort"
                placeholder="не сортировать"
                name="sorting"
            >
                <el-option
                    v-for="item in sorting"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                >
                </el-option>
            </el-select>
        </label> -->
        <!-- Filter groups -->

        <hr />
        <dataset
            v-slot="{ ds }"
            :ds-data="usersData"
            :ds-filter-fields="{
                group: current_group,
            }"
        >
            <!-- <div class="row mb-2" :data-page-count="ds.dsPagecount">
                <div class="col-md-6 mb-2 mb-md-0">
                    <dataset-show />
                </div>
            </div> -->
            <el-row :gutter="12" :data-show-entries="ds.showEntries(15)">
                <dataset-item>
                    <template #default="{ row, rowIndex }">
                        <el-col :xs="24" :sm="8">
                            <el-card style="margin-bottom: 10px" shadow="hover">
                                <p><b>{{ row.name }}</b></p>
                                <el-avatar
                                    shape="square"
                                    :size="128"
                                    :src="row.picture"
                                    ><img
                                        src="~assets/avatar.png"
                                        alt="Avatar Placeholder"
                                /></el-avatar>
                                <el-upload
                                    action="/api/posts/"
                                    accept="image/*"
                                    :show-file-list="false"
                                    :on-success="onLoadImg"
                                    v-if="!row.picture"
                                    ><el-button
                                        icon="el-icon-upload"
                                        @click="load_img_ind = rowIndex"
                                        circle
                                    ></el-button>
                                </el-upload>
                                <p>
                                  {{row.group}}
                                  <br>
                                    {{row.phone}}

                                </p>
                            </el-card>
                        </el-col>
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
            load_img_ind: null,
        };
    },
    props: {
        usersData: Array,
        usersGroups: Array,
    },
    methods: {
        onLoadImg(res, file) {
            this.$store.commit("SET_USER_IMG", {
                ind: this.load_img_ind,
                url: URL.createObjectURL(file.raw),
            });
        },
    },
};
</script>

<style></style>
