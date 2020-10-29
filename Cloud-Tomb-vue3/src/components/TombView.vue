<template>

  <div v-if="currentUser.isLoggedIn && currentUser.tombText.length > 0">
    <div>
      {{ currentUser.tombText }}
    </div>
    <div>
      From {{ currentUser.birthday }}
    </div>
  </div>

  <div v-else>
    Random Tomb:
    <div>
      {{ randomTomb.tombText }}
    </div>
    <div>
      {{ randomTomb.birthday }}
    </div>
  </div>
</template>
<script>

import {store} from "@/store/store";

export default {
  data() {
    return {
      randomTomb: store.randomTomb,
      currentUser: store.currentUser,
    }
  },
  mounted() {
    store.updateRandomTomb()
  }
}

</script>