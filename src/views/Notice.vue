<template>
  <div class="container">
    <div class="col-md-10 col-md-offset-1">
      <div class="panel panel-default">
        <div class="panel-body">
          <h3 class="text-center">
            <span class="glyphicon glyphicon-bell" aria-hidden="true"></span> 我的通知
          </h3>
          <hr>
          <div class="notification-list">
            <div class="media">
              <div class="avatar pull-left">
                <a href="#">
                  <img class="media-object img-thumbnail" alt="" src=""  style="width:48px;height:48px;"/>
                </a>
              </div>
              <div class="infos">
                <div class="media-heading">
                  <a href="">用户名</a>
                  评论了
                  <a href="">话题标题</a>
                  <span class="meta pull-right">
                <span class="glyphicon glyphicon-clock" aria-hidden="true"></span>
                5天前
            </span>
                </div>
                <div class="reply-content">
                  ...
                </div>
              </div>
            </div>
            <hr>
          </div>
          <div class="empty-block">没有消息通知！</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Notice"
  }
</script>

<style scoped>

</style>
