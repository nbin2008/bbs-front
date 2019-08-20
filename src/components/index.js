import Vue from "vue";

import headc from "./Header";

var common = {
  headc
};

Object.keys(common).forEach((key) => {
  Vue.component(key, common[key]);
});
