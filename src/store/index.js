import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        postList: [],
        post: {},
        active_el: 0,
        access_token: "",
        refresh_token: "",
        user: {},
    },
    mutations: {
        setToken(state, token) {
            state.access_token = token.access_token;
            state.post = token.refresh_token;
        },
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
        },
        setAndLoginUser(state, user) {
            state.user.username = user.username
            state.user.password = user.password
        },
        setTokens(state, token) {
            state.access_token = token.access_token
            state.refresh_token = token.password
        }
    }, actions: {
        login(context, user) {
            axios
                .post("/api/login", user)
                .then(function (response) {
                    console.log(response.data)
                    context.commit('setTokens', response.data);
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        loadPostList(context) {
            console.log(context.state.access_token);
            axios
                .get("/api/post/",
                    {
                        headers: {
                            Authorization: 'Bearer ' + context.state.access_token //the token is a variable which holds the token
                        }
                    }
                )
                .then(function (response) {
                    console.log(response)

                    context.commit('setPostList', response.data);
                })
                .catch(function (error) {


                    console.log(error);
                });
        }
    }
})