<template>
  <section class="about-us">
    <div class="container-custom">
      <Banner />
      <div class="about-us__content">
        <div class="about-us__wrapper">
          <h2 class="about-us__title title border-title">
            О компании
          </h2>
          <p class="about-us__text-description">
            Открой СВОЙ БИЗНЕС на услугах рабочей силы и ЗАРАБАТЫВАЙ от 200 000 рублей в месяц. <br>
            За руку доведем до 200 000 руб/ мес личного дохода, даже если это твой первый бизнес! <br>
            - НАЧАТЬ ОЧЕНЬ ЛЕГКО <br>
            Без найма кучи народу, закупок, оборудования и “закапывания” миллионов на годы. Первое время можно без офиса.<br>
          </p>
          <a class="about-us__link arrow-link" href="#">Страница франшизы</a>
          <div class="franchises__wrap">
            <h2 class="franchises__title title">
              Стоимость франшизы и цена владения
            </h2>
            <ul class="franchises__list">
              <li class="franchises__text-wrap">
                <p class="franchises__text-key">
                  Вступительный взнос
                </p>
                <span class="franchises__text-value">
                  150 000 — 400 000 ₽
                </span>
              </li>
              <li class="franchises__text-wrap">
                <p class="franchises__text-key">
                  Роялти
                </p>
                <span class="franchises__text-value">
                  5% от оборота в месяц, но не более 10 000 руб. При этом минимальная гарантированная сумма,
                  подлежащая переводу Дилером, составляет 5 000 рублей (для городов менее 250 тысяч жителей 3 000 руб.,
                  для городов менее 100 тысяч согласовывается)
                </span>
              </li>
              <li class="franchises__text-wrap">
                <p class="franchises__text-key">
                  Иные текущие платежи
                </p>
                <span class="franchises__text-value">
                  Аттестация и повышение квалификации тренеров 2 000 — 5 000 рублей в год
                </span>
              </li>
            </ul>
            <div class="franchises__download-wrap">
              <a class="franchises__download-text" href="#" download="">
                Запросить финансовый план
              </a>
            </div>
          </div>
          <div class="description-franchises__wrap">
            <h2 class="description-franchises__title title border-title">
              Описание франшизы
            </h2>
            <p class="description-franchises__text">
              ЧЕМ ТЫ БУДЕШЬ ЗАНИМАТЬСЯ? И КАК БУДЕШЬ ЗАРАБАТЫВАТЬ НА УСЛУГАХ РАБОЧЕЙ СИЛЫ?
            </p>
            <p class="description-franchises__text">
              Ты будешь предоставлять рабочую силу на склады, фабрики, заводы, производства со сдельной и почасовой оплатой.
            </p>
            <p class="description-franchises__text">
              Кто будет работать у тебя?
            </p>
            <ul class="description-franchises__about-list">
              <li class="description-franchises__item">Рабочие, ищущие дополнительный заработок</li>
              <li class="description-franchises__item">Временно безработные люди</li>
            </ul>
            <a class="description-franchises__link arrow-link" href="#">Страница франшизы</a>
            <ul class="description-franchises__img-list">
              <li class="description-franchises__img-item">
                <img class="description-franchises__image" src="~@/assets/img/images/workers.jpg" alt="image-workers">
              </li>
              <li class="description-franchises__img-item">
                <img class="description-franchises__image" src="~@/assets/img/images/workers-any.jpg" alt="image-workers">
              </li>
              <li class="description-franchises__img-item">
                <img class="description-franchises__image" src="~@/assets/img/images/workers-more.jpg" alt="image-workers">
              </li>
              <li class="description-franchises__img-item">
                <img class="description-franchises__image" src="~@/assets/img/images/workers-l.jpg" alt="image-workers">
              </li>
            </ul>
          </div>
          <form class="details-form__wrap">
            <div class="details-form__member-wrap">
              <div class="details-form__avatar-wrap">
                <img class="details-form__avatar-img" src="~@/assets/img/avatar-member.png" alt="avatar-manager">
                <div>
                  <p class="details-form__name">Дмитрий Варфоломеев</p>
                  <p class="details-form__position">Представитель</p>
                </div>
              </div>
            </div>
            <div class="details-form__content-wrapper">
              <div class="details-form__container">
                <label class="details-form__input-wrap wrap-name">
                  <input class="details-form__input" type="text" placeholder="Ваше имя">
                </label>
                <label class="details-form__input-wrap wrap-email">
                  <input class="details-form__input" type="email" placeholder="E-mail">
                </label>
                <label class="details-form__input-wrap wrap-number">
                  <input class="details-form__input input-number" type="number" placeholder="Номер телефона">
                </label>
                <textarea class="details-form__textarea" name="form-textarea" cols="30" rows="3" placeholder=""></textarea>
                <div class="details-form__checkbox-wrap">
                  <div>
                    <input id="checkbox" class="details-form__checkbox-input" type="checkbox">
                    <label for="checkbox" class="details-form__checkbox-custom">Я не робот</label>
                  </div>
                  <span class="details-form__check-text">Проверка безопасности</span>
                </div>
                <button class="details-form__btn btn btn-success" type="submit">Отправить сообщение</button>
                <p class="details-form__safe">
                  Ваши данные в полной безопасности. Они видны только автору объявления.
                </p>
              </div>
              <div class="details-form__container-list">
                <h3 class="details-form__title-list">Что можно обсудить с представителем:</h3>
                <ul class="details-form__list">
                  <li class="details-form__item">Узнать есть ли возможность открытия в вашем городе</li>
                  <li class="details-form__item">Попросить контакты уже действующих франчайзи</li>
                  <li class="details-form__item">Получить шаблоны договоров для ознакомления</li>
                  <li class="details-form__item">Ознакомиться с финансовым планом и этапами запуска бизнеса</li>
                  <li class="details-form__item">Узнать какие гарантии может дать франшиза</li>
                  <li class="details-form__item">Обсудить возможность скидки</li>
                </ul>
              </div>
            </div>
          </form>
        </div>
        <div class="indicators__wrap">
          <h2 class="indicators__title title border-title">
            Показатели
          </h2>
          <div class="indicators__text-wrap">
            <p class="indicators__text-key">
              1725
            </p>
            <span class="indicators__text-value">
              Год основания компании
            </span>
          </div>
          <div class="indicators__text-wrap">
            <p class="indicators__text-key">
              1894
            </p>
            <span class="indicators__text-value">
              Год запуска франчайзинга
            </span>
          </div>
          <div class="indicators__text-wrap">
            <p class="indicators__text-key">
              26 850
            </p>
            <span class="indicators__text-value">
              Франшизных предприятий
            </span>
          </div>
          <div class="indicators__text-wrap">
            <p class="indicators__text-key">
              1
            </p>
            <span class="indicators__text-value">
              Собственных предприятий
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Banner from './Banner'
export default {
  name: 'AboutUs',
  components: { Banner }
}
</script>
<style lang="scss" scoped>

