<template>
  <div class="row">
    <div class="col-lg-3 col-md-3 hidden-sm hidden-xs user-info">
      <div class="panel panel-default">
        <div class="panel-body">
          <div class="media">
            <div align="center">
              <img class="thumbnail img-responsive" src="" width="300px" height="300px">
            </div>
            <div class="media-body">
              <hr />
              <h4><strong>个人简介</strong></h4>
              <p>这是个人简介</p>
              <hr />
              <h4><strong>注册于</strong></h4>
              <p>这是注册时间</p>
              <br />
              <h4><strong>最后活跃</strong></h4>
              <p>这是最后活跃时间</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-9 col-md-9 col-sm-12 col-xs-12">
      <div class="panel panel-default">
        <div class="panel-body">
          <span>
            <h1 class="panel-title pull-left" style="font-size:30px;">用户名 <small>用户邮箱</small></h1>
          </span>
        </div>
      </div>
      <hr />
      <!-- 用户发布的内容 -->
      <div class="panel panel-default">
        <div class="panel-body">
          <ul class="nav nav-tabs">
            <li class="active">
              <a href="">Ta 的话题</a>
            </li>
            <li class="">
              <a href="">Ta 的回复</a>
            </li>
          </ul>
          <!-- 话题 -->
          <ul class="list-group">
            <li class="list-group-item">
              <a href="">
                话题
              </a>
              <span class="meta pull-right">
                2 回复
                <span> ⋅ </span>
                5天前
              </span>
            </li>
          </ul>
          <!-- 回复 -->
          <ul class="list-group">
            <li class="list-group-item">
              <a href="">
                话题
              </a>
              <div class="reply-content" style="margin: 6px 0;">
                内容
              </div>

              <div class="meta">
                <span class="glyphicon glyphicon-time" aria-hidden="true"></span> 回复于 5天前
              </div>
            </li>
          </ul>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "Personal"
};
</script>

<style scoped></style>
