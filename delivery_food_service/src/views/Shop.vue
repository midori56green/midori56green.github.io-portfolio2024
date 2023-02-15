<template>
  <div>
    <div v-if="shop">
      <div class="main-cnt">
        <div class="view-cnt" :style="`background-image: url(${shop.photo})`">
          <a
            href="#"
            role="button"
            class="favo-btn"
            v-show="favo"
            @click.prevent="removeFavo"
          >
            <i class="fas fa-star favo-btn_icon"></i>
          </a>
          <a
            href="#"
            role="button"
            class="favo-btn"
            v-show="!favo"
            @click.prevent="addFavo"
          >
            <i class="far fa-star favo-btn_icon"></i>
          </a>
        </div>
        <div class="main-cnt_inner">
          <a href="#" @click.prevent="$router.go(-1)" class="back-link">
            <i class="fas fa-chevron-left back-link_icon"></i>
            戻る
          </a>
          <h2 class="main-cnt_title">{{ shop.name }}</h2>
          <div class="main-cnt_detail">
            <p>営業時間：{{ shop.opening_time }}～{{ shop.closing_time }}</p>
            <p>価格帯：￥{{ shop.price_range }}</p>
          </div>
          <span class="favo">4.5<i class="fas fa-heart icon"></i></span>
        </div>
      </div>
      <div class="main-cnt">
        <h2 class="main-cnt_title">商品一覧</h2>
        <ul class="flex-box">
          <li class="card-cnt" v-for="item in items" :key="item">
            <a href="#" role="button" @click.prevent="showModal(item)">
              <div
                class="card-cnt_img"
                :style="`background-image: url(${item.photo})`"
              ></div>
              <div class="card-cnt_inner">
                <h3 class="card-cnt_title">{{ item.name }}</h3>
                <p>￥{{ item.price }}</p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div v-if="loadingFlg" class="loading">
      {{ loadingMessage }}
      <i class="fas fa-spinner icon loading-icon"></i>
    </div>
    <transition name="alert">
      <div v-show="alertFlg" class="alert">{{ alertMessage }}</div>
    </transition>
    <transition name="modal">
      <div v-show="modalFlg" class="modal-cnt">
        <div class="modal-cnt_scroll">
          <div
            class="modal-cnt_img"
            :style="`background-image: url(${itemDetail.photo})`"
          ></div>
          <a href="#" @click.prevent="closeModal" class="back-link">
            <i class="fas fa-times"></i>
            閉じる
          </a>
          <div class="modal-cnt_inner">
            <h3 class="modal-cnt_title">{{ itemDetail.name }}</h3>
            <p>￥{{ itemDetail.price }}</p>
            <p class="modal-cnt_description">{{ itemDetail.description }}</p>
          </div>
        </div>
        <div class="modal-cnt_box">
          <div class="addcart-box">
            <a
              href="#"
              role="button"
              class="addcart-box_btn minus"
              @click.prevent="minusQuantity"
            ></a>
            <span class="addcart-box_quantity">{{ quantity }}</span>
            <a
              href="#"
              role="button"
              class="addcart-box_btn plus"
              @click.prevent="plusQuantity"
            ></a>
          </div>
          <a href="#" role="button" @click.prevent="addCart" class="btn">
            カートに追加
            <i class="fas fa-shopping-cart"></i>
          </a>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { getJson } from "../common.js";
export default {
  props: ["shopId"],
  data() {
    return {
      loadingFlg: true,
      loadingMessage: "読み込み中",
      alertFlg: false,
      alertMessage: "aaaaaaaaaa",
      modalFlg: false,
      itemDetail: [],
      shop: {},
      items: [],
      favo: false,
      quantity: 1,
    };
  },
  async created() {
    const response = await getJson(`shops/${this.shopId}`);
    if (response) {
      switch (response.status) {
        case 200:
          this.shop = await response.json();
          this.items = this.shop.items;
          this.loadingFlg = false;
          break;
        default:
          console.log(response);
          this.showAlert("不明なエラーが発生しました");
      }
    }
  },
  methods: {
    showAlert(message) {
      this.alertFlg = true;
      this.alertMessage = message;
      setTimeout(() => {
        this.alertFlg = false;
      }, 3000);
    },
    addFavo() {
      this.favo = !this.favo;
      this.showAlert(`${this.shop.name} をお気に入りに追加しました`);
    },
    removeFavo() {
      this.favo = !this.favo;
      this.showAlert(`${this.shop.name} をお気に入りから削除しました`);
    },
    showModal(item) {
      this.modalFlg = true;
      this.itemDetail = item;
    },
    closeModal() {
      this.modalFlg = false;
    },
    minusQuantity() {
      if (this.quantity > 1) {
        this.quantity--;
      }
    },
    plusQuantity() {
      this.quantity++;
    },
    addCart() {
      const cartShop = {
        id: this.shop.id,
        name: this.shop.name,
      };
      const addItem = {
        ...this.itemDetail,
        quantity: this.quantity,
      };
      const data = {
        addItem: addItem,
        shop: cartShop,
      };
      this.$store.dispatch("addCart", data);
      this.showAlert(`${this.itemDetail.name} をカートに追加しました`);
    },
  },
};
</script>
