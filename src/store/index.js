import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
import router from '../router';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        passList: [],
        pass: {},
        active_el: 0,
        isSignedIn: false,
        isAdmin: false,
        user: {},
        // user: {
        //     "userid": "3DBBD8",
        //     "firstname": "omkar",
        //     "lastname": "chavan",
        //     "email": "test123@gmail.com",
        //     "username": "omkar123",
        //     "password": "strongpass"
        // },
        purposeList: {}
    },
    mutations: {
        SET_PURPOSE(state, purposeList) {
            state.purposeList = purposeList;
        },
        SET_PASS(state, pass) {
            state.active_el = pass.passid;
            state.pass = pass;
        },
        SET_PASSLIST(state, passList) {
            state.passList = passList
        },
        setAndLoginUser(state, user) {
            state.user.username = user.username
            state.user.password = user.password
        },
        LOGIN(state, data) {
            console.log(data);

            if (data != null) {
                localStorage.setItem('access_token', data.token.access_token)
                localStorage.setItem('refresh_token', data.token.refresh_token)
                state.user = data.user
                if (data.user.role == "admin") {
                    state.isAdmin = true
                }
            }
            if (localStorage.getItem("access_token") != null) {
                state.isSignedIn = true
            }

        },
        LOGOUT(state) {
            localStorage.removeItem("access_token");
            localStorage.removeItem("refresh_token");
            state.isSignedIn = false
        },
        MARK_DONE(state, todo) {
            state.todo.done = !todo.done
        },
        ADD_PASS(state, pass) {
            pass.userid = state.user.userid
            state.passList.push(pass)

        },
        DELETE_TODO(state, pass) {
            state.passList = state.passList.filter((item) => item.passid !== pass.passid)
        }



    }, actions: {
        applyPass(context){
            axios
                .get("/api/pass/add",
                    {
                        headers: {
                            Authorization: 'Bearer ' + localStorage.getItem("access_token") //the token is a variable which holds the token
                        }
                    }
                )
                .then(function (response) {
                    if (response.data != null) {
                        context.commit('SET_TODOLIST', response.data);
                    }
                })
                .catch(function (error) {
                    if (error.response.status === 401) {
                        localStorage.removeItem("access_token")
                        context.state.isSignedIn = false
                        router.push({ path: '/login' })
                    }

                });
        },
        checkToken({ commit }) {
            commit('LOGIN')

        },
        logOut({ commit }) {
            commit('LOGOUT')

        },
        addTodo({ commit }, todo) {
            commit('ADD_TODO', todo)
            // TODO add in db
        },
        deleteTodo({ commit }, todo) {
            commit('DELETE_TODO', todo)

            // TODO delete in db
        },
        completeTodo({ commit }, todo) {
            commit('MARK_DONE', todo)
            axios
                .post("/api/todo/update", todo)
                .then(function (response) {
                    console.log(response.data)
                })
                .catch(function (error) {

                    console.log(error);
                });
        },
        login({ commit }, user) {
            axios
                .post("/api/login", user)
                .then(function (response) {

                    commit('LOGIN', response.data)
                    if (response.status === 200) {
                        router.push({ path: '/' })
                    }
                })
                .catch(function (error) {

                    console.log(error);
                });
        },
        loadPurposeList(context) {
            axios
                .get("/api/purpose",
            )
                .then(function (response) {
                    if (response.data != null) {
                        console.log(response.data);
                        context.commit('SET_PURPOSE', response.data);
                    }
                })
                .catch(function (error) {
                    if (error.response.status === 401) {
                        localStorage.removeItem("access_token")
                        context.state.isSignedIn = false
                        router.push({ path: '/login' })
                    }

                });
        },
        loadTodoList(context) {
            axios
                .get("/api/pass/",
                    {
                        headers: {
                            Authorization: 'Bearer ' + localStorage.getItem("access_token") //the token is a variable which holds the token
                        }
                    }
                )
                .then(function (response) {
                    if (response.data != null) {
                        context.commit('SET_TODOLIST', response.data);
                    }
                })
                .catch(function (error) {
                    if (error.response.status === 401) {
                        localStorage.removeItem("access_token")
                        context.state.isSignedIn = false
                        router.push({ path: '/login' })
                    }

                });
        }
    },
})