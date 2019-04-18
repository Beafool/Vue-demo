<template>
  <div>
    <h2 v-if="!repoName">LOADING...</h2>
    <h3 v-else>
      most star repo is <a :href="repoUrl">{{repoName}}</a>
    </h3>
  </div>

</template>
<script>
  import axios from 'axios'
  export default {
  data(){
    return {
      repoName:'', //仓库的名称
      repoUrl:'',  //仓库的url
    }
  },
   async mounted() {

      const url = `https://api.github.com/search/repositories?q=v&sort=stars`
     /* //使用vue-resource发送异步ajax请求
      this.$http.get(url) .then(response =>{//请求成功了
      //取出数据
        const  result =response.data
        const { name,html_url } =result.items[0]
        //更新状态数据
        this.repoName =html_url
        this.repoName =name

      }).catch(error =>{
      alert('请求出错了')
      })*/

  /*   //使用axios发送ajax异步请求
      axios.get(url) .then(response =>{//请求成功了
        //取出数据
        const  result =response.data
        const { name,html_url } =result.items[0]
        //更新状态数据
        this.repoName =html_url
        this.repoName =name

      }).catch(error =>{
        alert('请求出错了')
      })*/

      try {
        const response = await axios.get(url)
        //取出数据
        const  result =response.data
        const { name,html_url } =result.items[0]
        //更新状态数据
        this.repoName =html_url
        this.repoName =name
      }catch (error) {
        alert('请求出错了')
      }

    }


  }
</script>
<style>

</style>
