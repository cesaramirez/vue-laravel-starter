<template>
  <div id="app">
    <loading ref="loading"></loading>

    <transition name="page" mode="out-in">
    </transition>
  </div>
</template>

<script>

export default {
  el: '#app',
}
</script>