.description-franchises {
  &__wrap {
    margin-bottom: 32px;
  }
  &__about-list {
    margin-bottom: 16px;
    list-style: disc inside none;
  }
  &__link {
    margin-bottom: 32px;
  }
  &__img-list {
    display: grid;
    gap: 16px;
    grid-template-rows: repeat(1, 1fr);
    grid-template-columns: repeat(4, 1fr);
    grid-auto-columns: auto;
  }
  &__item {
    margin-bottom: 8px;
  }
  &__text {
    margin-bottom: 8px;
  }
}
.wrap-name {
  &::before {
    width: 20px;
    height: 20px;
    background: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE1IDdDMTUgNS4zNDMxNCAxMy42NTY5IDQgMTIgNEMxMC4zNDMxIDQgOSA1LjM0MzE0IDkgN0M5IDguNjU2ODYgMTAuMzQzMSAxMCAxMiAxMEMxMy42NTY5IDEwIDE1IDguNjU2ODYgMTUgN1pNMTcgN0MxNyA5Ljc2MTQyIDE0Ljc2MTQgMTIgMTIgMTJDOS4yMzg1NyAxMiA3IDkuNzYxNDIgNyA3QzcgNC4yMzg1OCA5LjIzODU3IDIgMTIgMkMxNC43NjE0IDIgMTcgNC4yMzg1OCAxNyA3Wk0yMSAxOC45MjgzQzIxLjEyMiAyMC42MDg1IDE5LjczODkgMjIgMTguMDUwNyAyMkw1Ljk1NjgxIDIyQzQuMjY4NTQgMjIgMi44ODU0OCAyMC42MDg1IDMuMDA3NSAxOC45MjgzQzMuMjg2NzggMTUuMDgyOCA3LjI2NjkyIDEzIDEyLjAwMDEgMTNDMTYuNzIzOSAxMyAyMC43MTgzIDE1LjA0OTkgMjEgMTguOTI4M1pNMTkuMDA1IDE5LjA3MzJDMTguNzk1MSAxNi4xODE5IDE1LjYwNTUgMTUgMTEuOTk5OCAxNUM4LjM3MjQ1IDE1IDUuMjA4OTggMTYuMjIzOCA1LjAwMjA0IDE5LjA3MzJDNC45NjY0NSAxOS41NjMzIDUuNDAwNSAyMCA1Ljk1NjYxIDIwTDE4LjA1MDUgMjBDMTguNjA2NiAyMCAxOS4wNDA2IDE5LjU2MzMgMTkuMDA1IDE5LjA3MzJaIiBmaWxsPSJibGFjayIgZmlsbC1vcGFjaXR5PSIwLjIiLz4KPC9zdmc+Cg==") no-repeat -2px;
  }
}
.wrap-email {
  &::before {
    width: 20px;
    height: 20px;
    background: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQgM0MyLjUgMyAxIDQuNSAxIDZWMThDMSAxOS41IDIuNSAyMSA0IDIxSDIwQzIxLjUgMjEgMjMgMTkuNSAyMyAxOFY2QzIzIDQuNSAyMS41IDMgMjAgM0g0Wk0yMSA4LjM1MzQxTDEyIDEyLjQwMzRMMyA4LjM1MzQxVjZDMyA1LjQ0NzcyIDMuNDQ3NzIgNSA0IDVIMjBDMjAuNTUyMyA1IDIxIDUuNDQ3NzIgMjEgNlY4LjM1MzQxWk0yMSAxMC41NDY2VjE4QzIxIDE4LjU1MjMgMjAuNTUyMyAxOSAyMCAxOUg0QzMuNDQ3NzIgMTkgMyAxOC41NTIzIDMgMThWMTAuNTQ2NkwxMS4xNzkzIDE0LjIyNzNDMTEuNzAxMiAxNC40NjIxIDEyLjI5ODggMTQuNDYyMSAxMi44MjA3IDE0LjIyNzNMMjEgMTAuNTQ2NloiIGZpbGw9ImJsYWNrIiBmaWxsLW9wYWNpdHk9IjAuMiIvPgo8L3N2Zz4K") no-repeat -2px;
  }
}
.wrap-number {
  &::before {
    width: 20px;
    height: 20px;
    background: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNi4zMDc3IDFINy42OTIzMUM2LjIwNjE1IDEgNSAyLjEyIDUgMy41VjIwLjVDNSAyMS44OCA2LjIwNjE1IDIzIDcuNjkyMzEgMjNIMTYuMzA3N0MxNy43OTM4IDIzIDE5IDIxLjg4IDE5IDIwLjVWMy41QzE5IDIuMTIgMTcuNzkzOCAxIDE2LjMwNzcgMVpNMTIgMjJDMTEuMTcgMjIgMTAuNSAyMS4zMyAxMC41IDIwLjVDMTAuNSAxOS42NyAxMS4xNyAxOSAxMiAxOUMxMi44MyAxOSAxMy41IDE5LjY3IDEzLjUgMjAuNUMxMy41IDIxLjMzIDEyLjgzIDIyIDEyIDIyWk0xNyAxOEg3VjRIMTdWMThaIiBmaWxsPSJibGFjayIgZmlsbC1vcGFjaXR5PSIwLjIiLz4KPC9zdmc+Cg==") no-repeat -2px;
  }
}
.input-number {
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
}

