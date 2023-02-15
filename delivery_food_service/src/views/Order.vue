<template>
  <div>
    <a
      href="#"
      @click.prevent="$router.go(-1)"
      class="back-link block"
      v-if="!orderFlg"
    >
      <i class="fas fa-chevron-left back-link_icon"></i>
      戻る
    </a>
    <router-link to="/" class="back-link block" v-else>
      <i class="fas fa-chevron-left back-link_icon"></i>
      ホームへ戻る
    </router-link>
    <p class="page-title" v-show="orderFlg">ご注文が完了しました</p>
    <h2 class="main-cnt_title" v-if="!orderFlg">注文確認</h2>
    <h2 class="main-cnt_title" v-else>注文内容</h2>
    <div v-if="loadingFlg" class="loading">
      {{ loadingMessage }}
      <i class="fas fa-spinner icon loading-icon"></i>
    </div>
    <div v-else-if="!orderFlg" class="main-cnt">
      <div v-if="items.length > 0">
        <div class="main-cnt">
          <div class="check-box">
            <ul class="list-cnt">
              <li class="list-cnt_list" v-for="item in items" :key="item">
                <h3 class="list-cnt_title">
                  {{ item.name
                  }}<span class="list-cnt_title-sub"
                    >{{ item.quantity }}個</span
                  >
                </h3>
                <span class="list-cnt_price"
                  >￥{{ item.price * item.quantity }}</span
                >
              </li>
            </ul>
            <p class="result-box">合計：￥{{ priceTotal }}</p>
          </div>
        </div>
        <div class="main-cnt">
          <h2 class="main-cnt_title">お客様情報</h2>
          <form method="post" class="form-cnt">
            <p class="form-cnt_label">氏名</p>
            <input
              class="form-cnt_input"
              type="text"
              v-model="name"
              placeholder="山田太郎"
            />
            <p class="form-cnt_label">電話番号（ハイフンなし）</p>
            <input
              class="form-cnt_input"
              type="tel"
              v-model="number"
              placeholder="1234567890"
            />
            <p class="form-cnt_label">郵便番号（ハイフンなし）</p>
            <input
              class="form-cnt_input"
              type="number"
              v-model="zip_code"
              placeholder="4640000"
            />
            <p class="form-cnt_label">住所</p>
            <input
              class="form-cnt_input"
              type="text"
              v-model="address"
              placeholder="愛知県常滑市"
            />
          </form>
          <a href="#" @click.prevent="orderExe" role="button" class="btn block">
            注文<i class="fas fa-shopping-cart icon"></i>
          </a>
        </div>
      </div>
      <div v-else class="page-text">カートに商品はありません</div>
    </div>
    <div v-else>
      <div class="main-cnt">
        <div class="check-box">
          <ul class="list-cnt">
            <li class="list-cnt_list" v-for="item in items" :key="item">
              <h3 class="list-cnt_title">
                {{ item.name
                }}<span class="list-cnt_title-sub">{{ item.quantity }}個</span>
              </h3>
              <span class="list-cnt_price"
                >￥{{ item.price * item.quantity }}</span
              >
            </li>
          </ul>
          <p class="result-box">合計：￥{{ priceTotal }}</p>
        </div>
      </div>
      <div class="main-cnt">
        <h2 class="main-cnt_title">お客様情報</h2>
        <div class="check-box">
          <ul class="list-cnt">
            <li class="list-cnt_list">氏名：{{ name }}</li>
            <li class="list-cnt_list">電話番号：{{ number }}</li>
            <li class="list-cnt_list">郵便番号：{{ zip_code }}</li>
            <li class="list-cnt_list">住所：{{ address }}</li>
          </ul>
        </div>
      </div>
    </div>
    <transition name="alert">
      <div v-show="alertFlg" class="alert">{{ alertMessage }}</div>
    </transition>
  </div>
</template>

<script>
import { postJson } from "../common.js";
export default {
  data() {
    return {
      loadingFlg: false,
      loadingMessage: "読み込み中",
      alertFlg: false,
      alertMessage: "",
      orderFlg: false,
      items: [],
      priceTotal: 0,
      name: "山田太郎",
      number: "09000000000",
      zip_code: "4640000",
      address: "愛知県常滑市",
    };
  },
  created() {
    this.items = this.$store.getters.cartList;
    this.priceTotal = this.$store.getters.priceTotal;
  },
  methods: {
    showAlert(message) {
      this.alertFlg = true;
      this.alertMessage = message;
      setTimeout(() => {
        this.alertFlg = false;
      }, 3000);
    },
    async orderExe() {
      if (confirm("注文を送信しますか？")) {
        this.loadingFlg = true;
        this.loadingMessage = "注文を送信中";

        let orderItems = [];
        this.items.forEach((item) => {
          orderItems.push({
            id: item.id,
            quantity: item.quantity,
          });
        });

        const postData = {
          items: orderItems,
          name: this.name,
          number: this.number,
          zip_code: this.zip_code,
          address: this.address,
        };

        const shopId = this.$store.getters.cartShop.id;
        const response = await postJson(`order/${shopId}`, postData);
        if (response) {
          this.loadingFlg = false;
          switch (response.status) {
            case 200:
            case 201:
              this.orderFlg = true;
              this.$store.dispatch("clearCart");
              break;
            case 400:
              this.showAlert(
                "ネットワークが混雑しています、時間をおいて再度ご注文ください"
              );
              break;
            case 404:
              this.showAlert("ご注文先の店舗が存在しません");
              break;
            default:
              this.showAlert("不明なエラーが発生しました");
          }
        }
      }
    },
  },
};
</script>
