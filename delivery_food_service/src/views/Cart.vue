<template>
  <div>
    <div v-if="items" class="main-cnt">
      <a href="#" @click.prevent="$router.go(-1)" class="back-link block">
        <i class="fas fa-chevron-left back-link_icon"></i>
        戻る
      </a>
      <h2 class="main-cnt_title">
        カート<span v-show="shop.name">：{{ shop.name }}</span>
      </h2>
      <div v-if="items.length > 0">
        <ul class="list-cnt">
          <li class="list-cnt_list" v-for="item in items" :key="item">
            <h3 class="list-cnt_title">{{ item.name }}</h3>
            <div class="addcart-box">
              <a
                href="#"
                role="button"
                class="addcart-box_btn minus"
                @click.prevent="minusQuantity(item.id)"
              ></a>
              <span class="addcart-box_quantity">{{ item.quantity }}</span>
              <a
                href="#"
                role="button"
                class="addcart-box_btn plus"
                @click.prevent="plusQuantity(item.id)"
              ></a>
            </div>
            <a
              href="#"
              @click.prevent="removeItem(item.id)"
              class="addcart-box_remove"
            ></a>
            <span class="list-cnt_price"
              >￥{{ item.price * item.quantity }}</span
            >
          </li>
        </ul>
        <p class="result-box">合計：￥{{ cartPriceTotal }}</p>
        <router-link to="/order" class="btn block"
          >注文へ進む<i class="fas fa-chevron-right icon"></i
        ></router-link>
      </div>
      <div v-else class="page-text">カートに商品はありません</div>
    </div>
    <div v-if="loadingFlg" class="loading">
      {{ loadingMessage }}
      <i class="fas fa-spinner icon loading-icon"></i>
    </div>
    <transition name="alert">
      <div v-show="alertFlg" class="alert">{{ alertMessage }}</div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loadingFlg: true,
      loadingMessage: "読み込み中",
      alertFlg: false,
      alertMessage: "",
      items: [],
      shop: {},
    };
  },
  created() {
    this.items = this.$store.getters.cartList;
    this.shop = this.$store.getters.cartShop;
    this.loadingFlg = false;
  },
  computed: {
    cartPriceTotal() {
      return this.$store.getters.priceTotal;
    },
  },
  methods: {
    showAlert(message) {
      this.alertFlg = true;
      this.alertMessage = message;
      setTimeout(() => {
        this.alertFlg = false;
      }, 3000);
    },
    minusQuantity(itemId) {
      this.$store.dispatch("minusQuantity", itemId);
    },
    plusQuantity(itemId) {
      this.$store.dispatch("plusQuantity", itemId);
    },
    removeItem(itemId) {
      this.$store.dispatch("removeCart", itemId);
      if (this.items.length < 1) {
        this.shop = {};
      }
    },
  },
};
</script>
