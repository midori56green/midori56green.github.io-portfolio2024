(function(t){function a(a){for(var e,r,c=a[0],o=a[1],l=a[2],p=0,v=[];p<c.length;p++)r=c[p],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&v.push(n[r][0]),n[r]=0;for(e in o)Object.prototype.hasOwnProperty.call(o,e)&&(t[e]=o[e]);u&&u(a);while(v.length)v.shift()();return i.push.apply(i,l||[]),s()}function s(){for(var t,a=0;a<i.length;a++){for(var s=i[a],e=!0,c=1;c<s.length;c++){var o=s[c];0!==n[o]&&(e=!1)}e&&(i.splice(a--,1),t=r(r.s=s[0]))}return t}var e={},n={app:0},i=[];function r(a){if(e[a])return e[a].exports;var s=e[a]={i:a,l:!1,exports:{}};return t[a].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=e,r.d=function(t,a,s){r.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,a){if(1&a&&(t=r(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var e in t)r.d(s,e,function(a){return t[a]}.bind(null,e));return s},r.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(a,"a",a),a},r.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},r.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=a,c=c.slice();for(var l=0;l<c.length;l++)a(c[l]);var u=o;i.push([0,"chunk-vendors"]),s()})({0:function(t,a,s){t.exports=s("56d7")},"56d7":function(t,a,s){"use strict";s.r(a);s("e260"),s("e6cf"),s("cca6"),s("a79d");var e=s("2b0e"),n=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("header",{staticClass:"header"},[s("h1",{staticClass:"logo"},[s("router-link",{staticClass:"logo-inner",attrs:{to:"/"}},[s("img",{attrs:{src:"/img/logo.svg",alt:"セントレア商工会 Deli"}})])],1)]),s("nav",{staticClass:"main-nav"},[s("ul",{staticClass:"main-nav_ul"},[s("li",{staticClass:"main-nav_list"},[s("router-link",{staticClass:"main-nav_link",attrs:{to:"/"}},[s("i",{staticClass:"fas fa-home main-nav_icon"}),s("span",{staticClass:"main-nav_text"},[t._v("ホーム")])])],1),s("li",{staticClass:"main-nav_list"},[s("router-link",{staticClass:"main-nav_link",attrs:{to:"/cart"}},[s("i",{staticClass:"fas fa-shopping-cart main-nav_icon"}),s("span",{directives:[{name:"show",rawName:"v-show",value:t.cartItemTotal>0,expression:"cartItemTotal > 0"}],staticClass:"main-nav_alert"},[t._v(t._s(t.cartItemTotal))]),s("span",{staticClass:"main-nav_text"},[t._v("カート")])])],1),s("li",{staticClass:"main-nav_list"},[s("router-link",{staticClass:"main-nav_link",attrs:{to:"/favo"}},[s("i",{staticClass:"fas fa-star main-nav_icon"}),s("span",{staticClass:"main-nav_text"},[t._v("お気に入り")])])],1),s("li",{staticClass:"main-nav_list"},[s("router-link",{staticClass:"main-nav_link",attrs:{to:"/mypage"}},[s("i",{staticClass:"fas fa-user main-nav_icon"}),s("span",{staticClass:"main-nav_text"},[t._v("マイページ")])])],1)])]),s("router-view")],1)},i=[],r={created:function(){this.$store.dispatch("load")},computed:{cartItemTotal:function(){return this.$store.getters.itemTotal}}},c=r,o=(s("5c0b"),s("2877")),l=Object(o["a"])(c,n,i,!1,null,null,null),u=l.exports,p=s("8c4f"),v=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[t.shops?s("div",[t._m(0),s("div",{staticClass:"main-cnt"},[s("h2",{staticClass:"main-cnt_title"},[t._v("店舗一覧")]),s("div",{staticClass:"choice-btn_box"},[s("a",{staticClass:"choice-btn",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.choiceShops("priceSortFlg")}}},[s("span",{directives:[{name:"show",rawName:"v-show",value:t.priceSortFlg,expression:"priceSortFlg"}]},[t._v("安い順"),s("i",{staticClass:"fas fa-sort-amount-down-alt icon"})]),s("span",{directives:[{name:"show",rawName:"v-show",value:!t.priceSortFlg,expression:"!priceSortFlg"}]},[t._v("高い順"),s("i",{staticClass:"fas fa-sort-amount-down icon"})])]),s("a",{staticClass:"choice-btn",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.choiceShops("openingFlg")}}},[s("span",{directives:[{name:"show",rawName:"v-show",value:t.openingFlg,expression:"openingFlg"}]},[t._v("営業中"),s("i",{staticClass:" fas fa-clock icon"})]),s("span",{directives:[{name:"show",rawName:"v-show",value:!t.openingFlg,expression:"!openingFlg"}]},[t._v("全店舗"),s("i",{staticClass:"fas fa-home icon"})])]),t._m(1)]),s("ul",{staticClass:"sort-box"},t._l(t.shops,(function(a){return s("li",{staticClass:"card-cnt"},[s("router-link",{attrs:{to:"/shop/"+a.id}},[s("div",{staticClass:"card-cnt_img",style:"background-image: url("+a.photo+")"}),s("div",{staticClass:"card-cnt_inner"},[s("h3",{staticClass:"card-cnt_title"},[t._v(t._s(a.name))]),s("p",[t._v("営業時間："+t._s(a.opening_time)+"～"+t._s(a.closing_time))]),s("p",[t._v("価格帯：￥"+t._s(a.price_range))]),s("span",{staticClass:"favo"},[t._v("4.5"),s("i",{staticClass:"fas fa-heart icon"})])])])],1)})),0)])]):t._e(),t.loadingFlg?s("div",{staticClass:"loading"},[t._v(" "+t._s(t.loadingMessage)+" "),s("i",{staticClass:"fas fa-spinner icon loading-icon"})]):t._e(),s("transition",{attrs:{name:"alert"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.alertFlg,expression:"alertFlg"}]},[t._v(t._s(t.alertMessage))])])],1)},d=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"search-cnt"},[s("h2",{staticClass:"search-cnt_title"},[t._v("ジャンルで検索")]),s("div",{staticClass:"search-cnt_inner"},[s("div",{staticClass:"search-cnt_btn-box"},[s("button",{staticClass:"search-cnt_btn"},[t._v("フード")]),s("button",{staticClass:"search-cnt_btn"},[t._v("マップ")])]),s("div",{staticClass:"search-cnt_form-box"},[s("input",{staticClass:"search-cnt_input",attrs:{type:"text",placeholder:"カレー"}}),s("button",{staticClass:"search-cnt_submit"},[s("i",{staticClass:"fas fa-search"})])]),s("ul",{staticClass:"search-cnt_list-box"},[s("li",{staticClass:"search-cnt_list"},[t._v("天津飯")]),s("li",{staticClass:"search-cnt_list"},[t._v("ラーメン")]),s("li",{staticClass:"search-cnt_list"},[t._v("チンジャオロース")]),s("li",{staticClass:"search-cnt_list"},[t._v("焼きそば")]),s("li",{staticClass:"search-cnt_list"},[t._v("サラダ")]),s("li",{staticClass:"search-cnt_list"},[t._v("タコス")])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("a",{staticClass:"choice-btn",attrs:{href:"#"}},[s("span",[t._v("人気順"),s("i",{staticClass:" fas fa-star icon"})])])}],h=(s("99af"),s("96cf"),s("1da1")),m=(s("d3b7"),"http://api.skilljapan.info/api/"),f=function(){var t=Object(h["a"])(regeneratorRuntime.mark((function t(a,s){var e,n,i,r=arguments;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=r.length>2&&void 0!==r[2]&&r[2],t.prev=1,n={"Content-Type":"application/json",Accept:"application/json"},i={method:s,headers:n},e&&(i.body=JSON.stringify(e)),t.next=7,fetch(m+a,i);case 7:return t.abrupt("return",t.sent);case 10:return t.prev=10,t.t0=t["catch"](1),t.abrupt("return",t.t0);case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(a,s){return t.apply(this,arguments)}}(),_=function(){var t=Object(h["a"])(regeneratorRuntime.mark((function t(a){var s,e=arguments;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return s=e.length>1&&void 0!==e[1]&&e[1],t.abrupt("return",f(a,"get",s));case 2:case"end":return t.stop()}}),t)})));return function(a){return t.apply(this,arguments)}}(),g=function(){var t=Object(h["a"])(regeneratorRuntime.mark((function t(a){var s,e=arguments;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return s=e.length>1&&void 0!==e[1]&&e[1],t.abrupt("return",f(a,"post",s));case 2:case"end":return t.stop()}}),t)})));return function(a){return t.apply(this,arguments)}}(),C={data:function(){return{loadingFlg:!0,loadingMessage:"読み込み中",alertFlg:!1,alertMessage:"",priceSortFlg:!0,openingFlg:!1,shops:[]}},created:function(){var t=this;return Object(h["a"])(regeneratorRuntime.mark((function a(){var s,e,n,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return s="price_range_sort=".concat(t.priceSortFlg),e="opening_only=".concat(t.openingFlg),n="shops?".concat(s,"&").concat(e),a.next=5,_(n);case 5:if(i=a.sent,!i){a.next=17;break}a.t0=i.status,a.next=200===a.t0?10:15;break;case 10:return a.next=12,i.json();case 12:return t.shops=a.sent,t.loadingFlg=!1,a.abrupt("break",17);case 15:console.log(i),t.showAlert("不明なエラーが発生しました");case 17:case"end":return a.stop()}}),a)})))()},methods:{showAlert:function(t){var a=this;this.alertFlg=!0,this.alertMessage=t,setTimeout((function(){a.alertFlg=!1}),3e3)},choiceShops:function(t){var a=this;return Object(h["a"])(regeneratorRuntime.mark((function s(){var e,n,i,r;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:a.loadingFlg=!0,a.loadingMessage="読み込み中",s.t0=t,s.next="priceSortFlg"===s.t0?5:"openingFlg"===s.t0?7:9;break;case 5:return a.priceSortFlg=!a.priceSortFlg,s.abrupt("break",9);case 7:return a.openingFlg=!a.openingFlg,s.abrupt("break",9);case 9:return e="price_range_sort=".concat(a.priceSortFlg),n="opening_only=".concat(a.openingFlg),i="shops?".concat(e,"&").concat(n),s.next=14,_(i);case 14:if(r=s.sent,!r){s.next=26;break}s.t1=r.status,s.next=200===s.t1?19:24;break;case 19:return s.next=21,r.json();case 21:return a.shops=s.sent,a.loadingFlg=!1,s.abrupt("break",26);case 24:console.log(r),a.showAlert("不明なエラーが発生しました");case 26:case"end":return s.stop()}}),s)})))()}}},b=C,w=Object(o["a"])(b,v,d,!1,null,null,null),x=w.exports,k=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[t.shop?s("div",[s("div",{staticClass:"main-cnt"},[s("div",{staticClass:"view-cnt",style:"background-image: url("+t.shop.photo+")"},[s("a",{directives:[{name:"show",rawName:"v-show",value:t.favo,expression:"favo"}],staticClass:"favo-btn",attrs:{href:"#",role:"button"},on:{click:function(a){return a.preventDefault(),t.removeFavo(a)}}},[s("i",{staticClass:"fas fa-star favo-btn_icon"})]),s("a",{directives:[{name:"show",rawName:"v-show",value:!t.favo,expression:"!favo"}],staticClass:"favo-btn",attrs:{href:"#",role:"button"},on:{click:function(a){return a.preventDefault(),t.addFavo(a)}}},[s("i",{staticClass:"far fa-star favo-btn_icon"})])]),s("div",{staticClass:"main-cnt_inner"},[s("a",{staticClass:"back-link",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.$router.go(-1)}}},[s("i",{staticClass:"fas fa-chevron-left back-link_icon"}),t._v(" 戻る ")]),s("h2",{staticClass:"main-cnt_title"},[t._v(t._s(t.shop.name))]),s("div",{staticClass:"main-cnt_detail"},[s("p",[t._v("営業時間："+t._s(t.shop.opening_time)+"～"+t._s(t.shop.closing_time))]),s("p",[t._v("価格帯：￥"+t._s(t.shop.price_range))])]),t._m(0)])]),s("div",{staticClass:"main-cnt"},[s("h2",{staticClass:"main-cnt_title"},[t._v("商品一覧")]),s("ul",{staticClass:"flex-box"},t._l(t.items,(function(a){return s("li",{staticClass:"card-cnt"},[s("a",{attrs:{href:"#",role:"button"},on:{click:function(s){return s.preventDefault(),t.showModal(a)}}},[s("div",{staticClass:"card-cnt_img",style:"background-image: url("+a.photo+")"}),s("div",{staticClass:"card-cnt_inner"},[s("h3",{staticClass:"card-cnt_title"},[t._v(t._s(a.name))]),s("p",[t._v("￥"+t._s(a.price))])])])])})),0)])]):t._e(),t.loadingFlg?s("div",{staticClass:"loading"},[t._v(" "+t._s(t.loadingMessage)+" "),s("i",{staticClass:"fas fa-spinner icon loading-icon"})]):t._e(),s("transition",{attrs:{name:"alert"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.alertFlg,expression:"alertFlg"}],staticClass:"alert"},[t._v(t._s(t.alertMessage))])]),s("transition",{attrs:{name:"modal"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.modalFlg,expression:"modalFlg"}],staticClass:"modal-cnt"},[s("div",{staticClass:"modal-cnt_scroll"},[s("div",{staticClass:"modal-cnt_img",style:"background-image: url("+t.itemDetail.photo+")"}),s("a",{staticClass:"back-link",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.closeModal(a)}}},[s("i",{staticClass:"fas fa-times"}),t._v(" 閉じる ")]),s("div",{staticClass:"modal-cnt_inner"},[s("h3",{staticClass:"modal-cnt_title"},[t._v(t._s(t.itemDetail.name))]),s("p",[t._v("￥"+t._s(t.itemDetail.price))]),s("p",{staticClass:"modal-cnt_description"},[t._v(t._s(t.itemDetail.description))])])]),s("div",{staticClass:"modal-cnt_box"},[s("div",{staticClass:"addcart-box"},[s("a",{staticClass:"addcart-box_btn minus",attrs:{href:"#",role:"button"},on:{click:function(a){return a.preventDefault(),t.minusQuantity(a)}}}),s("span",{staticClass:"addcart-box_quantity"},[t._v(t._s(t.quantity))]),s("a",{staticClass:"addcart-box_btn plus",attrs:{href:"#",role:"button"},on:{click:function(a){return a.preventDefault(),t.plusQuantity(a)}}})]),s("a",{staticClass:"btn",attrs:{href:"#",role:"button"},on:{click:function(a){return a.preventDefault(),t.addCart(a)}}},[t._v(" カートに追加 "),s("i",{staticClass:"fas fa-shopping-cart"})])])])])],1)},y=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("span",{staticClass:"favo"},[t._v("4.5"),s("i",{staticClass:"fas fa-heart icon"})])}],F=(s("b0c0"),s("5530")),S={props:["shopId"],data:function(){return{loadingFlg:!0,loadingMessage:"読み込み中",alertFlg:!1,alertMessage:"aaaaaaaaaa",modalFlg:!1,itemDetail:[],shop:{},items:[],favo:!1,quantity:1}},created:function(){var t=this;return Object(h["a"])(regeneratorRuntime.mark((function a(){var s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,_("shops/".concat(t.shopId));case 2:if(s=a.sent,!s){a.next=15;break}a.t0=s.status,a.next=200===a.t0?7:13;break;case 7:return a.next=9,s.json();case 9:return t.shop=a.sent,t.items=t.shop.items,t.loadingFlg=!1,a.abrupt("break",15);case 13:console.log(s),showAlert("不明なエラーが発生しました");case 15:case"end":return a.stop()}}),a)})))()},methods:{showAlert:function(t){var a=this;this.alertFlg=!0,this.alertMessage=t,setTimeout((function(){a.alertFlg=!1}),3e3)},addFavo:function(){this.favo=!this.favo,this.showAlert("".concat(this.shop.name," をお気に入りに追加しました"))},removeFavo:function(){this.favo=!this.favo,this.showAlert("".concat(this.shop.name," をお気に入りから削除しました"))},showModal:function(t){this.modalFlg=!0,this.itemDetail=t},closeModal:function(t){this.modalFlg=!1},minusQuantity:function(){this.quantity>1&&this.quantity--},plusQuantity:function(){this.quantity++},addCart:function(){var t={id:this.shop.id,name:this.shop.name},a=Object(F["a"])(Object(F["a"])({},this.itemDetail),{},{quantity:this.quantity}),s={addItem:a,shop:t};this.$store.dispatch("addCart",s),this.showAlert("".concat(this.itemDetail.name," をカートに追加しました"))}}},M=S,O=Object(o["a"])(M,k,y,!1,null,null,null),j=O.exports,D=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[t.items?s("div",{staticClass:"main-cnt"},[s("a",{staticClass:"back-link block",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.$router.go(-1)}}},[s("i",{staticClass:"fas fa-chevron-left back-link_icon"}),t._v(" 戻る ")]),s("h2",{staticClass:"main-cnt_title"},[t._v("カート"),s("span",{directives:[{name:"show",rawName:"v-show",value:t.shop.name,expression:"shop.name"}]},[t._v("："+t._s(t.shop.name))])]),t.items.length>0?s("div",[s("ul",{staticClass:"list-cnt"},t._l(t.items,(function(a){return s("li",{staticClass:"list-cnt_list"},[s("h3",{staticClass:"list-cnt_title"},[t._v(t._s(a.name))]),s("div",{staticClass:"addcart-box"},[s("a",{staticClass:"addcart-box_btn minus",attrs:{href:"#",role:"button"},on:{click:function(s){return s.preventDefault(),t.minusQuantity(a.id)}}}),s("span",{staticClass:"addcart-box_quantity"},[t._v(t._s(a.quantity))]),s("a",{staticClass:"addcart-box_btn plus",attrs:{href:"#",role:"button"},on:{click:function(s){return s.preventDefault(),t.plusQuantity(a.id)}}})]),s("a",{staticClass:"addcart-box_remove",attrs:{href:"#"},on:{click:function(s){return s.preventDefault(),t.removeItem(a.id)}}}),s("span",{staticClass:"list-cnt_price"},[t._v("￥"+t._s(a.price*a.quantity))])])})),0),s("p",{staticClass:"result-box"},[t._v("合計：￥"+t._s(t.cartPriceTotal))]),s("router-link",{staticClass:"btn block",attrs:{to:"/order"}},[t._v("注文へ進む"),s("i",{staticClass:"fas fa-chevron-right icon"})])],1):s("div",{staticClass:"page-text"},[t._v("カートに商品はありません")])]):t._e(),t.loadingFlg?s("div",{staticClass:"loading"},[t._v(" "+t._s(t.loadingMessage)+" "),s("i",{staticClass:"fas fa-spinner icon loading-icon"})]):t._e(),s("transition",{attrs:{name:"alert"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.alertFlg,expression:"alertFlg"}],staticClass:"alert"},[t._v(t._s(t.alertMessage))])])],1)},$=[],q={data:function(){return{loadingFlg:!0,loadingMessage:"読み込み中",alertFlg:!1,alertMessage:"",items:[],shop:{}}},created:function(){this.items=this.$store.getters.cartList,this.shop=this.$store.getters.cartShop,this.loadingFlg=!1},computed:{cartPriceTotal:function(){return this.$store.getters.priceTotal}},methods:{showAlert:function(t){var a=this;this.alertFlg=!0,this.alertMessage=t,setTimeout((function(){a.alertFlg=!1}),3e3)},minusQuantity:function(t){this.$store.dispatch("minusQuantity",t)},plusQuantity:function(t){this.$store.dispatch("plusQuantity",t)},removeItem:function(t){this.$store.dispatch("removeCart",t),this.items.length<1&&(this.shop={})}}},N=q,T=Object(o["a"])(N,D,$,!1,null,null,null),I=T.exports,Q=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[t.orderFlg?s("router-link",{staticClass:"back-link block",attrs:{to:"/"}},[s("i",{staticClass:"fas fa-chevron-left back-link_icon"}),t._v(" ホームへ戻る ")]):s("a",{staticClass:"back-link block",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.$router.go(-1)}}},[s("i",{staticClass:"fas fa-chevron-left back-link_icon"}),t._v(" 戻る ")]),s("p",{directives:[{name:"show",rawName:"v-show",value:t.orderFlg,expression:"orderFlg"}],staticClass:"page-title"},[t._v("ご注文が完了しました")]),t.orderFlg?s("h2",{staticClass:"main-cnt_title"},[t._v("注文内容")]):s("h2",{staticClass:"main-cnt_title"},[t._v("注文確認")]),t.loadingFlg?s("div",{staticClass:"loading"},[t._v(" "+t._s(t.loadingMessage)+" "),s("i",{staticClass:"fas fa-spinner icon loading-icon"})]):t.orderFlg?s("div",[s("div",{staticClass:"main-cnt"},[s("div",{staticClass:"check-box"},[s("ul",{staticClass:"list-cnt"},t._l(t.items,(function(a){return s("li",{staticClass:"list-cnt_list"},[s("h3",{staticClass:"list-cnt_title"},[t._v(t._s(a.name)),s("span",{staticClass:"list-cnt_title-sub"},[t._v(t._s(a.quantity)+"個")])]),s("span",{staticClass:"list-cnt_price"},[t._v("￥"+t._s(a.price*a.quantity))])])})),0),s("p",{staticClass:"result-box"},[t._v("合計：￥"+t._s(t.priceTotal))])])]),s("div",{staticClass:"main-cnt"},[s("h2",{staticClass:"main-cnt_title"},[t._v("お客様情報")]),s("div",{staticClass:"check-box"},[s("ul",{staticClass:"list-cnt"},[s("li",{staticClass:"list-cnt_list"},[t._v("氏名："+t._s(t.name))]),s("li",{staticClass:"list-cnt_list"},[t._v("電話番号："+t._s(t.number))]),s("li",{staticClass:"list-cnt_list"},[t._v("郵便番号："+t._s(t.zip_code))]),s("li",{staticClass:"list-cnt_list"},[t._v("住所："+t._s(t.address))])])])])]):s("div",{staticClass:"main-cnt"},[t.items.length>0?s("div",[s("div",{staticClass:"main-cnt"},[s("div",{staticClass:"check-box"},[s("ul",{staticClass:"list-cnt"},t._l(t.items,(function(a){return s("li",{staticClass:"list-cnt_list"},[s("h3",{staticClass:"list-cnt_title"},[t._v(t._s(a.name)),s("span",{staticClass:"list-cnt_title-sub"},[t._v(t._s(a.quantity)+"個")])]),s("span",{staticClass:"list-cnt_price"},[t._v("￥"+t._s(a.price*a.quantity))])])})),0),s("p",{staticClass:"result-box"},[t._v("合計：￥"+t._s(t.priceTotal))])])]),s("div",{staticClass:"main-cnt"},[s("h2",{staticClass:"main-cnt_title"},[t._v("お客様情報")]),s("form",{staticClass:"form-cnt",attrs:{method:"post"}},[s("p",{staticClass:"form-cnt_label"},[t._v("氏名")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-cnt_input",attrs:{type:"text",placeholder:"山田太郎"},domProps:{value:t.name},on:{input:function(a){a.target.composing||(t.name=a.target.value)}}}),s("p",{staticClass:"form-cnt_label"},[t._v("電話番号（ハイフンなし）")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.number,expression:"number"}],staticClass:"form-cnt_input",attrs:{type:"tel",placeholder:"1234567890"},domProps:{value:t.number},on:{input:function(a){a.target.composing||(t.number=a.target.value)}}}),s("p",{staticClass:"form-cnt_label"},[t._v("郵便番号（ハイフンなし）")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.zip_code,expression:"zip_code"}],staticClass:"form-cnt_input",attrs:{type:"number",placeholder:"4640000"},domProps:{value:t.zip_code},on:{input:function(a){a.target.composing||(t.zip_code=a.target.value)}}}),s("p",{staticClass:"form-cnt_label"},[t._v("住所")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.address,expression:"address"}],staticClass:"form-cnt_input",attrs:{type:"text",placeholder:"愛知県常滑市"},domProps:{value:t.address},on:{input:function(a){a.target.composing||(t.address=a.target.value)}}})]),s("a",{staticClass:"btn block",attrs:{href:"#",role:"button"},on:{click:function(a){return a.preventDefault(),t.orderExe(a)}}},[t._v(" 注文"),s("i",{staticClass:"fas fa-shopping-cart icon"})])])]):s("div",{staticClass:"page-text"},[t._v("カートに商品はありません")])]),s("transition",{attrs:{name:"alert"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.alertFlg,expression:"alertFlg"}],staticClass:"alert"},[t._v(t._s(t.alertMessage))])])],1)},A=[],R=(s("4160"),s("159b"),{data:function(){return{loadingFlg:!1,loadingMessage:"読み込み中",alertFlg:!1,alertMessage:"",orderFlg:!1,items:[],priceTotal:0,name:"山田太郎",number:"09000000000",zip_code:"4640000",address:"愛知県常滑市"}},created:function(){this.items=this.$store.getters.cartList,this.priceTotal=this.$store.getters.priceTotal},methods:{showAlert:function(t){var a=this;this.alertFlg=!0,this.alertMessage=t,setTimeout((function(){a.alertFlg=!1}),3e3)},orderExe:function(){var t=this;return Object(h["a"])(regeneratorRuntime.mark((function a(){var s,e,n,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(!confirm("注文を送信しますか？")){a.next=23;break}return t.loadingFlg=!0,t.loadingMessage="注文を送信中",s=[],t.items.forEach((function(t){s.push({id:t.id,quantity:t.quantity})})),e={items:s,name:t.name,number:t.number,zip_code:t.zip_code,address:t.address},n=t.$store.getters.cartShop.id,a.next=9,g("order/".concat(n),e);case 9:if(i=a.sent,!i){a.next=23;break}t.loadingFlg=!1,a.t0=i.status,a.next=200===a.t0||201===a.t0?15:400===a.t0?18:404===a.t0?20:22;break;case 15:return t.orderFlg=!0,t.$store.dispatch("clearCart"),a.abrupt("break",23);case 18:return t.showAlert("ネットワークが混雑しています、時間をおいて再度ご注文ください"),a.abrupt("break",23);case 20:return t.showAlert("ご注文先の店舗が存在しません"),a.abrupt("break",23);case 22:t.showAlert("不明なエラーが発生しました");case 23:case"end":return a.stop()}}),a)})))()}}}),P=R,E=Object(o["a"])(P,Q,A,!1,null,null,null),z=E.exports;e["a"].use(p["a"]);var J=[{path:"/",component:x},{path:"/shop/:shopId",component:j,props:!0},{path:"/cart",component:I},{path:"/order",component:z}],L=new p["a"]({mode:"history",base:"/",routes:J}),B=L,G=(s("c740"),s("13d5"),s("a434"),s("2f62"));e["a"].use(G["a"]);var H=new G["a"].Store({state:{cart:[],shop:{}},mutations:{addCart:function(t,a){var s=a.addItem,e=a.shop;if(t.cart.length<1)return t.cart.push(s),void(t.shop=e);if(t.shop.id!=e.id)return confirm("現在のカートに含まれる商品と店舗が異なります。現在のカートの中身を取り消しますか？")?(t.cart=[],t.cart.push(s),void(t.shop=e)):void 0;var n=t.cart.findIndex((function(t){return t.id==s.id}));n<0?t.cart.push(s):t.cart[n].quantity+=s.quantity},removeCart:function(t,a){var s=t.cart.findIndex((function(t){return t.id==a}));t.cart.splice(s,1),t.cart.length<1&&(t.shop={})},clearCart:function(t){t.cart=[],t.shop={}},plusQuantity:function(t,a){var s=t.cart.findIndex((function(t){return t.id==a}));t.cart[s].quantity++},minusQuantity:function(t,a){var s=t.cart.findIndex((function(t){return t.id==a}));t.cart[s].quantity>1&&t.cart[s].quantity--},save:function(t){localStorage.setItem("cart",JSON.stringify(t.cart)),localStorage.setItem("shop",JSON.stringify(t.shop))},load:function(t){localStorage.getItem("cart")&&(t.cart=JSON.parse(localStorage.getItem("cart")),t.shop=JSON.parse(localStorage.getItem("shop")))}},actions:{addCart:function(t,a){var s=t.commit;s("addCart",a),s("save")},removeCart:function(t,a){var s=t.commit;s("removeCart",a),s("save")},clearCart:function(t,a){var s=t.commit;s("clearCart",a),s("save")},plusQuantity:function(t,a){var s=t.commit;s("plusQuantity",a),s("save")},minusQuantity:function(t,a){var s=t.commit;s("minusQuantity",a),s("save")},load:function(t){var a=t.commit;a("load")}},getters:{cartList:function(t){return t.cart},cartShop:function(t){return t.shop},itemTotal:function(t){return t.cart.reduce((function(t,a){return t+a.quantity}),0)},priceTotal:function(t){return t.cart.reduce((function(t,a){return t+a.quantity*a.price}),0)}}});e["a"].config.productionTip=!1,new e["a"]({router:B,store:H,render:function(t){return t(u)}}).$mount("#app")},"5c0b":function(t,a,s){"use strict";var e=s("9c0c"),n=s.n(e);n.a},"9c0c":function(t,a,s){}});
//# sourceMappingURL=app.3492c7e8.js.map