<script setup lang="ts">
import { useRouter } from 'vue-router';
import { Button } from '@/components/ui/button';
import WhatsNext from '@/components/WhatsNext.vue';
const router = useRouter();

const goToSwitchyButton = () => {
  router.push({
    name: 'SwitchyButton',
  });
};
</script>

<template>
  <main>
    <div class="flex flex-col items-center">
      <h1>This is the home page!</h1>
      <div>
        <h2>Whats next?</h2>
        <div>
          <WhatsNext />
        </div>
      </div>
      <div>
        <Button variant="outline" class="text-green-600" @click="goToSwitchyButton"
          >Go to switchy button</Button
        >
      </div>
    </div>
  </main>
</template>
