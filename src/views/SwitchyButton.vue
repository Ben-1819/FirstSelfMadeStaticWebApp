<script setup lang="ts">
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import { Button } from '@/components/ui/button';

const router = useRouter();

const show = ref<boolean>(false);

const toggleShow = () => {
  show.value = !show.value;
};

const goToHome = () => {
  router.push({
    name: 'Home',
  });
};
</script>

<template>
  <main>
    <div class="flex flex-row items-center justify-center">
      <Button variant="outline" @click="toggleShow">I'm Ben</Button>
      <div>
        <h1 v-if="show" class="text-2xl">Show is true!</h1>
        <h1 v-else class="text-2xl">Show is false!</h1>
      </div>
      <div>
        <Button variant="outline" class="text-green-600" @click="goToHome"
          >Go to the home page</Button
        >
      </div>
    </div>
  </main>
</template>
