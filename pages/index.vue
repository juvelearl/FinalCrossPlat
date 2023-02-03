<template>
<div class = "container pt-5">
  <div class = "container pt-5">
    <div class = "container pt-5">
      <div class = "container pt-5">
  <form>
    <div class = "shadow col-lg-4 p-3 mb-5 bg-white rounded">
      <h1> Login </h1>
      <div class = "input-group mt-5">
      <div class = "input-group-prepend">
        <div class = "col-xs-2">
        <span class = "input-group-text">EmailAdd</span> 
        </div>
        <input id = "email" type = "text" class = "form-control" name = "email" placeholder="Email">
      </div>
      <div class = "input-group mt-2">
        <div class = "input-group-prepend">
          <div class = "col-xs-2">
            <span class = "input-group-text">Password</span>
          </div>
          <input id = "password" type = "password" class = "form-control" name = "password" placeholder="Password">
        </div>
      </div>
       <div class="row mb-4">
        <div class="col-md-6 d-flex justify-content-center">
          <div class="form-check mb-4 mb-md-0">
            <input  id="loginCheck" class="form-check-input" type="checkbox"/>
            <label class="form-check-label" for="loginCheck"> Remember me? </label>
          </div>
        </div>

        <div class="col-md-5 d-flex justify-content-center">
          <a href="#!">Forgot password?</a>
        </div>

        <div class = "container pt-3">
       <NuxtLink to="/dashboard" class="btn btn-primary navbar-btn">login</NuxtLink>
        </div>
      </div>
    </div>
    </div>
  </form>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'IndexPage',
  data(){
    return{
      Username: "",
      Password: ""
    }
  }
}
</script>
