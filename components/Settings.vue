<template>
    <el-row type="flex" style="margin-bottom: 20px" :gutter="10">
        <el-col><slot name="left"></slot></el-col>
        <el-col><slot name="right"></slot></el-col>
    </el-row>
</template>

<script>
export default {};
</script>

<style></style>
