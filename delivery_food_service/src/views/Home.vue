<template>
  <div>
    <div v-if="shops">
      <div class="search-cnt">
        <h2 class="search-cnt_title">ジャンルで検索</h2>
        <div class="search-cnt_inner">
          <div class="search-cnt_btn-box">
            <button class="search-cnt_btn">フード</button>
            <button class="search-cnt_btn">マップ</button>
          </div>
          <div class="search-cnt_form-box">
            <input type="text" class="search-cnt_input" placeholder="カレー" />
            <button class="search-cnt_submit">
              <i class="fas fa-search"></i>
            </button>
          </div>
          <ul class="search-cnt_list-box">
            <li class="search-cnt_list">天津飯</li>
            <li class="search-cnt_list">ラーメン</li>
            <li class="search-cnt_list">チンジャオロース</li>
            <li class="search-cnt_list">焼きそば</li>
            <li class="search-cnt_list">サラダ</li>
            <li class="search-cnt_list">タコス</li>
          </ul>
        </div>
      </div>
      <div class="main-cnt">
        <h2 class="main-cnt_title">店舗一覧</h2>
        <div class="choice-btn_box">
          <a
            href="#"
            @click.prevent="choiceShops('priceSortFlg')"
            class="choice-btn"
          >
            <span v-show="priceSortFlg"
              >安い順<i class="fas fa-sort-amount-down-alt icon"></i
            ></span>
            <span v-show="!priceSortFlg"
              >高い順<i class="fas fa-sort-amount-down icon"></i
            ></span>
          </a>
          <a
            href="#"
            @click.prevent="choiceShops('openingFlg')"
            class="choice-btn"
          >
            <span v-show="openingFlg"
              >営業中<i class="fas fa-clock icon"></i
            ></span>
            <span v-show="!openingFlg"
              >全店舗<i class="fas fa-home icon"></i
            ></span>
          </a>
          <a href="#" class="choice-btn">
            <span>人気順<i class="fas fa-star icon"></i></span>
          </a>
        </div>
        <ul class="sort-box">
          <li class="card-cnt" v-for="shop in shops" :key="shop">
            <router-link :to="`/shop/${shop.id}`">
              <div
                class="card-cnt_img"
                :style="`background-image: url(${shop.photo})`"
              ></div>
              <div class="card-cnt_inner">
                <h3 class="card-cnt_title">{{ shop.name }}</h3>
                <p>
                  営業時間：{{ shop.opening_time }}～{{ shop.closing_time }}
                </p>
                <p>価格帯：￥{{ shop.price_range }}</p>
                <span class="favo">4.5<i class="fas fa-heart icon"></i></span>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div v-if="loadingFlg" class="loading">
      {{ loadingMessage }}
      <i class="fas fa-spinner icon loading-icon"></i>
    </div>
    <transition name="alert">
      <div v-show="alertFlg">{{ alertMessage }}</div>
    </transition>
  </div>
</template>

<script>
import { getJson } from "../common.js";
export default {
  data() {
    return {
      loadingFlg: true,
      loadingMessage: "読み込み中",
      alertFlg: false,
      alertMessage: "",
      priceSortFlg: true,
      openingFlg: false,
      shops: [],
    };
  },
  async created() {
    const sortPrice = `price_range_sort=${this.priceSortFlg}`;
    const openingOnly = `opening_only=${this.openingFlg}`;
    const uri = `shops?${sortPrice}&${openingOnly}`;
    const response = await getJson(uri);
    if (response) {
      switch (response.status) {
        case 200:
          this.shops = await response.json();
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
    async choiceShops(parameter) {
      this.loadingFlg = true;
      this.loadingMessage = "読み込み中";
      switch (parameter) {
        case "priceSortFlg":
          this.priceSortFlg = !this.priceSortFlg;
          break;
        case "openingFlg":
          this.openingFlg = !this.openingFlg;
          break;
      }

      const sortPrice = `price_range_sort=${this.priceSortFlg}`;
      const openingOnly = `opening_only=${this.openingFlg}`;
      const uri = `shops?${sortPrice}&${openingOnly}`;
      const response = await getJson(uri);
      if (response) {
        switch (response.status) {
          case 200:
            this.shops = await response.json();
            this.loadingFlg = false;
            break;
          default:
            console.log(response);
            this.showAlert("不明なエラーが発生しました");
        }
      }
    },
  },
};
</script>
