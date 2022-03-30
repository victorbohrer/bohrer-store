<template>
  <header>
      <nav class="flex p-6 justify-between bg-[#232946] items-center">
        <router-link to="/"> <h1 class="text-4xl text-white">BOHRER.</h1></router-link>
            <ul class="flex gap-4 text-white text-xl">
                <li><router-link to="/store">Store</router-link></li>
                <li><a href="">Carrinho</a></li>
                <li><a href="">Lorem</a></li>

            </ul>
            <div class="flex gap-3">
              <img src="../../assets/img/shopping-cart.svg"><span class="text-white text-xl" @add-counter="addCounter">{{counter}}</span>
            </div>
      </nav>
  </header>
</template>

<script>


export default {

  methods: {
    addCounter() {
      console.log('console log no header')
    }
  }
}
</script>

