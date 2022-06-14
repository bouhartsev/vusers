<template>
    <div style="overflow-x:auto;" v-loading="$store.state.loading">
        <el-row type="flex" style="min-width:1100px;min-height:100px;width:100%;">
            <el-col
                v-for="(group, group_name) in lists"
                :key="group_name"
                class="user-card"
            >
                <p style="margin: 8px 0 2px">
                    <b>{{ group_name }}</b>
                    <el-button
                        :type="getColorType(group_name)"
                        icon="el-icon-plus"
                        circle
                        size="small"
                        class="top-right"
                    ></el-button>
                </p>
                <draggable
                    :list="lists[group_name]"
                    :group="{ name: group_name, pull: true, put: true }"
                    ghost-class="ghost"
                    @end="onEnd"
                    :data-group-name="group_name"
                >
                    <!-- <template #header
                        ><b>{{ group_name }}</b>
                        <el-button
                            :type="getColorType(group_name)"
                            icon="el-icon-plus"
                            circle
                            size="small"
                            class="top-right"
                        ></el-button
                    ></template> -->
                    <el-card
                        v-for="(element, ind) in lists[group_name]"
                        :key="ind"
                        :data-id="element.id"
                        style="cursor:pointer"
                    >
                        <p>{{ element.name }}</p>
                        <i>{{element.phone}}</i>
                    </el-card>
                </draggable>
            </el-col>
        </el-row>
        <el-backtop />
    </div>
</template>

<script>
import draggable from "vuedraggable";
export default {
    components: {
        draggable,
    },
    props: {
        usersData: Array,
        usersGroups: Array,
        getColorType: Function,
    },
    computed: {
        lists: {
            get() {
                const obj = {};
                this.usersGroups.forEach((gr) => {
                    obj[gr.name] = this.usersData.filter(
                        (x) => x.group == gr.name
                    );
                });
                obj["Остальные"] = this.usersData.filter((x) => !x.group);
                return obj;
            },
            set(value) {
                console.log("set computed (how?)");
            },
        },
    },
    methods: {
        onEnd(e) {
            let id = e.item.dataset.id;
            let new_group = e.to.dataset.groupName;
            if (e.pullMode)
                this.$store.commit("SET_USER_GROUP", {
                    id: id,
                    new_group: new_group != "Остальные" ? new_group : "",
                });
            if (
                (e.pullMode || e.newIndex != e.oldIndex) &&
                this.lists[new_group].length > 1
            ) {
                let newIndex = e.newIndex;
                if (!e.pullMode) {
                    if (newIndex > e.oldIndex) newIndex--;
                    else newIndex++;
                }
                this.$store.commit("MOVE_USER", {
                    id: id,
                    close: this.lists[new_group][newIndex]?.id,
                });
            }
        },
    },
};
</script>

<style scoped>
.ghost {
    opacity: 0.5;
    background: #c8ebfb;
}
</style>
