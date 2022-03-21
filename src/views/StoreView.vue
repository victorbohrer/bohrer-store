<template>
  <section class="px-7 py-10">
      <h2 class="text-4xl mb-10">
        Iam store
      </h2>

      <div class="flex gap-6 justify-center">
        <div class="box p-5 rounded border text-center">
          <p class="text-2xl text-center mb-4">SKATE</p>
          <img class="w-96 border" src="https://img.freepik.com/fotos-gratis/feche-o-skate-no-rinque_23-2148937840.jpg?t=st=1647719815~exp=1647720415~hmac=01133c553e30e141703de94e30ac0bd55d609f178dae1befee893e974a9d1100&w=900" alt="Skate">
          <p class="text-green-600 mt-2 text-xl">R$500,00</p>
          <Button type="button" message="Add To Cart" @add-counter="addCounter"/>
        </div>
        <div class="box p-5 rounded border text-center">
          <p class="text-2xl text-center mb-4">CROCS</p>
          <img class="w-96 border" src="https://img.freepik.com/fotos-gratis/crocodilos-de-borracha-da-marinha-isolados-no-fundo-branco_508084-91.jpg?w=996" alt="Skate">
          <p class="text-green-600 mt-2 text-xl">R$100,00</p>
          <Button type="button" message="Add To Cart"/>
        </div>
      </div>
  </section>
</template>

<script>
import Button from '../components/shared/ButtonComponent.vue'
export default {
  components: {
    Button
  }, 

  mounted() {
      document.title = 'Store'
  },

  methods: {
    addCounter() {
      console.log('Button clicked')
    }
  }
}
</script>

<style>

</style>