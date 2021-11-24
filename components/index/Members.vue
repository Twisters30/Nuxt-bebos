<template>
  <section class="members">
    <div class="container-custom">
      <div class="members__wrap">
        <h2 class="members__title title">
          Другие участники конкурса
        </h2>
        <div class="swiper">
          <div class="cards-company__list swiper-wrapper">
            <div class="cards-company__item swiper-slide">
              <figure>
                <img class="cards-company__img" src="~@/assets/img/images/video.jpg" alt="photo-member">
                <figcaption>
                  <h3 class="cards-company__title">Borodach</h3>
                  <span class="cards-company__name">Мужские парикмехерские</span>
                  <div class="cards-company__group">
                    <a class="cards-company__link" href="#">Смотреть и голосовать</a>
                    <svg class="cards-company__arrow-icon">
                      <use href="~@/assets/img/svg-sprites.svg#arrow-icon"></use>
                    </svg>
                  </div>
                </figcaption>
              </figure>
            </div>
            <div class="cards-company__item swiper-slide">
              <figure>
                <img class="cards-company__img" src="~@/assets/img/images/1.jpg" alt="photo-member">
                <figcaption>
                  <h3 class="cards-company__title">Персональное решение</h3>
                  <span class="cards-company__name">Сеть услуг рабочей силы</span>
                  <div class="cards-company__group">
                    <a class="cards-company__link" href="#">Смотреть и голосовать</a>
                    <svg class="cards-company__arrow-icon">
                      <use href="~@/assets/img/svg-sprites.svg#arrow-icon"></use>
                    </svg>
                  </div>
                </figcaption>
              </figure>
            </div>
            <div class="cards-company__item swiper-slide">
              <figure>
                <img class="cards-company__img" src="~@/assets/img/images/2.jpg" alt="photo-member">
                <figcaption>
                  <h3 class="cards-company__title">TOY.RU</h3>
                  <span class="cards-company__name">Магазин детских игрушек</span>
                  <div class="cards-company__group">
                    <a class="cards-company__link" href="#">Смотреть и голосовать</a>
                    <svg class="cards-company__arrow-icon">
                      <use href="~@/assets/img/svg-sprites.svg#arrow-icon"></use>
                    </svg>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
          <div class="swiper-pagination swiper-pagination-bullets"></div>
        </div>
      </div>
      <a href="#" class="members__link">Все участники конкурса</a>
    </div>
  </section>
</template>

<script>
import { Swiper, Navigation, Pagination, Autoplay } from 'swiper'
import 'swiper/swiper-bundle.min.css'

export default {
  name: 'Members',
  data () {
    return {}
  },
  mounted () {
    window.addEventListener('resize', this.getNewWidth)
    this.getNewWidth()
    Swiper.use([Navigation, Pagination])
    new Swiper('.swiper', {
      slidesPerView: 3,
      spaceBetween:32,
      direction: 'horizontal',
      modules: [Navigation, Pagination],
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          slidesPerGroup: 1
        },
        1024: {
          slidesPerView: 3,
          slidesPerGroup: 3
        }
      }
    })
  },
  unmounted () {
    window.addEventListener('resize', this.getNewWidth)
  },
  methods: {
    getNewWidth () {
      this.widthScreen = window.innerWidth
      console.log(this.widthScreen)
    }
  }
}
</script>

<style lang="scss" scoped>
.swiper {
  overflow: hidden;
  position: relative;
}
.swiper-slide {
  width: 352px;
  align-items: center;
  display: flex;
  justify-content: center;
}
.members {
  padding-bottom: 40px;
  &__wrap {
    padding: 40px 0;
  }
  &__title {
    margin-bottom: 32px;
  }
  &__link {
    display: block;
    padding: 13px 24px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    font-weight: bold;
  }
}
.cards-company {
  &__title {
    font-size: 24px;
    line-height: 32px;
    font-weight: 700;
  }
  &__item {
    position: relative;
  }
  &__img {
    width: 100%;
    margin-bottom: 16px;
  }
  &__name {
    margin-bottom: 16px;
  }
  &__link {
    margin-right: 17px;
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      pointer-events: auto;
    }
  }
  &__group {
    display: flex;
    align-items: center;
  }
  &__arrow-icon {
    width: 10px;
    height: 14px;
  }
}
@media (max-width: 1205px) {
  .cards-company {
    &__img {
      width: 100%;
    }
    &__list {
      grid-template-columns: repeat(1, 1fr);
    }
  }
}
@media (max-width: 1024px) {
  .cards-company {
    &__item > figure {
      width: 100%;
    }
  }
}
</style>
