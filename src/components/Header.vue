<template>
  <nav class="navbar navbar-default navbar-static-top">
    <div class="container">
      <div class="navbar-header">
        <!-- Collapsed Hamburger -->
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#app-navbar-collapse">
          <span class="sr-only">Toggle Navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <!-- Branding Image -->
        <a class="navbar-brand" href="javascript:;">
          LaraBBS
        </a>
      </div>
      <div class="collapse navbar-collapse" id="app-navbar-collapse">
        <!-- Left Side Of Navbar -->
        <ul class="nav navbar-nav">
          <li class="active"><a href="javascript:;">话题</a></li>
          <li class=""><a href="javascript:;">分享</a></li>
          <li class=""><a href="javascript:;">教程</a></li>
          <li class=""><a href="javascript:;">问答</a></li>
          <li class=""><a href="javascript:;">公告</a></li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li><a href="#">登录</a></li>
          <li><a href="#">注册</a></li>
          <li>
            <a href="#">
              <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
            </a>
          </li>
          <li>
            <a href="#" class="notifications-badge" style="margin-top: -2px;">
              <span class="badge badge-hint fade-xxx" title="消息提醒">123</span>
            </a>
          </li>
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
              <span class="user-avatar pull-left" style="margin-right:8px; margin-top:-5px;">
                <img src="" class="img-responsive img-circle" width="30px" height="30px">
              </span>
              用户名
              <span class="caret"></span>
            </a>
            <ul class="dropdown-menu" role="menu">
              <li>
                <a href="javascript:;">
                  <span class="glyphicon glyphicon-user" aria-hidden="true"></span>
                  个人中心
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  编辑资料
                </a>
              </li>
              <li>
                <a href="#">退出登录</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>

</style>
