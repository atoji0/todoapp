import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// Font Awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { dom } from "@fortawesome/fontawesome-svg-core";

// Bootstrap 5 + SB Admin
import "startbootstrap-sb-admin/src/scss/styles.scss";

// アイコンをライブラリに追加して、DOM経由(class)で参照できるようにする。
library.add(fas);
dom.watch();

// componentを追加
createApp(App).use(router).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
