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
        SET_USER(state) {
            var user = JSON.parse(localStorage.getItem("user"))
            if (user != null) {
                state.user = user
                state.isSignedIn = true
            }
            if (user.role == "admin") {
                state.isAdmin = true
            } else {
                state.isAdmin = false
            }
        },
        LOGIN(state, data) {
            if (data != null) {
                localStorage.setItem('access_token', data.token.access_token)
                localStorage.setItem('refresh_token', data.token.refresh_token)
                localStorage.setItem('user', JSON.stringify(data.user))
                state.user = data.user
                state.isSignedIn = true
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
        ADD_PASS(state, pass) {
            pass.userid = state.user.userid
            state.passList.push(pass)

        },
        DELETE_PASS(state, pass) {
            state.passList = state.passList.filter((item) => item.passid !== pass.passid)
        },
        APPROVE(state, pass) {
            state.passList.find(item => item.passid == pass.passid).approved = true
            
            state.passList.find(item => item.passid == pass.passid).rejected = false
        },
        REJECT(state, pass) {
            state.passList.find(item => item.passid == pass.passid).approved = false
 
            state.passList.find(item => item.passid == pass.passid).rejected = true
        }


    }, actions: {
        applyPass(context, pass) {
            axios.post("/api/pass/add", pass,
                {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem("access_token") //the token is a variable which holds the token
                    }
                }
            )
                .then(function (response) {
                    if (response.data != null) {
                        context.commit('ADD_PASS', response.data);
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
            commit('SET_USER')

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
        rejectPass({ commit }, pass) {
            pass.rejected=true
            pass.approved=false
            axios
                .post("/api/pass/update", pass,
                    {
                        headers: {
                            Authorization: 'Bearer ' + localStorage.getItem("access_token") //the token is a variable which holds the token
                        }
                    })
                .then(function (response) {
                    console.log(response.data);
                    if (response.status === 200) {
                        commit('REJECT',pass)
                    }
                })
                .catch(function (error) {

                    console.log(error);
                });
        },
        approvePass({ commit }, pass) {
            
            pass.rejected=false
            pass.approved=true
            axios
                .post("/api/pass/update", pass,
                    {
                        headers: {
                            Authorization: 'Bearer ' + localStorage.getItem("access_token") //the token is a variable which holds the token
                        }
                    })
                .then(function (response) {
                    console.log(response.data);
                    if (response.status === 200) {
                        commit('APPROVE',pass)
                    }
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
        loadUserPassList(context) {
            var url;
            if(context.state.isAdmin){
                url="/api/pass/"
            }else{
                var user = JSON.parse(localStorage.getItem("user"))
               url= "/api/pass/" + user.userid
            }
            axios
                .get(url,
                    {
                        headers: {
                            Authorization: 'Bearer ' + localStorage.getItem("access_token") //the token is a variable which holds the token
                        }
                    }
                )
                .then(function (response) {
                    if (response.data != null) {
                        context.commit('SET_PASSLIST', response.data);
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