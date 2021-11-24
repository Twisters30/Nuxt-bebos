<template>
  <header class="header">
    <div class="container-fluid">
      <div class="header__content-wrap">
        <div class="header__left-side">
          <div
            @click="clickBurger"
            class="burger__wrap"
            :class="{'active-burger': activeBurger}">
            <span class="burger__body"></span>
          </div>
          <div class="header__logo-wrap">
            <img class="header__logo" src="~@/assets/img/logo.svg" alt="logo">
            <span class="header__logo-text">БИБОСС</span>
            <router-link class="header__link-logo" to="/"></router-link>
          </div>
          <div class="dropdown__container">
            <button ref="btnText" @click="dropdownClick" class="dropdown__btn" name="select" type="button">
              {{ cities[0].name }}
            </button>
            <div :class="{'dropdown-active': dropdownActive}" class="dropdown__content">
              <div class="p-1">Россия</div>
              <label>
                <input class="dropdown__input-search" type="text">
              </label>
              <ul class="dropdown__list">
                <li
                  @click="choiceCity($event)"
                  class="dropdown__item" v-for="city in cities"
                  :key="city.name"
                >
                  {{ city.name }}
                </li>
              </ul>
            </div>
            <svg :class="{'dropdown-open': dropdownActive}" class="dropdown__icon" width="14" height="9">
              <use href="~@/assets/img/svg-sprites.svg#arrow-bottom-icon"></use>
            </svg>
          </div>
        </div>
        <div class="header__right-side">
          <button class="header__btn-info btn btn-success">+ Объявление</button>
          <svg class="header__icon" width="24" height="24">
            <use href="~@/assets/img/svg-sprites.svg#message"></use>
          </svg>
          <svg class="header__icon" width="24" height="24">
            <use href="~@/assets/img/svg-sprites.svg#bell"></use>
          </svg>
          <div :class="{'switch-active': switchActive}" class="header__btn-wrap">
            <button @click="switchActive = !switchActive" :class="{'color--btn':switchActive}" class="header__btn-switch">
              ПЛЮС
              <input style="display: none" class="form-check-input header__input" type="radio" id="flexSwitchCheckChecked" checked>
            </button>
          </div>
          <div class="header__profile-wrapper">
            <img src="~@/assets/img/avatar.png" alt="avatar">
            <nuxt-link class="header__link-register" to="/register"></nuxt-link>
            <ProgressBar />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import ProgressBar from './ProgressBar'
export default {
  name: 'Header',
  components: { ProgressBar },
  data () {
    return {
      switchActive: false,
      dropdownActive: false,
      activeBurger: false,
      cities: [
        {
          name: 'Петропавловск-Камчатский',
          state: true,
          region: 'Россия'
        },
        {
          name: 'Москва',
          state: false,
          region: 'Россия'
        },
        {
          name: 'Казань',
          state: false,
          region: 'Россия'
        }
      ]
    }
  },
  methods: {
    clickBurger () {
      this.activeBurger = !this.activeBurger
      const sidebar = document.querySelector('.side-bar__wrap')
      sidebar.classList.toggle('active-side')
    },
    dropdownClick () {
      this.dropdownActive = !this.dropdownActive
    },
    choiceCity (event) {
      const cityName = event.target.innerHTML
      this.$refs.btnText.textContent = cityName
      this.dropdownActive = false
    }
  }
}
</script>

