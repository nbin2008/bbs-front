<template>
  <div class="row">
    <div class="col-lg-9 col-md-9 topic-list">
      <div class="alert alert-info" role="alert" v-show="false">
        分类名称 ：分类描述
      </div>

      <div class="panel panel-default">
        <div class="panel-heading">
          <ul class="nav nav-pills">
            <li class="active"><a href="javascript:;">最后回复</a></li>
            <li class=""><a href="javascript:;">最新发布</a></li>
          </ul>
        </div>
        <div class="panel-body">
          <!-- 话题列表 -->
          <ul class="media-list">
            <li class="media">
              <div class="media-left">
                <a href="#">
                  <img class="media-object img-thumbnail" style="width: 52px; height: 52px;" src="" title="">
                </a>
              </div>

              <div class="media-body">

                <div class="media-heading">
                  <a href="#">话题标题</a>
                  <a class="pull-right" href="" >
                    <span class="badge">1</span>
                  </a>
                </div>
                <div class="media-body meta">
                  <a href="#" title="分类名称">
                    <span class="glyphicon glyphicon-folder-open" aria-hidden="true"></span>
                    分类名称
                  </a>
                  <span> • </span>
                  <a href="#">
                    <span class="glyphicon glyphicon-user" aria-hidden="true"></span>
                    用户名
                  </a>
                  <span> • </span>
                  <span class="glyphicon glyphicon-time" aria-hidden="true"></span>
                  <span class="timeago" title="最后活跃于">3小时前</span>
                </div>
              </div>
            </li>
          </ul>
          <div class="empty-block">暂无数据 ~_~ </div>
          <!-- 分页 -->
<!--          {!! $topics->appends(Request::except('page'))->render() !!}-->
        </div>
      </div>
    </div>

    <div class="col-lg-3 col-md-3 sidebar">
      <div class="panel panel-default">
        <div class="panel-body">
          <a href="#" class="btn btn-success btn-block" aria-label="Left Align">
            <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span> 新建帖子
          </a>
        </div>
      </div>
      <div class="panel panel-default">
        <div class="panel-body active-users">
          <div class="text-center">活跃用户</div>
          <hr>
          <a class="media" href="#">
            <div class="media-left media-middle">
              <img src="" width="24px" height="24px" class="img-circle media-object">
            </div>
            <div class="media-body">
              <span class="media-heading">用户名</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainShow"
}
</script>

<style scoped>

</style>
