<template>
  <header>
      <nav class="flex p-6 justify-between bg-[#232946] items-center">
        <router-link to="/"> <h1 class="text-4xl text-white">BOHRER.</h1></router-link>
            <ul class="flex gap-4 text-white">
                <li><router-link to="/store">Store</router-link></li>
                <li><a href="">Lorem</a></li>
                <li><a href="">Lorem</a></li>

            </ul>
            <div class="flex gap-3">
              <img src="../../assets/img/shopping-cart.png"> <span class="text-white text-xl">{{counter}}</span>
            </div>
      </nav>
  </header>
</template>

<script>
export default {

  props: {
    counter:  {
      type: Number,
      required: true,
      default: 0
    }
  }
}
</script>

