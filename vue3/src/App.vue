<template>
  <AppHeader />
  <div class="w-full flex ">
    <router-view></router-view>
  </div>
  <img alt="Vue logo" src="./assets/logo.png">
</template>

<script>
import AppHeader from './components/AppHeader'

export default {
  components: {
    AppHeader
  }
}
</script>

