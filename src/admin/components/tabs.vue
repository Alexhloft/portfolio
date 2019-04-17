<template lang="pug">
    .container
      ul.tabs
        li.tabs__item(v-for="tab in tabs")
          router-link(
            :to="tab.href"
            exact-active-class="active"
          ).tabs__link {{tab.title}}

</template>

<script>
export default {
  data() {
    return {
      tabs: [
        { title: "Обо мне", href: "/" },
        { title: "Работы", href: "/work" },
        { title: "Отзывы", href: "/reviews" }
      ]
    };
  }
};
</script>