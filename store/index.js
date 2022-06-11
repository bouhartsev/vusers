// import axios from 'axios';

const state = () => ({
    users: [],
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
    },

    ADD_USER: (state, payload) => {
        state.users.push(payload);
    },
};

const actions = {
    async GET_USERS(context, payload) {
        let data = await this.$axios.$get("users.json");
        context.commit("SET_USERS", data);
        console.log(payload); //temp - never used
    },
    async SAVE_USER(context, payload) {
        let { data } = await axios.post("/api/new");
        context.commit("ADD_USER", payload);
        console.log(data); //temp - never used
    },
};

export default {
    state,
    getters,
    mutations,
    actions,
};
