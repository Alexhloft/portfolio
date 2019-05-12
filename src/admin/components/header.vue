<template lang="pug">
  .header
    .container
      .header__info
        .user
          .user__pic
            img(src="../../images/content/photo.jpg").user__pic-avatar
          .user__name 
            span Александр Хохлов
        .header__title Панель администрирования
      a.exit-btn(@click="logout") Выйти
</template>

<script>

</script>