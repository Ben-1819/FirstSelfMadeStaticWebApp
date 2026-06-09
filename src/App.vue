<script setup lang="ts">
import { ref } from 'vue';
import { Button } from '@/components/ui/button';

const show = ref<boolean>(false);

const toggleShow = () => {
  show.value = !show.value;
};
</script>

<template>
  <main>
    <div class="flex flex-row items-center justify-center">
      <Button variant="outline" @click="toggleShow">I'm Ben</Button>

      <h1 v-if="show" class="text-2xl">Show is true!</h1>
      <h1 v-else class="text-2xl">Show is false!</h1>
    </div>
  </main>
</template>
