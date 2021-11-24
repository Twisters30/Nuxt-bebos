<template>
  <div class="banner">
    <div class="banner__wrap">
      <div class="banner__left-wrap">
        <img class="banner__img" src="~@/assets/img/banner-logo.png" alt="logo">
        <div class="banner__text-wrap">
          <h2 class="banner__title title">Персональное решение</h2>
          <p class="banner__text">Инвестиции 378 000 — 675 000 ₽</p>
          <a class="banner__link arrow-link" href="#">Страница франшизы</a>
        </div>
      </div>
      <div class="banner__member-wrap">
        <div class="banner__avatar-wrap">
          <img class="banner__avatar-img" src="~@/assets/img/avatar-member.png" alt="avatar-manager">
          <div>
            <p class="banner__name">Дмитрий Варфоломеев</p>
            <p class="banner__position">Представитель</p>
          </div>
        </div>
        <button class="banner__btn btn btn-success">Запросить финплан</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Banner'
}
</script>

<style lang="scss" scoped>
.container-custom {
  max-width: 1450px;
  margin: 0 auto;
  padding: 0 15px;
}
.banner {
  transform: translateY(-82px);
  &__img {
    width: 152px;
    height: 114px;
  }
  &__left-wrap {
    display: flex;
  }
  &__avatar-wrap {
    display: flex;
    margin-bottom: 16px;
  }
  &__wrap {
    position: relative;
    display: flex;
    justify-content: space-between;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
    border-radius: 16px;
    padding: 24px;
    background-color: #fff;
    z-index: 0;
  }
  &__img {
    margin-right: 32px;
  }
  &__avatar-img {
    width: 48px;
    height: 48px;
    margin-right: 8px;
  }
  &__position,
  &__name {
    font-size: 16px;
    line-height: 24px;
  }
  &__btn {
    width: 100%;
    padding: 13px ;
    font-size: 16px;
    line-height: 24px;
  }
}
@media (max-width:600px) {
  .banner {
    padding: 32px 0;
    transform: translateY(0);
    &__wrap {
      flex-direction: column;
    }
    &__img {
      margin-right: 0;
      margin-bottom: 16px;
    }
    &__left-wrap {
      flex-direction: column;
      align-items: center;
      margin-right: 0;
      margin-bottom: 16px;
    }
    &__member-wrap {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
}
</style>
