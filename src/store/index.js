import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
import router from '../router';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        todoList: [],
        todo: {},
        active_el: 0,
        user: {},
        isSignedIn: false,
    },
    mutations: {
        likeTodo(state, todo) {
            let index = state.todoList.findIndex(p => p.todoid == todo.todoid);
            if (index !== -1) {

                state.todoList[index].likes++
            }
        },
        setTodo(state, todo) {
            state.active_el = todo.todoid;
            state.todo = todo;
        },
        setTodoList(state, todoList) {
            state.todoList = todoList
        },
        setAndLoginUser(state, user) {
            state.user.username = user.username
            state.user.password = user.password
        },
        setIsSignedIn(state) {
            if (JSON.parse(localStorage.getItem("access_token")) != null) {
                state.isSignedIn = true
            }
        }, markDone(state, todo) {
            state.todo.completed = !todo.completed
        },

    }, actions: {
        completeTodo({ commit }, todo) {
            commit('markDone', todo)
        },
        login(context, user) {
            axios
                .post("/api/login", user)
                .then(function (response) {
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
        loadTodoList(context) {
            axios
                .get("/api/todo/",
                    {
                        headers: {
                            Authorization: 'Bearer ' + localStorage.getItem("access_token") //the token is a variable which holds the token
                        }
                    }
                )
                .then(function (response) {
                    if (response.data != null) {
                        context.commit('setTodoList', response.data);
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
    }
})