<style scoped lang="scss">
.burger {
  &__wrap.active-burger::before {
    transform: rotate(45deg);
    top: 11px;
  }
  &__wrap.active-burger::after {
    transform: rotate(-45deg);
    bottom: 11px;
  }
  &__wrap.active-burger > span {
    transform: scale(0);
  }
  &__wrap {
    display: none;
    position: relative;
    margin-right: 15px;
    height: 25px;
    width: 25px;
  }
  &__wrap::before {
    position: absolute;
    content: "";
    display: block;
    width: 100%;
    height: 3px;
    position: absolute;
    transition: top .15s ease .15s , -webkit-transform .15s ease 0ms;
    transition: top .15s ease .15s , transform .15s ease 0ms;
    transition: top .15s ease .15s , transform .15s ease 0ms , -webkit-transform .15s linear 0ms;
    background-color: #ccc;
    top: 0;
  }
  &__wrap::after {
    position: absolute;
    content: "";
    display: block;
    width: 100%;
    height: 3px;
    position: absolute;
    transition: bottom .15s linear .15s , -webkit-transform .15s linear 0ms;
    transition: bottom .15s linear .15s , transform .15s linear 0ms;
    transition: bottom .15s linear .15s , transform .15s linear 0ms , -webkit-transform .15s linear 0ms;
    background-color: #ccc;
    bottom: 0;
  }
  &__body {
    display: block;
    width: 100%;
    height: 3px;
    position: absolute;
    top: 10.5px;
    left: 0;
    background-color: #ccc;
  }
}
.dropdown {
  &__container {
    position: relative;
  }
  &__icon {
    position: absolute;
    top: 8px;
    right: -13px;
    fill: rgba(0, 0, 0, 0.2);
    transition: 300ms;
  }
  &__btn {
    display: block;
    background: transparent;
  }
  &__content {
    position: absolute;
    min-width: 220px;
    top: 25px;
    left: 0;
    background: #fff;
    padding: 10px;
    z-index: 999;
    -webkit-box-shadow: 0px 0px 2px 2px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 0px 0px 2px 2px rgba(34, 60, 80, 0.2);
    box-shadow: 0px 0px 2px 2px rgba(34, 60, 80, 0.2);
    transition: opacity 300ms;
    opacity: 0;
    pointer-events: none;
  }
  &__item {
    cursor: pointer;
    &:hover {
      color: dodgerblue;
    }
  }
  &__input-search {
    width: 100%;
    padding: 3px;
    border:1px solid rgba(0, 0, 0, 0.2);
    border-radius: 6px;
  }
}
.dropdown-active {
  opacity: 1;
  pointer-events: auto;
}
.header {
  &__profile-wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
  }
  &__profile-wrapper > img {
    width: 32px;
    height: 32px;
    margin-bottom: 3px;
  }
  padding: 16px 0;
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  z-index: 999;
  background-color: #fff;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.15);
  &__content-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__left-side {
    display: flex;
  }
  &__logo-wrap {
    position: relative;
    display: flex;
    align-items: center;
    margin-right: 32px;
    cursor: pointer;
  }
  &__logo {
    margin-right: 8px;
  }
  &__link-logo {
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
    }
  }
  &__logo-text {
    font-size: 24px;
    line-height: 24px;
    font-family: var(--font-arial-bold);
  }
  &__right-side {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__btn-info {
    margin-right: 33px;
  }
  &__icon {
    margin-right: 33px;
  }
  &__btn-wrap {
    width: 66px;
    height: 28px;
    padding: 3px 3px 3px 13px;
    margin-right: 35px;
    border-radius: 36px;
    background-color: #FA961E;
    transition: all 300ms;
  }
  &__btn-switch {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 100%;
    border-radius: 36px;
    color: #FA961E;
    font-size: 12px;
    line-height: 20px;
    font-weight: bold;
  }
  &__link-register {
    &::before {
      position: absolute;
      content: '';
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 100;
    }
  }
}
.switch-active {
  padding: 3px 13px 3px 3px;
  background-color: gray;
}
.color--btn {
  color: gray;
}
.dropdown-open {
  transform: rotate(180deg);
}
@media (max-width:850px) {
  .burger {
    &__wrap {
      display: block;
    }
  }
  .dropdown {
    &__container {
      display: none;
    }
  }
  .header {
    &__btn-info {
      display: none;
    }
  }
}
@media (max-width: 368px) {
  .header {
    &__logo-text {
      display: none;
    }
  }
}
@media (max-width:550px) {
  .header {
    &__icon {
      display: none;
    }
  }
}
</style>
