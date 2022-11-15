<template>
  <div class="login-place">
    <div class="container">
      <form action="" method="post">
        <header>
          <h1>Sign in</h1>
          <p>Please enter your email and password</p>
        </header>
        <div class="form-item">
          <input type="email" class="form-input" required="required" placeholder="E-mail Address">
        </div>
        <div class="form-item">
          <input type="password" class="form-input" required="required" placeholder="Password">
          <button type="button">Forgot your password?</button>
        </div>
        <button type="submit" class="form-submit" >
          <span class="btn-text">Sign in</span>
        </button>
        <div class="form-hint">
          <span>Don't have an account?</span>
          <a href="#">Create Account</a>
        </div>
      </form>
    </div>
  </div>
</template>


<script>

export default {
  name: 'LoginView',
}
</script>


<style scoped lang="scss">


.login-place{
  background-color:transparent;
  margin-top: 100px;
  width: 100%;
  height: 100vh;
  display: flex;
    >.container{
      margin: auto;
        >form{
          width: 25vw;
          margin: auto;
          @media screen and (max-width: 992px) {
            width: 50vw;
          }
          @media screen and (max-width: 768px) {
            width: 80vw;
          }
          >.form-item{
            margin-bottom: 10px;
            position: relative;
            >input{
              width: 100%;
              padding: 10px;
              background-color:transparent;
              border: 1px solid black;
              &:focus{
                border: solid 3px rgb(113, 203, 228);
                caret-color:rgb(113, 203, 228);
                outline: none;
                
              }
            }
            >button{
              position: absolute;
              right: 0;
              background-color: transparent;
              border-style: none;
              font-size: 12px;
              height: 100%;
              color: rgb(118, 123, 123);
            }
          }
          >button{
            width: 100%;
            margin: 20px auto;
            border: solid 1px rgb(113, 203, 228);
            padding: 10px 44px;
            position: relative;
            background-color:rgba(255, 255, 255,.3);
            &:before{
              transition: all 0.85s; 
              content: '';
              width: 0%;
              height: 100%;
              background: rgb(113, 203, 228);
              position: absolute;
              top: 0;
              left: 0;
            }
            >.btn-text{
              color: white;
              mix-blend-mode:difference;
            }
            &:hover{
              &:before{
                width: 100%;
              }
            }
          }
          >.form-hint{
            >span{
              margin-right: 5px;
            }
          }
        }
    }

}
</style>
