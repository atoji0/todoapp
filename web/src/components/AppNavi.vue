<script lang="ts">
// メニュー用のinterfaceを追加
export interface MenuItem {
  type: "heading" | "menu";
  title: string;
  icon?: string;
  url?: string;
}
</script>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

// タイトルとメニューアイテムを設定できるようにする。
defineProps<{ title: string; menuItems: MenuItem[] }>();

const router = useRouter();

const isToggle = ref(false);

const goToUrl = (url?: string) => {
  if (url != undefined) {
    router.push(url);
  }
};
</script>

<template>
  <!-- js/script.jsを参考にbodyにtoggleを追加 -->
  <body class="sb-nav-fixed" :class="isToggle ? 'sb-sidenav-toggled' : ''">
    <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
      <!-- titleを可変にし、hrefをrouterで切り替えるように修正 -->
      <a class="navbar-brand ps-3" @click="goToUrl('/')">{{ title }}</a>
      <!-- isToggleでスライドバーの表示/非表示を切り替える -->
      <button id="sidebarToggle" class="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" @click="isToggle = !isToggle">
        <i class="fas fa-bars"></i>
      </button>
      <!-- 不要な項目は削除 -->
    </nav>
    <div id="layoutSidenav">
      <div id="layoutSidenav_nav">
        <nav id="sidenavAccordion" class="sb-sidenav accordion sb-sidenav-dark">
          <div class="sb-sidenav-menu">
            <!-- menuItemsからメニューが生成されるように修正, サブメニューも改良すれば対応可能 -->
            <div v-for="(item, index) in menuItems" :key="index" class="nav">
              <div v-if="item.type == 'heading'" class="sb-sidenav-menu-heading">{{ item.title }}</div>
              <a v-if="item.type == 'menu'" class="nav-link" @click="goToUrl(item.url)">
                <div class="sb-nav-link-icon"><i class="fas fa-tachometer-alt" :class="item.icon"></i></div>
                {{ item.title }}
              </a>
            </div>
          </div>
        </nav>
      </div>
      <div id="layoutSidenav_content">
        <main>
          <div class="container-fluid px-4">
            <!-- コンテンツをrouter-viewに変更 -->
            <router-view />
          </div>
        </main>
      </div>
    </div>
  </body>
</template>
