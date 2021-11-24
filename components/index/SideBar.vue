<template>
  <aside class="side-bar__wrap">
    <form class="form-search">
      <input id="search" class="form-search__input" type="text">
      <label for="search" class="form-search__wrap">
      </label>
    </form>
    <nav class="nav-side__wrap">
      <ul class="nav-side__list">
        <li class="nav-side__item">
          <svg class="nav-side__icon icon icon-light" width="24" height="24">
            <use href="~@/assets/img/svg-sprites.svg#community-icon"></use>
          </svg>
          <nuxt-link active-class="active" class="nav-side__link" to="/">Сообщество</nuxt-link>
        </li>
        <li class="nav-side__item">
          <svg class="nav-side__icon icon icon-light" width="24" height="24">
            <use href="~@/assets/img/svg-sprites.svg#commercial-icon"></use>
          </svg>
          <nuxt-link class="nav-side__link" to="/">Коммерческая недвижимость</nuxt-link>
        </li>
        <li class="nav-side__item">
          <svg class="nav-side__icon icon icon-light" width="24" height="24">
            <use href="~@/assets/img/svg-sprites.svg#franchises-icon"></use>
          </svg>
          <nuxt-link class="nav-side__link" to="/">Франшизы</nuxt-link>
        </li>
        <li class="nav-side__item">
          <svg class="nav-side__icon icon icon-light" width="24" height="24">
            <use href="~@/assets/img/svg-sprites.svg#gb-icon"></use>
          </svg>
          <nuxt-link class="nav-side__link" to="/">Готовый бизнес</nuxt-link>
        </li>
        <li class="nav-side__item">
          <svg class="nav-side__icon icon icon-light" width="24" height="24">
            <use href="~@/assets/img/svg-sprites.svg#opt-icon"></use>
          </svg>
          <nuxt-link class="nav-side__link" to="/">Товары и услуги</nuxt-link>
        </li>
        <li class="nav-side__item">
          <svg class="nav-side__icon icon icon-light" width="24" height="24">
            <use href="~@/assets/img/svg-sprites.svg#supplier-icon"></use>
          </svg>
          <nuxt-link class="nav-side__link" to="/">Поставщики</nuxt-link>
        </li>
        <li class="nav-side__item">
          <svg class="nav-side__icon icon icon-light" width="24" height="24">
            <use href="~@/assets/img/svg-sprites.svg#invest-icon"></use>
          </svg>
          <nuxt-link class="nav-side__link" to="/">Инвестиции</nuxt-link>
        </li>
        <li class="nav-side__item">
          <svg class="nav-side__icon icon icon-light" width="24" height="24">
            <use href="~@/assets/img/svg-sprites.svg#bplan-icon"></use>
          </svg>
          <nuxt-link class="nav-side__link" to="/">Бизнес-идеи</nuxt-link>
        </li>
        <li class="nav-side__item">
          <img class="nav-side__icon" src="~@/assets/img/icon-side/idea.svg">
          <nuxt-link class="nav-side__link" to="/">Бизнес-планы</nuxt-link>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script>
