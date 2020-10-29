<template>
  <div class="m-auto">
    <div class="flex bg-gray-200">
      <h1 class="text-center">Welcome to Cloud Tomb</h1>
      <div class="text-center">Description: This is Home page, change stuff from here</div>
    </div>

    <div class="flex bg-gray-200">
      <div class="flex-initial text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
        <Login />
      </div>
      <div class="flex-initial text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
        <TombView />
      </div>
    </div>
  </div>

</template>

<script>
import Login from "@/components/Login"
import TombView from "@/components/TombView"

export default {
  components: { Login, TombView}
}

</script>