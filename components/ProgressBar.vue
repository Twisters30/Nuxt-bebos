<template>
  <ul class="progress-bar__wrapper">
    <li class="progress-bar__line start-line bar-active"></li>
    <li class="progress-bar__line bar-active"></li>
    <li class="progress-bar__line"></li>
    <li class="progress-bar__line"></li>
    <li class="progress-bar__line"></li>
    <li class="progress-bar__line end-line"></li>
  </ul>
</template>

<script>
export default {
  name: 'ProgressBar'
}
</script>

<style lang="scss" scoped>

.progress-bar {
  &__wrapper {
    display: flex;
  }
  &__line {
    display: block;
    width: 6px;
    height: 4px;
    background: rgba(0, 0, 0, 0.2);
  }
  &__line:not(:last-of-type) {
    margin-right: 1px;
  }
}
.start-line {
  -webkit-border-top-left-radius: 4px;
  -webkit-border-bottom-left-radius: 4px;
  -moz-border-radius-topleft: 4px;
  -moz-border-radius-bottomleft: 4px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}
.end-line {
  -webkit-border-top-right-radius: 4px;
  -webkit-border-bottom-right-radius: 4px;
  -moz-border-radius-topright: 4px;
  -moz-border-radius-bottomright: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}
.bar-active {
  background: #0D870D;
}
</style>
