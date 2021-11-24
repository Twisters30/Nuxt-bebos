<template>
  <section class="hero">
    <div class="container-custom">
      <div class="hero__contest-wrap">
        <a class="hero__link-wrapper" href="#"><img class="hero__icon-medal" src="~@/assets/img/mini-logo.png" alt="icon video"></a>
        <div class="hero__text-group">
          <p class="hero__text">Конкурс БИБОСС</p>
          <a class="hero__text text--bold" href="#">«Лучшее видео о франшизе»</a>
        </div>
      </div>
      <h1 class="hero__main-title">
        Видео о франшизе «Персональное решение»
      </h1>
      <div class="hero__content">
        <div class="hero__box">
          <div class="hero__video-wrap">
            <iframe class="hero__video" src="https://www.youtube.com/embed/ddJM1j5JIMo" allow="accelerometer"></iframe>
          </div>
        </div>
        <div class="voting">
          <div>
            <h2 class="voting__title title">
              Голосование
            </h2>
            <p class="voting__description">
              Для того, чтобы проголосовать за видео, нужно сделать репост в любой из соцсетей:
            </p>
          </div>
          <ul class="voting__social-wrap">
            <li class="voting__item fb--background">
              <a class="voting__link" href="#">
                <svg class="voting__icon" width="60px" height="60px">
                  <use href="~@/assets/img/svg-sprites.svg#fb-icon"></use>
                </svg>
                <span class="voting__icon-text">Голосовать FB</span>
              </a>
            </li>
            <li class="voting__item vk--background">
              <a class="voting__link" href="#">
                <svg class="voting__icon" width="60px" height="60px">
                  <use href="~@/assets/img/svg-sprites.svg#vk-icon"></use>
                </svg>
                <span class="voting__icon-text">Голосовать VK</span>
              </a>
            </li>
            <li class="voting__item ok--background">
              <a class="voting__link" href="#">
                <svg class="voting__icon l-icon" width="60px" height="60px">
                  <use href="~@/assets/img/svg-sprites.svg#odnokl-icon">
                  </use>
                </svg>
                <span class="voting__icon-text">Голосовать OK</span>
              </a>
            </li>
            <span class="voting__votes">657 голосов</span>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero'
}
</script>

<style scoped lang="scss">
.hero {
  padding-top: 100px;
  padding-bottom: 82px;
  background: linear-gradient(1turn,#eceef2,rgba(236,238,242,0));
  &__contest-wrap {
    display: flex;
    margin-bottom: 26px;
  }
  &__main-title {
    margin-bottom: 40px;
    font-size: 48px;
    line-height: 56px;
  }
  &__link-wrapper {
    display: block;
    margin-right: 16px;
  }
  &__icon-medal {
    width: 60px;
    height: 60px;
  }
  &__content {
    display: flex;
    margin-bottom: 40px;
  }
  &__box {
    flex: 0 0 76%;
    max-width: 76%;
    margin-right: 32px;
  }
  &__video-wrap {
    position: relative;
    padding-bottom: 56.25%;
    padding-top: 25px;
    height: 0;
    border-radius: 10px;
    overflow: hidden;
  }
  &__video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 1px;
  }
  &__text {
    font-size: 18px;
    line-height: 24px;
  }
}
.voting {
  &__social-wrap {
    width: 100%;
  }
  &__title {
    margin-bottom: 16px;
  }
  &__description {
    margin-bottom: 16px;
  }
  &__item {
    display: flex;
    align-items: center;
    border-radius: 50px;
    &:not(:last-of-type) {
      margin-bottom: 8px;
    }
    &:last-of-type {
      margin-bottom: 16px;
    }
  }
  &__icon {
    margin-right: 15px;
    border-radius: 50%;
  }
  &__icon-text {
    display: block;
    font-size: 18px;
    line-height: 24px;
    color: #fff;
  }
  &__link {
    display: flex;
    align-items: center;
  }
  &__votes {
    display: block;
    text-align: center;
    font-size: 18px;
    line-height: 24px;
    font-weight: bold;
  }
}
.fb--background {
  background-color: #1f3b74;
}
.vk--background {
  background-color: #26466a;
}
.ok--background {
  background-color: #d06313;
}
@media (max-width: 1024px) {
  .hero {
    &__main-title {
      text-align: center;
    }
  }
}
@media (max-width: 768px) {
  .voting {
    &__votes {
      display: none;
    }
    &__social-wrap {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &__item {
      margin-bottom: 0 !important;
      background: none;
    }
    &__social-wrap {
      display: flex;
    }
    &__icon-text {
      font-size: 0;
    }
  }
  .l-icon {
    margin-right: 0;
  }
  .hero {
    &__main-title {
      font-size: 24px;
      line-height: 32px;
    }
    &__box {
      max-width: 100%;
      margin-right: 0;
    }
    &__content {
      display: flex;
      flex-direction: column;
    }
    &__video-wrap {
      margin-bottom: 32px;
    }
  }
}
@media (max-width: 600px) {
  .hero {
    padding-bottom: 32px;
  }
}
</style>
