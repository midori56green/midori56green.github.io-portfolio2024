import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [],
    shop: {},
  },
  mutations: {
    addCart(state, data) {
      const addItem = data.addItem;
      const shop = data.shop;

      if (state.cart.length < 1) {
        state.cart.push(addItem);
        state.shop = shop;
        return;
      } else if (state.shop.id != shop.id) {
        if (
          confirm(
            "現在のカートに含まれる商品と店舗が異なります。現在のカートの中身を取り消しますか？"
          )
        ) {
          state.cart = [];
          state.cart.push(addItem);
          state.shop = shop;
          return;
        } else {
          return;
        }
      }

      const index = state.cart.findIndex((data) => {
        return data.id == addItem.id;
      });

      if (index < 0) {
        state.cart.push(addItem);
      } else {
        state.cart[index].quantity += addItem.quantity;
      }
    },
    removeCart(state, itemId) {
      const index = state.cart.findIndex((data) => {
        return data.id == itemId;
      });

      state.cart.splice(index, 1);
      if (state.cart.length < 1) {
        state.shop = {};
      }
    },
    clearCart(state) {
      state.cart = [];
      state.shop = {};
    },
    plusQuantity(state, itemId) {
      const index = state.cart.findIndex((data) => {
        return data.id == itemId;
      });

      state.cart[index].quantity++;
    },
    minusQuantity(state, itemId) {
      const index = state.cart.findIndex((data) => {
        return data.id == itemId;
      });

      if (state.cart[index].quantity > 1) {
        state.cart[index].quantity--;
      }
    },
    save(state) {
      localStorage.setItem("cart", JSON.stringify(state.cart));
      localStorage.setItem("shop", JSON.stringify(state.shop));
    },
    load(state) {
      if (localStorage.getItem("cart")) {
        state.cart = JSON.parse(localStorage.getItem("cart"));
        state.shop = JSON.parse(localStorage.getItem("shop"));
      }
    },
  },
  actions: {
    addCart({ commit }, data) {
      commit("addCart", data);
      commit("save");
    },
    removeCart({ commit }, data) {
      commit("removeCart", data);
      commit("save");
    },
    clearCart({ commit }, data) {
      commit("clearCart", data);
      commit("save");
    },
    plusQuantity({ commit }, data) {
      commit("plusQuantity", data);
      commit("save");
    },

    minusQuantity({ commit }, data) {
      commit("minusQuantity", data);
      commit("save");
    },
    load({ commit }) {
      commit("load");
    },
  },
  getters: {
    cartList(state) {
      return state.cart;
    },
    cartShop(state) {
      return state.shop;
    },
    itemTotal(state) {
      return state.cart.reduce((count, item) => {
        return (count += item.quantity);
      }, 0);
    },
    priceTotal(state) {
      return state.cart.reduce((count, item) => {
        return (count += item.quantity * item.price);
      }, 0);
    },
  },
});
