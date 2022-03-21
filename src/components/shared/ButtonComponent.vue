<template>
  <button class="border p-2 rounded mt-2" :type="type" @click="$emit('addCounter')">{{message}}</button>
</template>

<script>
export default {

    props: {
      type: String,
      message: String,
    },

    name: 'AddCounter',

    emits: ['addCounter']
      
}
</script>

<style>

</style>