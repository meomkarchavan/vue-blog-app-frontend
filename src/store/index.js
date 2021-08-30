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
        isSignedIn: false,
        user: {
            "userid": "3DBBD8",
            "firstname": "omkar",
            "lastname": "chavan",
            "email": "test123@gmail.com",
            "username": "omkar123",
            "password": "strongpass"
        }
    },
    mutations: {

        SET_TODO(state, todo) {
            state.active_el = todo.todoid;
            state.todo = todo;
        },
        SET_TODOLIST(state, todoList) {
            state.todoList = todoList
        },
        // setAndLoginUser(state, user) {
        //     state.user.username = user.username
        //     state.user.password = user.password
        // },
        // setIsSignedIn(state) {
        //     if (JSON.parse(localStorage.getItem("access_token")) != null) {
        //         state.isSignedIn = true
        //     }
        // },
        MARK_DONE(state, todo) {
            state.todo.done = !todo.done
        },
        ADD_TODO(state, todo) {
            todo.userid = state.user.userid
            state.todoList.push(todo)

        },
        DELETE_TODO(state, todo) {
            state.todoList = state.todoList.filter((item) => item.todoid !== todo.todoid)
        }



    }, actions: {
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