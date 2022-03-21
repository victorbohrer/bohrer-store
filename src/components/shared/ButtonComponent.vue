<template>
  <button class="border p-2 rounded mt-2" :type="type">{{message}}</button>
</template>

<script>
export default {

    props: {
      type: String,
      message: String,
    }

}
</script>

<style>

</style>