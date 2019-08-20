<template>
  <div class="row">

    <div class="col-lg-3 col-md-3 hidden-sm hidden-xs author-info">
      <div class="panel panel-default">
        <div class="panel-body">
          <div class="text-center">
            作者：xxx
          </div>
          <hr>
          <div class="media">
            <div align="center">
              <a href="">
                <img class="thumbnail img-responsive" src="" width="300px" height="300px">
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-lg-9 col-md-9 col-sm-12 col-xs-12 topic-content">
      <div class="panel panel-default">
        <div class="panel-body">
          <h1 class="text-center">
            话题标题
          </h1>

          <div class="article-meta text-center">
            创建时间
            ⋅
            <span class="glyphicon glyphicon-comment" aria-hidden="true"></span>
            0
          </div>

          <div class="topic-body">
            话题内容
          </div>

          <div class="operate">
            <hr>
            <a href="" class="btn btn-default btn-xs pull-left" role="button">
              <i class="glyphicon glyphicon-edit"></i> 编辑
            </a>

            <form action="" method="post">
              <button type="submit" class="btn btn-default btn-xs pull-left" style="margin-left: 6px">
                <i class="glyphicon glyphicon-trash"></i>
                删除
              </button>
            </form>
          </div>

        </div>
      </div>

      <!-- 回复 -->
      <div class="panel panel-default topic-reply">
        <div class="panel-body">
          <div class="reply-box">
            <form action="" method="POST" accept-charset="UTF-8">
              <div class="form-group">
                <textarea class="form-control" rows="3" placeholder="分享你的想法" name="content"></textarea>
              </div>
              <button type="submit" class="btn btn-primary btn-sm"><i class="fa fa-share"></i>回复</button>
            </form>
          </div>
          <hr>
          <!-- 回复列表 -->
          <div class="media">
            <div class="avatar pull-left">
              <a href="">
                <img class="media-object img-thumbnail" src=""  style="width:48px;height:48px;"/>
              </a>
            </div>

            <div class="infos">
              <div class="media-heading">
                <a href="">
                  名称
                </a>
                <span> •  </span>
                <span class="meta" title="">3天前</span>
                <span class="meta pull-right">
                  <form action="" method="post">
                    <button type="submit" class="btn btn-default btn-xs pull-left">
                      <i class="glyphicon glyphicon-trash"></i>
                    </button>
                  </form>
                </span>
              </div>
              <div class="reply-content">
                回复内容
              </div>
            </div>
          </div>
          <hr>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TopicDetail"
  }
</script>

<style scoped>

</style>
