<template>
  <footer :class="{'fill': fill}" class="size-section">
    <div class="beboss-footer">
      <div class="beboss-footer__main">
        <div class="container-custom">
          <div class="beboss-footer__main-top"><a class="beboss-footer__logo-container" href="#">
            <div class="beboss-footer__logo-icon object-icons">
              <svg width="24" height="24">
                <use href="~@/assets/img/svg-sprites.svg#logo-icon"></use>
              </svg>
            </div>
            <div class="beboss-footer__logo-text">БИБОСС</div>
          </a>
            <div class="beboss-footer__item beboss-footer__item_control"><a class="bf-item" href="#">
              <div class="bf-item__icon">
                <svg class="icon icon-light" width="24" height="24">
                  <use href="~@/assets/img/svg-sprites.svg#light-icon"></use>
                </svg>
              </div>
              <div class="bf-item__text">Управление</div>
            </a></div>
          </div>
          <div class="beboss-footer__main-bottom">
            <div class="beboss-footer__col">
              <div class="beboss-footer__subtitle">Разделы</div>
              <ul class="beboss-footer__menu">
                <li class="beboss-footer__item"><a class="bf-item" href="#">
                  <div class="bf-item__icon">
                    <svg class="icon icon-light" width="24" height="24">
                      <use href="~@/assets/img/svg-sprites.svg#community-icon"></use>
                    </svg>
                  </div>
                  <div class="bf-item__text">Сообщество</div>
                </a></li>
                <li class="beboss-footer__item"><a class="bf-item" href="#">
                  <div class="bf-item__icon">
                    <svg class="icon icon-light" width="24" height="24">
                      <use href="~@/assets/img/svg-sprites.svg#commercial-icon"></use>
                    </svg>
                  </div>
                  <div class="bf-item__text">Коммерческая недвижимость</div>
                </a></li>
                <li class="beboss-footer__item"><a class="bf-item" href="#">
                  <div class="bf-item__icon">
                    <svg class="icon icon-light" width="24" height="24">
                      <use href="~@/assets/img/svg-sprites.svg#franchises-icon"></use>
                    </svg>
                  </div>
                  <div class="bf-item__text">Франшизы</div>
                </a></li>
                <li class="beboss-footer__item"><a class="bf-item" href="#">
                  <div class="bf-item__icon">
                    <svg class="icon icon-light" width="24" height="24">
                      <use href="~@/assets/img/svg-sprites.svg#gb-icon"></use>
                    </svg>
                  </div>
                  <div class="bf-item__text">Готовый бизнес</div>
                </a></li>
                <li class="beboss-footer__item"><a class="bf-item" href="#">
                  <div class="bf-item__icon">
                    <svg class="icon icon-light" width="24" height="24">
                      <use href="~@/assets/img/svg-sprites.svg#opt-icon"></use>
                    </svg>
                  </div>
                  <div class="bf-item__text">Товары для бизнеса</div>
                </a></li>
                <li class="beboss-footer__item"><a class="bf-item" href="#">
                  <div class="bf-item__icon">
                    <svg class="icon icon-light" width="24" height="24">
                      <use href="~@/assets/img/svg-sprites.svg#invest-icon"></use>
                    </svg>
                  </div>
                  <div class="bf-item__text">Инвестпроекты</div>
                </a></li>
                <li class="beboss-footer__item"><a class="bf-item" href="#">
                  <div class="bf-item__icon">
                    <svg class="icon icon-light" width="24" height="24">
                      <use href="~@/assets/img/svg-sprites.svg#idea-icon"></use>
                    </svg>
                  </div>
                  <div class="bf-item__text">Бизнес-идеи</div>
                </a></li>
                <li class="beboss-footer__item"><a class="bf-item" href="#">
                  <div class="bf-item__icon">
                    <svg class="icon icon-light" width="24" height="24">
                      <use href="~@/assets/img/svg-sprites.svg#bplan-icon"></use>
                    </svg>
                  </div>
                  <div class="bf-item__text">Бизнес-планы</div>
                </a></li>
                <li class="beboss-footer__item"><a class="bf-item" href="#">
                  <div class="bf-item__icon">
                    <svg class="icon icon-light" width="24" height="24">
                      <use href="~@/assets/img/svg-sprites.svg#supplier-icon"></use>
                    </svg>
                  </div>
                  <div class="bf-item__text">Заявки</div>
                </a></li>
              </ul>
            </div>
            <div class="beboss-footer__col">
              <div class="beboss-footer__subtitle">Проекты</div>
              <ul class="beboss-footer__menu">
                <li class="beboss-footer__item"><a class="bf-item" href="#">
                  <div class="bf-item__text">Бизнес-журнал</div>
                </a></li>
                <li class="beboss-footer__item"><a class="bf-item" href="#">
                  <div class="bf-item__text">Календарь мероприятий</div>
                </a></li>
                <li class="beboss-footer__item"><a class="bf-item" href="#">
                  <div class="bf-item__text">Рейтинг франшиз</div>
                </a></li>
                <li class="beboss-footer__item"><a class="bf-item" href="#">
                  <div class="bf-item__text">Рейтинг торговых центров</div>
                </a></li>
                <li class="beboss-footer__item"><a class="bf-item" href="#">
                  <div class="bf-item__text">Франчайзинговая премия</div>
                </a></li>
                <li class="beboss-footer__item"><a class="bf-item" href="#">
                  <div class="bf-item__text">Как начать бизнес</div>
                </a></li>
                <li class="beboss-footer__item"><a class="bf-item" href="#">
                  <div class="bf-item__text">Карта МСП</div>
                </a></li>
              </ul>
            </div>
            <div class="beboss-footer__col">
              <div class="beboss-footer__subtitle">Бибосс</div>
              <ul class="beboss-footer__menu">
                <li class="beboss-footer__item"><a class="bf-item" href="#">
                  <div class="bf-item__text">О портале</div>
                </a></li>
                <li class="beboss-footer__item"><a class="bf-item" href="#">
                  <div class="bf-item__text">Блоги пользователей</div>
                </a></li>
                <li class="beboss-footer__item"><a class="bf-item" href="#">
                  <div class="bf-item__text">Отзывы о нас</div>
                </a></li>
                <li class="beboss-footer__item"><a class="bf-item" href="#">
                  <div class="bf-item__text">Рекламные услуги</div>
                </a></li>
                <li class="beboss-footer__item"><a class="bf-item" href="#">
                  <div class="bf-item__text">Работа у нас</div>
                </a></li>
                <li class="beboss-footer__item"><a class="bf-item" href="#">
                  <div class="bf-item__text">Книги</div>
                </a></li>
                <li class="beboss-footer__item"><a class="bf-item" href="#">
                  <div class="bf-item__text">Контактные данные</div>
                </a></li>
              </ul>
            </div>
            <div class="beboss-footer__soc-container">
              <div class="beboss-footer__subtitle">Соцсети</div>
              <ul class="beboss-footer__menu beboss-footer__menu_soc">
                <li class="beboss-footer__item"><a class="bf-item" href="#">
                  <div class="bf-item__icon">
                    <svg class="icon icon-light" width="24" height="24" id="facebook-icon">
                      <use href="~@/assets/img/svg-sprites.svg#facebook-icon"></use>
                    </svg>
                  </div>
                  <div class="bf-item__text">Facebook</div>
                </a></li>
                <li class="beboss-footer__item"><a class="bf-item" href="#">
                  <div class="bf-item__icon">
                    <svg class="icon icon-light" width="24" height="24">
                      <use href="~@/assets/img/svg-sprites.svg#vkontakte-icon"></use>
                    </svg>
                  </div>
                  <div class="bf-item__text">Вконтакте</div>
                </a></li>
                <li class="beboss-footer__item"><a class="bf-item" href="#">
                  <div class="bf-item__icon">
                    <svg class="icon icon-light" width="24" height="24">
                      <use href="~@/assets/img/svg-sprites.svg#telegram-icon"></use>
                    </svg>
                  </div>
                  <div class="bf-item__text">Телеграм</div>
                </a></li>
                <li class="beboss-footer__item"><a class="bf-item" href="#">
                  <div class="bf-item__icon">
                    <svg class="icon icon-light" width="24" height="24">
                      <use href="~@/assets/img/svg-sprites.svg#insta-icon"></use>
                    </svg>
                  </div>
                  <div class="bf-item__text">Instagram</div>
                </a></li>
                <li class="beboss-footer__item"><a class="bf-item" href="#">
                  <div class="bf-item__icon">
                    <svg class="icon icon-light" width="24" height="24">
                      <use href="~@/assets/img/svg-sprites.svg#youtube-icon"></use>
                    </svg>
                  </div>
                  <div class="bf-item__text">Youtube</div>
                </a></li>
                <li class="beboss-footer__item"><a class="bf-item" href="#">
                  <div class="bf-item__icon">
                    <svg class="icon icon-light" width="24" height="24">
                      <use href="~@/assets/img/svg-sprites.svg#odnoklasniki-icon"></use>
                    </svg>
                  </div>
                  <div class="bf-item__text">Одноклассники</div>
                </a></li>
              </ul>
            </div>
            <div class="beboss-footer__btn-container">
              <div class="beboss-footer__btn"><a class="btn btn-outline-light btn-lg" href="#">
                <div class="bf-item align-middle">
                  <div class="bf-item__icon">
                    <svg class="icon icon-light" width="24" height="24">
                      <use href="~@/assets/img/svg-sprites.svg#telegram-icon"></use>
                    </svg>
                  </div>
                  <div class="bf-item__text">Чат предпринимателей</div>
                </div>
              </a></div>
              <div class="beboss-footer__btn"><a class="btn btn-outline-light btn-lg" href="#">
                <div class="bf-item align-middle">
                  <div class="bf-item__icon">
                    <svg class="icon icon-light" width="24" height="24">
                      <use href="~@/assets/img/svg-sprites.svg#iphone-icon"></use>
                    </svg>
                  </div>
                  <div class="bf-item__text">Мобильное приложение</div>
                </div>
              </a></div>
              <div class="beboss-footer__btn"><a class="btn btn-outline-light btn-lg" href="#">
                <div class="bf-item align-middle">
                  <div class="bf-item__icon">
                    <svg class="icon icon-light" width="24" height="24" id="support-icon">
                      <use href="~@/assets/img/svg-sprites.svg#support"></use>
                    </svg>
                  </div>
                  <div class="bf-item__text">Служба поддержки</div>
                </div>
              </a></div>
            </div>
          </div>
        </div>
      </div>
      <div class="beboss-footer__bottom">
        <div class="container">
          <div class="beboss-footer__bottom-container">
            <div class="beboss-footer__bottom-subtitle">
              <div class="beboss-footer__subtitle">Другие страны</div>
            </div>
            <div class="beboss-footer__country-container">
              <div class="beboss-footer__country"><a class="bf-item" href="#">
                <div class="bf-item__icon"><img src="~@/assets/styles/Ukraina.jpg"></div>
                <div class="bf-item__text">Украина</div>
              </a></div>
              <div class="beboss-footer__country"><a class="bf-item" href="#">
                <div class="bf-item__icon"><img src="~@/assets/styles/Kazakhstan.jpg"></div>
                <div class="bf-item__text">Казахстан</div>
              </a></div>
              <div class="beboss-footer__country"><a class="bf-item" href="#">
                <div class="bf-item__icon"><img src="~@/assets/styles/Belarus.jpg"></div>
                <div class="bf-item__text">Белоруссия</div>
              </a></div>
            </div>
            <div class="beboss-footer__copyright">
              <div class="bf-item">
                <div class="bf-item__text">© БИБОСС 2006-2019</div>
              </div>
              <div class="beboss-footer__li"><a href="#">
                <img src="~@/assets/styles/logo.gif" alt="LiveInternet: показано число просмотров и посетителей за 24 часа"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>

export default {
  name: 'Footer',
  data () {
    return {
      fill: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('~@/assets/styles/footer-v2.css');

.bf-item__icon svg {
  fill: #fff;
}
#facebook-icon {
  transform: translateX(10px);
}
#support-icon {
  transform: translateY(-4px);
}
</style>
