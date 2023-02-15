<template>
  <div>
    <header class="header">
      <h1 class="logo">
        <router-link to="/" class="logo-inner"
          ><img src="/img/logo.svg" alt="セントレア商工会 Deli"
        /></router-link>
      </h1>
    </header>
    <nav class="main-nav">
      <ul class="main-nav_ul">
        <li class="main-nav_list">
          <router-link to="/" class="main-nav_link">
            <i class="fas fa-home main-nav_icon"></i>
            <span class="main-nav_text">ホーム</span>
          </router-link>
        </li>
        <li class="main-nav_list">
          <router-link to="/cart" class="main-nav_link">
            <i class="fas fa-shopping-cart main-nav_icon"></i>
            <span class="main-nav_alert" v-show="cartItemTotal > 0">{{
              cartItemTotal
            }}</span>
            <span class="main-nav_text">カート</span>
          </router-link>
        </li>
        <li class="main-nav_list">
          <router-link to="/favo" class="main-nav_link">
            <i class="fas fa-star main-nav_icon"></i>
            <span class="main-nav_text">お気に入り</span>
          </router-link>
        </li>
        <li class="main-nav_list">
          <router-link to="/mypage" class="main-nav_link">
            <i class="fas fa-user main-nav_icon"></i>
            <span class="main-nav_text">マイページ</span>
          </router-link>
        </li>
      </ul>
    </nav>
    <router-view />
  </div>
</template>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Yu Gothic";
  font-weight: normal;
  line-height: 1.5em;
}
body {
  position: relative;
  padding: 3.3rem 0 4rem;
}
img {
  display: block;
  width: 100%;
  height: auto;
}
li {
  list-style: none;
}
a {
  text-decoration: none;
}
.icon {
  margin-left: 0.5rem;
}
.page-title {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  font-weight: bold;
  text-align: center;
  color: #f3995a;
}
.page-text {
  padding: 0 1rem;
}

.modal-cnt {
  position: fixed;
  bottom: 4rem;
  left: 0;
  width: 100%;
  height: calc(100vh - 3.5rem);
  background: #fff;
  z-index: 4;
  &_scroll {
    padding-bottom: 1rem;
    height: calc(100% - 7.7rem);
    overflow-y: auto;
  }
  &_img {
    height: 16rem;
    margin-bottom: 1rem;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  &_inner {
    padding: 0 1rem;
  }
  &_title {
    margin-bottom: 1rem;
  }
  &_box {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    border-top: 1px solid #ccc;
    padding: 1rem;
    background: #fff;
  }
}
.modal-enter-active,
.modal-leave-active {
  transition: transform 0.3s;
}
.modal-enter,
.modal-leave-to {
  transform: translateY(100%);
}

.alert-enter-active,
.alert-leave-active {
  transition: opacity 0.3s;
}
.alert-enter,
.alert-leave-to {
  opacity: 0;
}
.alert {
  position: fixed;
  top: 1rem;
  left: 1rem;
  padding: 1rem;
  width: calc(100% - 2rem);
  border-radius: 0.5rem;
  background: rgba(0, 0, 0, 0.5);
  z-index: 5;
  color: #fff;
  text-align: center;
  font-size: 1.2rem;
}
.loading {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(100vh - 4rem);
  background: rgba(255, 255, 255, 0.7);
  text-align: center;
  font-size: 1.2rem;
  line-height: calc(100vh - 4rem);
  &-icon {
    animation: loading infinite 3s linear;
  }
}
@keyframes loading {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
.btn {
  display: block;
  width: 100%;
  padding: 0.5rem 0;
  background: #f3995a;
  color: #fff;
  text-align: center;
  font-size: 1.1rem;
  &.block {
    padding: 0.7rem 0;
    width: calc(100% - 2rem);
    margin: 1.5rem 1rem 1rem;
  }
}

/* header */

.header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 1rem 1.5rem;
  background: url("/static/img/header.png") repeat-x top left / contain;
  z-index: 3;
}

.logo {
  max-width: 250px;
  margin: 0 auto;
}

/* main-nav */
.main-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 4rem;
  background: #fff;
  border-top: 1px solid #ccc;
  z-index: 5;
  &_ul {
    display: flex;
    height: 100%;
    justify-content: space-between;
  }
  &_list {
    width: 100%;
    height: 100%;
    border-right: 1px solid #ccc;
    &:last-child {
      border-right: none;
    }
  }
  &_link {
    position: relative;
    display: block;
    height: 100%;
    text-align: center;
  }
  &_icon {
    position: absolute;
    top: 0.5rem;
    right: 0;
    left: 0;
    margin: 0 auto;
    font-size: 1.5rem;
    color: #f3995a;
  }
  &_text {
    position: absolute;
    bottom: 0.5rem;
    right: 0;
    left: 0;
    margin: 0 auto;
    font-size: 0.6rem;
    color: #333;
  }
  &_alert {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    display: block;
    width: 1rem;
    border-radius: 100%;
    background: #f35a5a;
    line-height: 1rem;
    text-align: center;
    color: #fff;
    font-size: 0.6rem;
  }
}

/* main-cnt */
.main-cnt {
  &_title {
    padding: 0 1rem 1rem;
  }
  &_detail {
    padding: 0 1rem 1rem;
    border-bottom: 1px solid #ccc;
    margin-bottom: 1rem;
  }
  &_inner {
    position: relative;
    .favo {
      top: 0;
      right: 1rem;
    }
  }
}

