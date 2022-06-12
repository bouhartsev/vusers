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
        state.users[payload.ind].picture=payload.url;
    },
};

const actions = {
    async GET_USERS(context, payload="api request") {
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
