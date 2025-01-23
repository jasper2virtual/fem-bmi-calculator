<template>
  <div class="flex flex-col min-h-screen gap-10">

    <app-header />

    <div class="relative">
      <div class="gradient-1 absolute inset-x-0 top-0 rounded-b-3xl -z-10 
      h-[640px] app-desktop:h-[740px] 
      max-h-[50%] app-tablet:max-h-[75%] app-desktop:max-h-[110%]
      app-desktop:w-3/4
      app-desktop:mx-6">
      </div>
      <hero />
    </div>
    <div class="relative hidden app-desktop:app-grid-container -z-10">
        <img src="/src/assets/images/pattern-curved-line-left.svg" class=" absolute right-0"  />
    </div>
    <your-self />
    <suggestions />
    <bmi-limitations />  
    <div class="relative hidden app-desktop:app-grid-container -z-10">
      <img src="/src/assets/images/pattern-curved-line-right.svg" class=" absolute left-32 -top-60"  />
    </div>
  </div>
</template>
<script lang="ts" setup>
import appHeader from '/src/components/header.vue'
import hero from '/src/components/hero.vue'
import yourSelf from '/src/components/your-self.vue'
import suggestions from '/src/components/suggestions.vue'
import bmiLimitations from '/src/components/bmi-limitations.vue'
</script>

<style lang="scss" scoped>
.gradient-1 {
    background: linear-gradient(135deg, #D6FCFE00 0%, #D6E6FEFF 100%);
}
</style>