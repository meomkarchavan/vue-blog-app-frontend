import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        postList: [],
        post: {},
        active_el: 0,
    },
    mutations: {
        likePost(state, post) {
            let index = state.postList.findIndex(p => p.postid == post.postid);
            if (index !== -1) {

                state.postList[index].likes++
            }
        },
        setPost(state, post) {
            state.active_el = post.postid;
            state.post = post;
        },
        setPostList(state, postList) {
            state.postList = postList
        }
    }, actions: {
        loadPostList(context) {
            axios
                .get("/api/post/")
                .then(function (response) {
                    console.log(response.data)
                    context.commit('setPostList', response.data);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
})