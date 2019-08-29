<template>
  <div class="container">
    <div class="col-md-10 col-md-offset-1">
      <div class="panel panel-default">
        <div class="panel-body">
          <h2 class="text-center">
            <i class="glyphicon glyphicon-edit"></i>
            {{ a ? "编辑话题" : "新建话题" }}
          </h2>
          <hr />
          <form accept-charset="UTF-8">
            <div class="form-group">
              <input
                class="form-control"
                type="text"
                name="title"
                value=""
                placeholder="请填写标题"
                required
              />
            </div>
            <div class="form-group">
              <select class="form-control" name="category_id" required>
                <option value="" hidden disabled selected>请选择分类</option>
                <option value="1">分类1</option>
                <option value="2">分类2</option>
                <option value="3">分类3</option>
                <option value="4">分类4</option>
              </select>
            </div>
            <div class="form-group">
              <textarea
                name="body"
                class="form-control"
                id="editor"
                ref="editor"
                rows="3"
                placeholder="请填入至少三个字符的内容。"
                required
              ></textarea>
            </div>
            <div class="well well-sm">
              <button type="submit" class="btn btn-primary">
                <span class="glyphicon glyphicon-ok" aria-hidden="true"></span>
                保存
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped></style>
