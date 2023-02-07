#
# - 功能: 快速构建JavaScriptCollection镜像
# - 用法: docker build -f Faster.Dockerfile --build-arg APP_VERSION=0.0.1 -t JavaScriptCollection-0.0.1  .
#

FROM registry.cn-hangzhou.aliyuncs.com/142vip/nginx:1.23.0-alpine
ARG APP_VERSION
LABEL version=$APP_VERSION  description="JavaScriptCollection文档合集、博客"
LABEL author="【Github&公众号】：Rong姐姐好可爱" email="fairy_vip@2925.com"

# 将dist文件中的内容复制到 /usr/share/nginx/html/
COPY ./docs/.vuepress/dist/  /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/

