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
        isSignedIn: false,
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
        },
        setAndLoginUser(state, user) {
            state.user.username = user.username
            state.user.password = user.password
        },
        setIsSignedIn(state) {
            if (JSON.parse(localStorage.getItem("access_token")) != null) {
                state.isSignedIn = true
            }
        }
    }, actions: {
        login(context, user) {
            axios
                .post("/api/login", user)
                .then(function (response) {
                    // context.commit('setTokens', response.data);
                    // localStorage.removeItem("mytime")
                    localStorage.setItem('access_token', response.data.access_token)
                    localStorage.setItem('refresh_token', response.data.refresh_token)
                    context.state.isSignedIn = true
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
                            Authorization: 'Bearer ' + localStorage.getItem("access_token") //the token is a variable which holds the token
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
                        localStorage.removeItem("access_token")
                        context.state.isSignedIn=false
                        router.push({ path: '/login' })
                    }

                });
        }
    }
})