<template>
    <div>
        groups users
        <!-- <div class="col-3">
            <h3>Draggable 1</h3>
            <draggable
                class="list-group"
                :list="list1"
                group="people"
                @change="log"
                itemKey="name"
            >
                <template #item="{ element, index }">
                    <div class="list-group-item">
                        {{ element.name }} {{ index }}
                    </div>
                </template>
            </draggable>
        </div>

        <div class="col-3">
            <h3>Draggable 2</h3>
            <draggable
                class="list-group"
                :list="list2"
                group="people"
                @change="log"
                itemKey="name"
            >
                <template #item="{ element, index }">
                    <div class="list-group-item">
                        {{ element.name }} {{ index }}
                    </div>
                </template>
            </draggable>
        </div>
        {{lists}} -->
        <el-row type="flex">
            <el-col v-for="(group, group_name) in lists"
                    :key="group_name">
                <draggable
                    
                    :list="lists[group_name]"
                    :group="{name: group_name,pull:true, put:true}"
                    @end="onEnd"
                    ghost-class="ghost"
                    
                >
                    <template #header><el-button>Add</el-button></template>
                    <el-card
                        v-for="(element, ind) in lists[group_name]"
                        :key="ind"
                    >
                        {{ element.name }}
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
                console.log(value);
            },
        },
    },
    methods: {
        onEnd(e) {
            console.log(e);
        },
        checkMove: function (e) {
            console.log(e);
        },
    },
};
</script>

<style>
.ghost {
    opacity: 0.5;
    background: #c8ebfb;
}
</style>
