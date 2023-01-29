import { createStore } from "vuex";
import { User } from "@/models/user";
import productsModule from "./products";

export interface IState {
  authUser: User | null;
}

export default createStore<IState>({
  state: {
    authUser: null,
  },
  getters: {
    userProfile(state) {
      return state.authUser;
    },
  },
  mutations: {
    logIn(state, user: User) {
      state.authUser = user;
    },
  },
  actions: {},
  modules: {
    products: productsModule,
  },
});
