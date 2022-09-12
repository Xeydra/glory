<script>
import { navigationPages } from '@/TEMP_DATA/temp_data.js';
import IconClose from '@/assets/svg/iconClose.vue';

export default {
  components: {
    IconClose,
  },
  data() {
    return {
      nav: navigationPages,
      selected: null,
    };
  },
  methods: {
    handleItemClick(navItem) {
      if (navItem.routing) {
        console.log(navItem.routing);
        this.$router.push({ name: 'collection' });
        this.selected = null;
      } else {
        this.selected = navItem;
      }
    },
    handleClose() {
      this.selected = null;
    },
  },
};

</script>

<template>
  <div class="flex-col absolute top-0 main-nav">
    <button
      v-if="selected && selected.children?.length > 0"
      class="icon-button close-desktop hide-desktop"
      @click="handleClose"
    >
      <IconClose />
    </button>
    <template
      v-for="main in nav"
      :key="main.title"
    >
      <button
        class="main-nav-item"
        :class="{ active: main.title === selected?.title }"
        @click="handleItemClick(main)"
      >
        <span>
          {{ main.title }}
        </span>
      </button>
      <div
        v-if="selected && selected.title === main.title && (selected.children?.length > 0)"
        class="flex side-nav hide-desktop"
      >
        <button
          v-for="sub in selected.children"
          :key="sub.title"
          class="side-nav-item"
          @click="handleItemClick(sub)"
        >
          <span>
            {{ sub.title }}
          </span>
        </button>
      </div>
    </template>
  </div>
  <div
    v-if="selected && (selected.children?.length > 0)"
    class="flex-col absolute top-0 side-nav hide-mobile"
  >
    <button
      class="side-nav-item"
      @click="handleClose"
    >
      <IconClose />
    </button>
    <button
      v-for="sub in selected.children"
      :key="sub.title"
      class="side-nav-item"
      @click="handleItemClick(sub)"
    >
      <span>
        {{ sub.title }}
      </span>
    </button>
  </div>
</template>

<style scoped>

.side-nav {
  right: var(--default-gap-mobile);
  top: var(--default-gap-mobile);
  align-items: flex-end;
}

.main-nav-item span {
  font-size: 30px;
  line-height: 35px;
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
    width: calc(100% - (var(--default-gap-mobile)*2))
  }

  .close-desktop {
    position: absolute;
    top: var(--default-gap-mobile);
    right: 0;
  }
}
</style>