export default {
  name: 'SideBar',
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.side-bar {
  &__wrap {
    top: 70px;
    width: 304px;
    height: 100%;
    padding: 8px;
    position: fixed;
    z-index: 100;
    background-color: #fff;
    border-right: 1px solid rgba(0, 0, 0, 0.2);
    transition: width 300ms;
  }
  &__wrap.active-side > nav > ul {
    overflow-y: scroll;
    height: calc(100vh - 100px);
  }
  &__wrap.active-side > form > input {
    border: 1px solid rgba(0, 0, 0, 0.2);
    width: 283px;
  }
  &__wrap.active-side > form > label::before {
    right: 0;
    left: -274px;
    transform: translateY(56%);
  }
}
.nav-side {
  &__list {
    position: fixed;
    z-index: 1;
    transition: .3ms;
  }
  &__item {
    position: relative;
    display: flex;
    padding: 8px;
    &:not(:last-of-type) {
      margin-bottom: 8px;
    }
    &:hover {
      background-color: #e9f6e9;
    }
  }
  &__link {
    display: block;
    &::before {
      position: absolute;
      content: '';
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
  }
  &__icon {
    width: 20px;
    height: 20px;
    margin-right: 10px;
    fill: rgba(0, 0, 0, 0.2);
  }
}
.icon-community {
  background-image: url("data:image/png;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEwLjAwMDEgNUMxMC4wMDAxIDMuMzQzMTQgOC42NTY5MSAyIDcuMDAwMDYgMkM1LjM0MzIgMiA0LjAwMDA2IDMuMzQzMTQgNC4wMDAwNiA1QzQuMDAwMDYgNi42NTY4NiA1LjM0MzIgOCA3LjAwMDA2IDhDOC42NTY5MSA4IDEwLjAwMDEgNi42NTY4NiAxMC4wMDAxIDVaTTEyLjAwMDEgNUMxMi4wMDAxIDcuNzYxNDMgOS43NjE0OCAxMCA3LjAwMDA2IDEwQzQuMjM4NjMgMTAgMi4wMDAwNiA3Ljc2MTQzIDIuMDAwMDYgNUMyLjAwMDA2IDIuMjM4NTggNC4yMzg2MyAwIDcuMDAwMDYgMEM5Ljc2MTQ4IDAgMTIuMDAwMSAyLjIzODU4IDEyLjAwMDEgNVpNMTkuMDAwMSA1LjVDMTkuMDAwMSA3LjQzOTggMTcuNDUwMSA5IDE1LjUwMDEgOUMxMy41NSA5IDEyLjAwMDEgNy40Mzk4IDEyLjAwMDEgNS41QzEyLjAwMDEgMy41NjAyIDEzLjU1IDIgMTUuNTAwMSAyQzE3LjQ1MDEgMiAxOS4wMDAxIDMuNTYwMiAxOS4wMDAxIDUuNVpNMTcuMDAwMSA1LjVDMTcuMDAwMSA0LjY2MTgzIDE2LjM0MjYgNCAxNS41MDAxIDRDMTQuNjU3NSA0IDE0LjAwMDEgNC42NjE4MyAxNC4wMDAxIDUuNUMxNC4wMDAxIDYuMzM4MTcgMTQuNjU3NSA3IDE1LjUwMDEgN0MxNi4zNDI2IDcgMTcuMDAwMSA2LjMzODE3IDE3LjAwMDEgNS41Wk0xMy45MDY0IDE2LjkyODNDMTQuMDI4NCAxOC42MDg1IDEyLjY0NTQgMjAgMTAuOTU3MiAyMEgyLjk1NjgxQzEuMjY4NTQgMjAgLTAuMTE0NTI0IDE4LjYwODUgMC4wMDc1MDE4MiAxNi45MjgzQzAuMjg2NzgzIDEzLjA4MjggMi4yNjY5MiAxMSA3LjAwMDA2IDExQzExLjcyMzkgMTEgMTMuNjI0NyAxMy4wNDk5IDEzLjkwNjQgMTYuOTI4M1pNMTEuOTExNyAxNy4wNzMyQzExLjcwMTcgMTQuMTgxOSAxMC42MDU3IDEzIDcuMDAwMDYgMTNDMy4zNzI2NiAxMyAyLjIwOTE5IDE0LjIyMzggMi4wMDIyNSAxNy4wNzMyQzEuOTY2NjUgMTcuNTYzMyAyLjQwMDcxIDE4IDIuOTU2ODEgMThIMTAuOTU3MkMxMS41MTMyIDE4IDExLjk0NzMgMTcuNTYzMyAxMS45MTE3IDE3LjA3MzJaTTE1LjUwMDEgMTdDMTQuOTQ3OCAxNyAxNC41MDAxIDE2LjU1MjMgMTQuNTAwMSAxNkMxNC41MDAxIDE1LjQ0NzcgMTQuOTQ3OCAxNSAxNS41MDAxIDE1SDE3Ljk4MzVDMTcuOTM3OCAxNC4wMTM3IDE3LjgwMjQgMTMuMzI0NiAxNy42MDU2IDEyLjk0NzJDMTcuMTYyMSAxMi4wNjAyIDE2LjQxNTIgMTEuNSAxNS41MDAxIDExLjVDMTQuNTQzMiAxMS41IDE0LjI5NDEgMTEuNjE3OCAxMy43OTAxIDEyLjEyMzlDMTMuNzQ5OSAxMi4xNjQzIDEzLjc0OTkgMTIuMTY0MyAxMy43MDcyIDEyLjIwNzFDMTMuMzE2NiAxMi41OTc2IDEyLjY4MzUgMTIuNTk3NiAxMi4yOTI5IDEyLjIwNzFDMTEuOTAyNCAxMS44MTY2IDExLjkwMjQgMTEuMTgzNCAxMi4yOTI5IDEwLjc5MjlDMTIuMzMxOCAxMC43NTM5IDEyLjMzMTggMTAuNzUzOSAxMi4zNzI5IDEwLjcxMjZDMTMuMjMxMSA5Ljg1MDg1IDEzLjk3MzMgOS41IDE1LjUwMDEgOS41QzE3LjI1MTYgOS41IDE4LjYzOCAxMC41Mzk4IDE5LjM4NjYgMTIuMDM3NEMxOS43MzczIDEyLjcwOTYgMTkuOTIzNCAxMy42NTYzIDE5Ljk4MTQgMTQuOTA3NUMxOS45ODMyIDE0Ljk1MzcgMTkuOTgzMiAxNC45NTM3IDE5Ljk4MzUgMTVDMTkuOTgzNSAxNi4xMDQ2IDE5LjA4ODEgMTcgMTcuOTgzNSAxN0wxNS41MDAxIDE3WiIgZmlsbD0iYmxhY2siIGZpbGwtb3BhY2l0eT0iMC4yIi8+Cjwvc3ZnPgo=");
}
.form-search {
  border-bottom: 1px solid rgba(0,0,0,0.20);
  padding-bottom: 8px;
  margin-bottom: 8px;
  font-size: 16px !important;
  &__wrap {
    position: absolute;
    width: 100%;
    transition: 300ms;
    &::before {
      display: block;
      content: '';
      position: absolute;
      left: -280px;
      top:50%;
      transform: translateY(59%);
      width: 18px;
      height: 18px;
      background: url("~@/assets/img/icon-side/search.svg") no-repeat;
      cursor: pointer;
    }
    &::after {
      display: none;
      content: '';
      position: absolute;
      left: -280px;
      top:50%;
      transform: translateY(59%);
      width: 18px;
      height: 18px;
      background: url("~@/assets/img/icon-side/search.svg") no-repeat;
    }
  }
  &__input {
    width: 100%;
    padding: 7px 10px 7px 44px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 6px;
  }
}
@media (max-width:1460px) {
  .side-bar {
    &__wrap {
      width: 55px;
      margin-left: 0;
      font-size: 0;
    }
  }
  .form-search {
    &__input:focus ~ label::before {
      opacity: 0;
    }
    &__wrap::before,
    &__wrap::after {
      left: 10px;
      transform: translateY(-27px);
    }
    &__input:focus ~ label::after {
      position: relative;
      display: block;
      z-index: 3;
      transform: translateY(6px);
    }
    &__input:focus ~ label {
      position: relative;
      display: block;
      margin-bottom: 10px;
    }
    &__input {
      border: none;
      top: 3px;
      padding-right: 0;
      transition: all 300ms;
    }
    &__input:focus {
      position: absolute;
      width: 300px;
      margin-bottom: 10px;
      z-index: 2;
      background-color: #fff;
    }
  }
}
@media (max-width:850px) {
  .side-bar {
    &__wrap {
      display: none;
    }
  }
  .nav-side {
    &__list {
      margin-left: 0;
    }
    &__link  {
      display: block;
    }
    &__icon {
      margin-right: 10px;
    }
  }
}
@media (max-width:400px) {
  .side-bar__wrap.active-side {
    width: 100%;
    & > form > input:focus {
      width: 95%;
    }
    & > form > input {
      width: 100%;
    }
    & form > label::before {
      left: -36px;
    }
  }
}
</style>
