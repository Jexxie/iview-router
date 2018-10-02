<template>
  <div>
    这是移动端的登陆页面
    <Button @click="handleLogin">登陆</Button>
  </div>
</template>

<script>
export default {
  methods: {
    handleLogin () {
      window.localStorage.setItem('login', 1)
    }
  }
  
}
</script>