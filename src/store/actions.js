import { fetchAskList, fetchNewsList, fetchJobsList, fetchUserInfo, fetchCommentItem, fetchList } from "../api/index.js";
export default {
    // FETCH_NEWS(context) {
    //     return fetchNewsList()
    //         .then(response => {
    //             context.commit('SET_NEWS', response.data); // mutations에 기능을 넘기기
    //             return response;
    //         })
    //         .catch(console.error());
    // },
    // async
    async FETCH_NEWS(context) {
        try {
            const response = await fetchNewsList();
            context.commit('SET_NEWS', response.data);
            return response; // 어떤것을 리턴하던간에 promise가 리턴됨
        } catch (error) {
            console.log(error);
        }
    },
    // FETCH_ASK({ commit }) {
    //     return fetchAskList()
    //         .then(response => {
    //             commit("SET_ASK", response.data);
    //         })
    //         .catch(console.error());
    // },
    async FETCH_ASK({ commit }) {
        // api쪽에서 try-catch 처리함
        const response = await fetchAskList();
        commit('SET_ASK', response.data);
        return response; // 어떤것을 리턴하던간에 promise가 리턴됨
    },
    // FETCH_JOBS({ commit }) {
    //     return fetchJobsList()
    //         .then(({ data }) => {
    //             commit("SET_JOBS", data);
    //         })
    //         .catch(console.error());
    // },
    async FETCH_JOBS({ commit }) {
        try {
            const response = await fetchJobsList();
            commit('SET_JOBS', response.data);
            return response; // 어떤것을 리턴하던간에 promise가 리턴됨
        } catch (error) {
            console.log(error);
        }
    },
    FETCH_USER({ commit }, userName) {
        return fetchUserInfo(userName)
            .then(({ data }) => {
                commit("SET_USER", data);
            })
            .catch(console.error());
    },
    FETCH_ITEM({ commit }, itemId) {
        return fetchCommentItem(itemId)
            .then(({ data }) => {
                commit("SET_ITEM", data);
            })
            .catch(console.error());
    },
    // FETCH_LIST({ commit }, pageName) {
    //     return fetchList(pageName)
    //         .then((response) => {
    //             console.log("4");
    //             commit("SET_LIST", response.data);
    //             return response;
    //         })
    //         .catch(console.error());
    // },
    async FETCH_LIST({ commit }, pageName) {
        try {
            const response = await fetchList(pageName);
            commit('SET_LIST', response.data);
            return response; // 어떤것을 리턴하던간에 promise가 리턴됨    
        } catch (error) {
            console.log(error);
        }

    },

}