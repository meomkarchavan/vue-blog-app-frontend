import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
import router from '../router';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        postList: [],
        post: {},
        active_el: 0,
        // access_token: "",
        // refresh_token: "",  
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
        // setTokens(state, token) {
        //     state.access_token = token.access_token
        //     state.refresh_token = token.password
        // }
    }, actions: {
        login(context, user) {
            axios
                .post("/api/login", user)
                .then(function (response) {
                    console.log(response.data)
                    console.log(router)
                    // context.commit('setTokens', response.data);
                    localStorage.setItem('user', JSON.stringify(response.data))
                    if (response.status === 200) {
                        router.push({ path: '/' })
                    }
                })
                .catch(function (error) {

                    console.log(error);
                });
        },
        loadPostList(context) {
            axios
                .get("/api/post/",
                    {
                        headers: {
                            Authorization: 'Bearer ' + JSON.parse(localStorage.getItem("user")).access_token //the token is a variable which holds the token
                        }
                    }
                )
                .then(function (response) {
                    if (response.data != null) {
                        context.commit('setPostList', response.data);
                    }
                })
                .catch(function (error) {
                    if (error.response.status === 401) {
                        router.push({ path: '/login' })
                    }

                });
        }
    }
})