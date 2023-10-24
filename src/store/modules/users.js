import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

const state = {
  users: [],
  activeTab: null,
  searchQuery: '',
  isLoading: false,
  selectedUser: null,
  notFoundText: null,
  isError: null,
  page: 1,
  limit: 10,
  totalPages: 0
};

const mutations = {
    SET_USERS(state, users) {
      state.users = users;
    },
    SET_ACTIVE_TAB(state, tabId) {
      state.activeTab = tabId;
    },
    SET_SEARCH_QUERY(state, query) {
      state.searchQuery = query;
    },
    SET_NOT_FOUNND_TEXT(state, text) {
      state.notFoundText = text;
    },
    SET_LOADING(state, loading) {
      state.isLoading = loading;
    },
    SET_SELECTED_USER(state, user) {
      state.selectedUser = user;
    },
    SET_CHANGE_PAGE(state, page) {
      state.page = page;
    },
    SET_ERROR(state, error) {
      state.isError = error;
    }
};

const filter = (name) => {
  return name.split(" ");
};

const actions = {
  async fetchUsers({ commit, state }, query) {
    commit('SET_LOADING', true);
    try{ 
        const responseUsername = await axios.get(`/users`, {
          params: {
            username: filter(query),
            _page: state.page,
            _limit: state.limit
          },
          paramsSerializer: {
            indexes: null
          }
        });
        const responseID = await axios.get(`/users`, {
          params: {
            id: filter(query),
            _page: state.page,
            _limit: state.limit
          },
          paramsSerializer: {
            indexes: null
          }
        });
        const users = [...responseUsername.data, ...responseID.data];
        state.totalPages = Math.ceil(responseUsername.headers['x-total-count'] / state.limit);

          if (users.length > 0) {
          commit('SET_USERS', users);
          commit('SET_SEARCH_QUERY', query);
          commit('SET_NOT_FOUNND_TEXT', null);
          commit('SET_ACTIVE_TAB', null);
        
          } else {
            commit('SET_USERS', []);
            commit('SET_NOT_FOUNND_TEXT', 'ничего не найдено');
            commit('SET_ACTIVE_TAB', null);
          }
        
    } catch(error) {
      commit('SET_USERS', []);
      commit('SET_ERROR', error.message);
      console.error(error);
    }  finally {
      commit('SET_LOADING', false);
    }
  },
  selectUser({ commit }, userId) {
    try {
      commit('SET_ACTIVE_TAB', userId);
    } catch(error){
      commit('SET_ACTIVE_TAB', null);
      console.error(error);
    }
  },
};

const getters = { 
  selectedUser(state) {
    return state.users.find((user) => user.id === state.activeTab);
  }  
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}