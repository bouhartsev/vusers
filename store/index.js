// import axios from 'axios';

const state = () => ({
    users: [],
    loading: true,
});

const getters = {
    users: (state) => {
        console.log("get users");
        return state.users;
    },
};

const mutations = {
    SET_USERS: (state, payload) => {
        state.users = payload;
        state.loading = false;
    },

    SET_USER_IMG: (state, payload) => {
        let obj = state.users.find((x) => x.id == payload.id);
        if (obj) obj.picture = payload.url;
    },
    MOVE_USER: (state, payload) => {
        let fromIndex = state.users.findIndex((x) => x.id == payload.id);
        let toIndex = state.users.findIndex((x) => x.id == payload.close);
        if (fromIndex != -1 && toIndex != -1) {
            let element = state.users[fromIndex];
            state.users.splice(fromIndex, 1);
            state.users.splice(toIndex, 0, element);
        }
    },
    SET_USER_GROUP: (state, payload) => {
        let obj = state.users.find((x) => x.id == payload.id);
        if (obj) obj.group = payload.new_group;
    },
};

const actions = {
    async GET_USERS(context, payload = "api request") {
        let data = await this.$axios.$get("users.json");
        context.commit("SET_USERS", data);
        console.log(payload);
    },
    // async SAVE_USER(context, payload) {
    //     let { data } = await axios.post("/api/new");
    //     context.commit("ADD_USER", payload);
    //     console.log(data); //temp - never used
    // },
};

export default {
    state,
    getters,
    mutations,
    actions,
};