.details-form {
  &__checkbox-wrap > div {
    display: flex;
    align-items: center;
    white-space: nowrap;
  }
  &__checkbox-custom {
    margin: 0;
  }
  &__content-wrapper {
    display: flex;
  }
  &__item {
    position: relative;
    padding-left: 29px;
    &:not(:last-of-type) {
      margin-bottom: 16px;
    }
    &::before {
      content: '';
      display: block;
      position: absolute;
      width: 18px;
      height: 100%;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      background: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yMC42OTIgNi4yNzgxNEMyMS4wOTA3IDYuNjYwMzQgMjEuMTA0MSA3LjI5MzM2IDIwLjcyMTkgNy42OTIwNEwxMC4xNzY0IDE4LjY5MkM5Ljk4NzU1IDE4Ljg4OSA5LjcyNjM4IDE5LjAwMDMgOS40NTM0NyAxOUM5LjE4MDU2IDE4Ljk5OTcgOC45MTk2MyAxOC44ODc5IDguNzMxMTkgMTguNjkwNUwzLjI3NjY1IDEyLjk3NjJDMi44OTUzMSAxMi41NzY3IDIuOTEwMDMgMTEuOTQzNyAzLjMwOTUzIDExLjU2MjRDMy43MDkwMiAxMS4xODEgNC4zNDIwMiAxMS4xOTU3IDQuNzIzMzYgMTEuNTk1Mkw5LjQ1NjExIDE2LjU1MzRMMTkuMjc4MSA2LjMwNzk3QzE5LjY2MDMgNS45MDkyOSAyMC4yOTM0IDUuODk1OTQgMjAuNjkyIDYuMjc4MTRaIiBmaWxsPSIjMEQ4NzBEIi8+Cjwvc3ZnPgo=") no-repeat;
    }
  }
  &__safe {
    position: relative;
    padding-left: 41px;
    font-size: 14px;
    line-height: 20px;
    color: rgba(0, 0, 0, 0.4);
    &::before {
      position: absolute;
      content: '';
      display: block;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 35px;
      height: 37px;
      background: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzUiIGhlaWdodD0iMzciIHZpZXdCb3g9IjAgMCAzNSAzNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTM0LjQxMzcgMjMuNzE3NEwyNi4yNzY2IDMyLjk1NjNDMjUuMTkwNCAzNC4xODY2IDIzLjYyMDQgMzQuODkyNiAyMS45Njk3IDM0Ljg5MzJIOS43MTI1OEw3LjU4MzkgMzdMMCAyOS42ODI5TDUuNDM2MTUgMjQuMzM2NkM3LjY4Nzk4IDIyLjEyMjQgMTEuMDIgMjEuMzc2IDE0LjAxNTcgMjIuNDE0OEwxNS4yMTM2IDIyLjgzMDFIMjIuNTUzM0MyMy4xNzkyIDIyLjgyOTggMjMuNzc4NSAyMy4wODA3IDI0LjIxNDIgMjMuNTI1NEMyNC42NDk5IDIzLjk3MDIgMjQuODg0OCAyNC41NzA3IDI0Ljg2NTEgMjUuMTg5OUMyNC43OTM3IDI2LjQ0NzQgMjMuNzM0MiAyNy40MjYxIDIyLjQ2MTggMjcuNDA5OUgxOC4wNDhDMTcuNzEzMSAyNy4zODgzIDE3LjM5MzggMjcuNTUyOSAxNy4yMTk3IDI3LjgzNjlDMTcuMDQ1NiAyOC4xMjEgMTcuMDQ1NiAyOC40NzcyIDE3LjIxOTcgMjguNzYxM0MxNy4zOTM4IDI5LjA0NTMgMTcuNzEzMSAyOS4yMDk5IDE4LjA0OCAyOS4xODgzSDIyLjQ2MThDMjQuNjk5OCAyOS4xOTEgMjYuNTQ2MiAyNy40NTUgMjYuNjU4MSAyNS4yNDI3QzI2LjY1ODEgMjUuMjQyNyAyNi42NTgxIDI1LjIwNSAyNi42NTgxIDI1LjE4NjFMMzAuNzM2MiAyMC42NTU0QzMxLjU5NjcgMTkuNjY3MiAzMy4wODk4IDE5LjUyMjYgMzQuMTI3NiAyMC4zMjY5QzM0LjYyNjMgMjAuNzM0OCAzNC45Mzc4IDIxLjMyNDQgMzQuOTkxNyAyMS45NjI1QzM1LjA0NTUgMjIuNjAwNiAzNC44MzcxIDIzLjIzMzMgMzQuNDEzNyAyMy43MTc0Wk0zMS4yMzU5IDQuMDA4N1Y0LjQ4ODJDMzEuMjM1OSA1LjAxMzAxIDMxLjIzNTkgNS41NTI5MiAzMS4yNTg4IDYuMTMwNTlDMzEuMzA4NCA4LjY3MTU4IDMxLjM2MTggMTEuNjUwNSAzMC40OTU4IDE0LjQzNjlDMjkuMjk0NSAxOC4yMDkyIDI1Ljc2IDIwLjc3NDUgMjEuNzYzNyAyMC43NzQ1QzE3Ljc2NzQgMjAuNzc0NSAxNC4yMzI4IDE4LjIwOTIgMTMuMDMxNSAxNC40MzY5QzEyLjE1NzkgMTEuNjU0MyAxMi4yMTEzIDguNjc5MTMgMTIuMjY4NSA2LjEzMDU5QzEyLjI2ODUgNS41NTY3IDEyLjI5MTQgNC45OTc5MSAxMi4yOTE0IDQuNDg4MlY0LjAwODdDMTIuMjkxNCAzLjYxNDU5IDEyLjYxNDIgMy4yOTUxIDEzLjAxMjQgMy4yOTUxSDEzLjQ5NjlDMTYuNjQwMyAzLjI5NTEgMTguOTMzMSAyLjQ0MTgyIDIwLjkzNTggMC41Mjc1OEwyMS4yNzU0IDAuMjAyODc3QzIxLjU1NTQgLTAuMDY3NjI1OCAyMi4wMDI0IC0wLjA2NzYyNTggMjIuMjgyNSAwLjIwMjg3N0wyMi42MjIgMC41Mjc1OEMyNC41OTQzIDIuNDQxODIgMjYuODg3IDMuMjk1MSAzMC4wMzggMy4yOTUxSDMwLjUyMjVDMzAuOTE3OCAzLjI5OTI0IDMxLjIzNTkgMy42MTc1MiAzMS4yMzU5IDQuMDA4N1pNMjYuMDc4MiA4LjQwNzI4TDI1LjEzMjIgNy40NjMzOEMyNC44ODUyIDcuMjIwNTIgMjQuNDg2NSA3LjIyMDUyIDI0LjIzOTUgNy40NjMzOEwyMC42ODQxIDEwLjk4MjNMMTkuMjk1NSA5LjYxNTQ4QzE5LjA0NiA5LjM3ODYzIDE4LjY1MjIgOS4zNzg2MyAxOC40MDI4IDkuNjE1NDhMMTcuNDQ5MSAxMC41NzA3QzE3LjIwMzcgMTAuODE1MSAxNy4yMDM3IDExLjIwOTggMTcuNDQ5MSAxMS40NTQyTDIwLjIzMDEgMTQuMjA2NkMyMC40NzcxIDE0LjQ0OTUgMjAuODc1OCAxNC40NDk1IDIxLjEyMjggMTQuMjA2NkwyNi4wODIxIDkuMjk4MzNDMjYuMjAxOCA5LjE4MDEgMjYuMjY4NyA5LjAxOTM5IDI2LjI2OCA4Ljg1MjAyQzI2LjI2NzMgOC42ODQ2NCAyNi4xOTkgOC41MjQ1IDI2LjA3ODIgOC40MDcyOFoiIGZpbGw9IiMxRUEwMUUiLz4KPC9zdmc+Cg==") no-repeat;
    }
  }
  &__check-text {
    color: rgba(0, 0, 0, 0.52);
    font-size: 14px;
    line-height: 20px;
    text-align: right;
  }
  &__wrap {
    padding: 24px;
    background: #ECEEF2;
    border-radius: 16px;
  }
  &__checkbox-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 21px 16px 19px 16px;
    margin-bottom: 8px;
    border-radius: 6px;
    border: 1px solid rgba(0, 0, 0, 0.2);
  }
  &__checkbox-input {
    position: relative;
    z-index: -1;
    opacity: 0;
    & + label {
      position: relative;
      cursor: pointer;
      padding-left: 30px;
    }
    & + label::before {
      content: '';
      position: absolute;
      top: -4px;
      left: -12px;
      width: 32px;
      height: 32px;
      border-radius: 6px;
      background: #fff;
    }
    & + label::after {
      content: '';
      position: absolute;
      top: -4px;
      left: -12px;
      width: 32px;
      height: 32px;
      border: 2px solid rgba(0, 0, 0, 0.2);
      border-radius: 6px;
      background: #FFF;
    }
    &:checked + label::before {
      z-index: 1;
      background: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yMC42OTIgNi4yNzgxNEMyMS4wOTA3IDYuNjYwMzQgMjEuMTA0MSA3LjI5MzM2IDIwLjcyMTkgNy42OTIwNEwxMC4xNzY0IDE4LjY5MkM5Ljk4NzU1IDE4Ljg4OSA5LjcyNjM4IDE5LjAwMDMgOS40NTM0NyAxOUM5LjE4MDU2IDE4Ljk5OTcgOC45MTk2MyAxOC44ODc5IDguNzMxMTkgMTguNjkwNUwzLjI3NjY1IDEyLjk3NjJDMi44OTUzMSAxMi41NzY3IDIuOTEwMDMgMTEuOTQzNyAzLjMwOTUzIDExLjU2MjRDMy43MDkwMiAxMS4xODEgNC4zNDIwMiAxMS4xOTU3IDQuNzIzMzYgMTEuNTk1Mkw5LjQ1NjExIDE2LjU1MzRMMTkuMjc4MSA2LjMwNzk3QzE5LjY2MDMgNS45MDkyOSAyMC4yOTM0IDUuODk1OTQgMjAuNjkyIDYuMjc4MTRaIiBmaWxsPSIjMEQ4NzBEIi8+Cjwvc3ZnPgo=")no-repeat 5px;
    }
  }
  &__container {
    display: flex;
    flex-direction: column;
    margin-right: 32px;
  }
  &__textarea {
    position: relative;
    padding: 9px 12px 15px;
    margin-bottom: 8px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 6px;
  }
  &__input-wrap {
    position: relative;
    margin-bottom: 8px;
    &::before {
      content: '';
      position: absolute;
      left: 15px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  &__input {
    width: 100%;
    padding:9px 12px 9px 44px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 6px;
  }
  &__avatar-wrap {
    display: flex;
    margin-bottom: 16px;
  }
  &__avatar-img {
    margin-right: 16px;
  }
  &__btn {
    padding: 13px;
    background: #0D870D;
    margin-bottom: 16px;
  }
  &__title-list {
    margin-bottom: 16px;
    font-size: 16px;
    line-height: 24px;
    font-weight: bold;
  }
}

.about-us {
  background-color: #fff;
  &__content {
    display: flex;
    padding-bottom: 32px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }
  &__wrapper {
    margin-right: 32px;
  }
  &__link {
    display: block;
    width: fit-content;
    margin-bottom: 32px;
  }
  &__text-description {
    margin-bottom: 16px;
  }
}
.franchises {
  &__wrap {
    background: rgba(30, 160, 30, 0.1);
    border-radius: 16px;
    padding: 24px 24px 32px 24px;
    margin-bottom: 32px;
  }
  &__list {
    margin-bottom: 37px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }
  &__text-wrap {
    display: flex;
    &:not(:last-child) {
      margin-bottom: 16px;
    }
    &:last-of-type {
      padding-bottom: 24px;
    }
  }
  &__text-key {
    min-width: 200px;
    margin-right: 24px;
  }
  &__title {
    margin-bottom: 24px;
  }
  &__download-plan {
    padding-top: 32px;
    border-top: 1px solid rgba(0, 0, 0, 0.2);
  }
  &__download-text {
    position: relative;
    display: block;
    margin: 0 auto;
    font-weight: bold;
    &::before {
      content: '';
      position: absolute;
      left: -30%;
      top: 50%;
      width: 50px;
      height: 50px;
      transform: translateY(-50%);
      background: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCA1MCA1MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNSAxNUMyNS41NTIzIDE1IDI2IDE1LjQ0NzcgMjYgMTZWMjUuNTg1OEwyOS4yOTI5IDIyLjI5MjlDMjkuNjgzNCAyMS45MDI0IDMwLjMxNjYgMjEuOTAyNCAzMC43MDcxIDIyLjI5MjlDMzEuMDk3NiAyMi42ODM0IDMxLjA5NzYgMjMuMzE2NiAzMC43MDcxIDIzLjcwNzFMMjUuNzA3MSAyOC43MDcxQzI1LjMxNjYgMjkuMDk3NiAyNC42ODM0IDI5LjA5NzYgMjQuMjkyOSAyOC43MDcxTDE5LjI5MjkgMjMuNzA3MUMxOC45MDI0IDIzLjMxNjYgMTguOTAyNCAyMi42ODM0IDE5LjI5MjkgMjIuMjkyOUMxOS42ODM0IDIxLjkwMjQgMjAuMzE2NiAyMS45MDI0IDIwLjcwNzEgMjIuMjkyOUwyNCAyNS41ODU4VjE2QzI0IDE1LjQ0NzcgMjQuNDQ3NyAxNSAyNSAxNVpNMTYgMjVDMTYuNTUyMyAyNSAxNyAyNS40NDc3IDE3IDI2VjMwQzE3IDMxLjY1NjkgMTguMzQzMSAzMyAyMCAzM0gzMEMzMS42NTY5IDMzIDMzIDMxLjY1NjkgMzMgMzBWMjZDMzMgMjUuNDQ3NyAzMy40NDc3IDI1IDM0IDI1QzM0LjU1MjMgMjUgMzUgMjUuNDQ3NyAzNSAyNlYzMEMzNSAzMi43NjE0IDMyLjc2MTQgMzUgMzAgMzVIMjBDMTcuMjM4NiAzNSAxNSAzMi43NjE0IDE1IDMwVjI2QzE1IDI1LjQ0Nzc gMTUuNDQ3NyAyNSAxNiAyNVoiIGZpbGw9ImJsYWNrIiBmaWxsLW9wYWNpdHk9IjAuMiIvPgo8cGF0aCBkPSJNMjUgNDlDMTEuNzQ1MiA0OSAxIDM4LjI1NDggMSAyNUgtMUMtMSAzOS4zNTk0IDEwLjY0MDYgNTEgMjUgNTFWNDlaTTQ5IDI1QzQ5IDM4LjI1NDggMzguMjU0OCA0OSAyNSA0OVY1MUMzOS4zNTk0IDUxIDUxIDM5LjM1OTQgNTEgMjVINDlaTTI1IDFDMzguMjU0OCAxIDQ5IDExLjc0NTIgNDkgMjVINTFDNTEgMTAuNjQwNiAzOS4zNTk0IC0xIDI1IC0xVjFaTTI1IC0xQzEwLjY0MDYgLTEgLTEgMTAuNjQwNiAtMSAyNUgxQzEgMTEuNzQ1MiAxMS43NDUyIDEgMjUgMVYtMVoiIGZpbGw9ImJsYWNrIiBmaWxsLW9wYWNpdHk9IjAuMiIvPgo8L3N2Zz4K") no-repeat;
    }
  }
}
.indicators {
  &__wrap {
    min-width: 256px;
  }
  &__text-wrap {
    &:not(:last-of-type) {
      margin-bottom: 16px;
    }
  }
  &__text-key {
    font-size: 18px;
    font-weight: bold;
  }
}
.border-title {
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}
@media (max-width: 1205px) {
  .indicators {
    &__wrap {
      display: none;
    }
  }
  .about-us {
    &__wrapper {
      margin-right: 0;
    }
  }
}
@media (max-width: 910px) {
  .description-franchises {
    &__img-list {
      grid-template-columns: repeat(2, 1fr);
    }
    &__image {
      width: 100%;
    }
  }
}
@media (max-width: 768px) {
  .details-form {
    &__title-list {
      text-align: center;
    }
    &__safe {
      padding-bottom: 24px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.2)
    }
    &__content-wrapper {
      flex-direction: column;
    }
    &__container {
      margin-right: 0;
      margin-bottom: 24px;
    }
  }
  .about-us {
    &__content {
      display: block;
    }
  }
}
@media (max-width:550px) {
  .franchises {
    &__text-wrap {
      flex-direction: column;
    }
    &__download-text {
      margin-left: 71px;
    }
  }
}
@media (max-width:400px) {
  .details-form {
    &__name {
      display: none;
    }
  }
}
</style>
