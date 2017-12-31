import axios from "axios";
import Cookies from "js-cookie";
import * as types from "../mutation-types";

// state
export const state = {
  user: null,
  token: Cookies.get("token")
};

// getters
export const getters = {
  user: state => state.user,
  token: state => state.token,
  check: state => state.user !== null
};

// mutations
export const mutations = {
  [types.SAVE_TOKEN](state, { token, remember }) {
    state.token = token;
    Cookies.set("token", token, { expires: remember ? 365 : null });
  },

  [types.FETCH_USER_SUCCESS](state, { user }) {
    state.user = user;
  },

  [types.FETCH_USER_FAILURE](state) {
    state.token = null;
    Cookies.remove("token");
  },

  [types.LOGOUT](state) {
    state.user = null;
    state.token = null;

    Cookies.remove("token");
  },

  [types.UPDATE_USER](state, { user }) {
    state.user = user;
  }
};

// actions
export const actions = {
  async login({ commit, dispatch }, payload) {
    try {
      const { data } = await axios.post("/api/v1/auth/login", payload);
      console.log(payload)
      dispatch("saveToken", {
        token: data.token,
        remember: payload.remember
      });
      await dispatch("fetchUser");
      dispatch(
        "noti",
        { message: "You are Log In!", type: "success" },
        { root: true }
      );
    } catch (e) {
      const error = e.response.data.errors;
      dispatch(
        "noti",
        { message: error.email[0], type: "error" },
        { root: true }
      );
      throw e
    }
  },

  async register({ commit, dispatch }, payload) {
    try {
      const { data } = await axios.post("/api/v1/auth/register", payload);
      const { data: { token } } = await axios.post(
        "/api/v1/auth/login",
        payload
      );
      dispatch("saveToken", {
        token: token,
        remember: null
      });
      await dispatch("updateUser", { user: data });
      dispatch(
        "noti",
        { message: "You are Log In!", type: "success" },
        { root: true }
      );
    } catch (e) {
      throw e
    }
  },

  async forgot({ commit, dispatch }, payload) {
    try {
      const { data } = await axios.post("/api/v1/auth/password/email", payload);
      dispatch(
        "noti",
        {
          message: "We have e-mailed your password reset link!",
          type: "success"
        },
        { root: true }
      );
    } catch (e) {
      throw e
    }
  },

  async reset({ commit, dispatch }, payload) {
    try {
      const { data } = await axios.post("/api/v1/auth/password/reset", payload);
      dispatch(
        "noti",
        { message: data.status, type: "success" },
        { root: true }
      );
    } catch (e) {
      throw e
    }
  },

  saveToken({ commit, dispatch }, payload) {
    commit(types.SAVE_TOKEN, payload);
  },

  async fetchUser({ commit }) {
    try {
      const { data } = await axios.post("/api/v1/auth/me");
      commit(types.FETCH_USER_SUCCESS, { user: data });
    } catch (e) {
      commit(types.FETCH_USER_FAILURE);
    }
  },

  updateUser({ commit }, payload) {
    commit(types.UPDATE_USER, payload);
  },

  async logout({ commit }) {
    try {
      await axios.post("/api/v1/auth/logout");
    } catch (e) {}
    commit(types.LOGOUT);
  }
};
