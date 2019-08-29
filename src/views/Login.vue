<template>
  <div class="col-md-offset-2 col-md-8">
    <div class="panel panel-default">
      <div class="panel-heading">
        <h5>登录</h5>
      </div>
      <div class="panel-body">
        <form>
          <div class="form-group">
            <label>邮箱：</label>
            <input type="text" name="email" class="form-control">
          </div>

          <div class="form-group">
            <label>密码（<a href="">忘记密码</a>）：</label>
            <input type="password" name="password" class="form-control">
          </div>
<!--          <div class="checkbox">-->
<!--            <label><input type="checkbox" name="remember"> 记住我</label>-->
<!--          </div>-->
          <button type="submit" class="btn btn-primary">登录</button>
        </form>
        <hr />
        <p>还没账号？<a href="">现在注册！</a></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login"
};
</script>

<style scoped></style>