.choice-btn {
  display: inline-block;
  padding: 0.2rem 0.5rem;
  border: 1px solid #ccc;
  background: #eee;
}
/* search */
.search-cnt {
  width: 100%;
  padding: 1.5rem 1rem 1rem;
  margin-bottom: 1.5rem;
  background: url(/static/img/search.jpg) no-repeat center center / cover;
  &_title {
    margin-bottom: 1rem;
    color: #fff;
    text-align: center;
  }
  &_inner {
    border-radius: 0.5rem;
    background: #fff;
    overflow: hidden;
  }
  &_btn {
    display: block;
    padding: 0.5rem 0;
    border: 1px solid #ccc;
    border-bottom: none;
    width: 100%;
    background: #fff;
    font-size: 1rem;
    &:last-child {
      border-bottom: 1px solid #ccc;
      border-left: none;
      background: #eee;
    }
    &-box {
      display: flex;
      justify-content: space-between;
      margin-bottom: 1rem;
    }
  }
  &_form-box {
    display: flex;
    margin: 0 1rem;
  }
  &_input {
    width: calc(100% - 3rem);
    padding: 0.5rem;
    font-size: 1.1rem;
  }
  &_submit {
    width: 3rem;
    border: none;
    background: #f3995a;
    color: #fff;
  }
  &_list {
    padding: 0.3rem 1rem;
    border-radius: 1rem;
    background: #ccc;
    margin: 0 0.1rem 1rem;
    font-size: 0.9rem;
    &-box {
      display: flex;
      padding: 1rem;
      justify-content: space-around;
      flex-wrap: wrap;
    }
  }
}

.back-link {
  display: inline-block;
  margin: 0 0 1rem 1rem;
  color: #f3995a;
  &.block {
    margin-top: 2rem;
  }
}

.view-cnt {
  position: relative;
  width: 100%;
  height: 12rem;
  margin-bottom: 1rem;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #ccc;
}
.favo-btn {
  position: absolute;
  display: block;
  top: 1.5rem;
  right: 1rem;
  width: 2.5rem;
  border-radius: 100%;
  background: #fff;
  height: 2.5rem;
  text-align: center;
  &_icon {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    margin: auto;
    font-size: 1.5rem;
    color: #f3995a;
  }
}

.choice-btn {
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  margin-right: 0.5rem;
  color: #333;
  &_box {
    padding: 0 1rem 1rem;
  }
}

.favo {
  position: absolute;
  color: #f35a5a;
}

.card-cnt {
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  overflow: hidden;
  &_img {
    width: 100%;
    height: 10rem;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  &_inner {
    position: relative;
    padding: 0.5rem;
    font-size: 0.9rem;
    color: #333;
  }
  &_title {
    margin-bottom: 0.5rem;
  }
  .favo {
    top: 0.5rem;
    right: 0.5rem;
  }
}

.sort-box {
  padding: 0 1rem 1rem;
}

/* flex-box */
.flex-box {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 1rem;
  .card-cnt {
    width: calc(50% - 0.5rem);
    &_img {
      height: 7rem;
    }
  }
}

.addcart-box {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  &_btn {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 100%;
    border: 1px solid #ccc;
    background-size: 60%;
    background-position: center center;
    background-repeat: no-repeat;
    &.plus {
      background-image: url(/static/img/plus.svg);
    }
    &.minus {
      background-image: url(/static/img/minus.svg);
    }
  }
  &_quantity {
    font-size: 1.6rem;
    line-height: 1.5;
  }
}

.list-cnt {
  margin: 0 1rem 0.5rem;
  &_list {
    position: relative;
    padding: 1rem 0;
    border-bottom: 1px solid #ccc;
  }
  &_title {
    display: inline-block;
    width: calc(100% - 5rem);
  }
  .addcart-box {
    max-width: 180px;
    margin-top: 1rem;
    margin-bottom: 0;
    &_btn {
      width: 2rem;
      height: 2rem;
    }
    &_quantity {
      font-size: 1.2rem;
      line-height: 2rem;
    }
    &_remove {
      position: absolute;
      top: 1rem;
      right: 1rem;
      width: 2rem;
      height: 2rem;
      border: 1px solid #ccc;
      background: url(/static/img/close.svg) no-repeat center / 60%;
    }
  }
  &_price {
    position: absolute;
    bottom: 1rem;
    right: 1rem;
  }
}
.result-box {
  display: block;
  padding: 1rem 1rem 0;
  text-align: right;
  font-weight: bold;
}

.check-box {
  border-radius: 0.5rem;
  border: 1px solid #ccc;
  margin: 0 1rem 2rem;
  .list-cnt {
    margin: 0;
    &_title-sub {
      position: relative;
      display: inline-block;
      padding-left: 0.6rem;
      margin-left: 0.7rem;
      font-size: 0.9rem;
      &::before {
        content: "x";
        position: absolute;
        bottom: 0;
        left: 0;
      }
    }
    &_list {
      padding: 0.5rem;
      &:last-child {
        border-bottom: none;
      }
    }
    &_price {
      height: fit-content;
      top: 0;
      bottom: 0;
      margin: auto 0;
    }
  }
  .result-box {
    border-top: 1px solid #ccc;
    padding-bottom: 1rem;
  }
}

.form-cnt {
  padding: 0 1rem;
  &_label {
    margin-bottom: 0.2rem;
  }
  &_input {
    width: 100%;
    padding: 0.2rem;
    margin-bottom: 1rem;
    font-size: 1.01rem;
  }
}
</style>

<script>
export default {
  created() {
    this.$store.dispatch("load");
  },
  computed: {
    cartItemTotal() {
      return this.$store.getters.itemTotal;
    },
  },
};
</script>
