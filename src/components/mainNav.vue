<script>
import IconClose from "@/assets/svg/iconClose.vue";
import { getStore } from "@/assets/store";

export default {
  components: {
    IconClose,
  },
  data() {
    return {
      nav: getStore().routes,
      selectedMain: null,
      selectedSub: null,
    };
  },
  methods: {
    handleMainClick(navItem) {
      if (!(navItem.items?.length > 1)) {
        this.selectedMain = navItem;
        this.$router.push({ path: navItem.path });
      } else {
        if (this.selectedMain === navItem) {
          this.handleClose();
        } else {
          this.selectedMain = navItem;
          this.$emit("selected", true);
        }
      }
    },
    handleSubClick(subItem) {
      this.selectedSub = subItem;
      this.$router.push({ path: subItem.path });
      if (!this.selectedMain.permashow_subnav) {
        this.handleClose();
      }
    },
    handleClose() {
      this.selectedMain = null;
      this.$emit("selected", false);
    },
  },
  emits: ["selected"],
};
</script>

<template>
  <div class="flex-col absolute top-0 main-nav">
    <button
      v-if="selectedMain && selectedMain.items?.length > 0"
      class="icon-button close-desktop hide-desktop"
      @click="handleClose"
    >
      <IconClose />
    </button>
    <template v-for="main in nav" :key="main.title">
      <button
        class="main-nav-item"
        :class="{ active: main.title === selectedMain?.title }"
        @click="handleMainClick(main)"
      >
        <span>
          {{ main.title }}
        </span>
      </button>
      <div
        v-if="
          selectedMain &&
          selectedMain.title === main.title &&
          selectedMain.items?.length > 0
        "
        class="flex side-nav hide-desktop"
      >
        <button
          v-for="sub in selectedMain.items"
          :key="sub.title"
          :class="{
            active: sub.title === selectedSub?.title,
            'side-nav-item': true,
          }"
          @click="handleSubClick(sub)"
        >
          <span>
            {{ sub.title }}
          </span>
        </button>
      </div>
    </template>
  </div>
  <div
    v-if="selectedMain && selectedMain.items?.length > 0"
    class="flex-col absolute top-0 side-nav hide-mobile"
  >
    <button
      v-if="!selectedMain.permashow_subnav"
      class="side-nav-item"
      @click="handleClose"
    >
      <IconClose />
    </button>
    <button
      v-for="sub in selectedMain.items"
      :key="sub.title"
      :class="{
        active: sub.title === selectedSub?.title,
        'side-nav-item': true,
      }"
      @click="handleSubClick(sub)"
    >
      <span>
        {{ sub.title }}
      </span>
    </button>
  </div>
</template>

<style scoped>
.main-nav {
  z-index: 9990;
}

.side-nav {
  right: var(--default-gap-mobile);
  top: var(--default-gap-mobile);
  align-items: flex-end;
  z-index: 9999;
}

.main-nav-item span {
  font-size: 30px;
  line-height: 35px;
  font-weight: 700;
}

.side-nav-item span {
  font-size: 15px;
  line-height: 18px;
  text-transform: uppercase;
}

@media (min-width: 750px) {
  .main-nav {
    flex-direction: row;
    gap: var(--default-gap-desktop);
  }

  .side-nav {
    right: var(--default-gap-desktop);
    top: var(--default-gap-desktop);
  }

  .main-nav {
    display: inline-flex;
  }

  .main-nav-item span {
    font-size: 15px;
    line-height: 18px;
  }

  .side-nav-item span {
    font-size: 30px;
    line-height: 35px;
  }
}

@media (max-width: 749px) {
  .main-nav {
    width: calc(100% - (var(--default-gap-mobile) * 2));
  }

  .close-desktop {
    position: absolute;
    top: var(--default-gap-mobile);
    right: 0;
  }
}
</style>
