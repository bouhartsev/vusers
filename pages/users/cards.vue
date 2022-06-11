<template>
  <div>cards users
    <label for="sorting"
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
        </label>
  </div>
</template>

<script>
export default {
}
</script>

<style>

</style>