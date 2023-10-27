#
# - 功能: 构建JavaScriptCollection镜像
# - 用法: docker build -f Dockerfile --build-arg APP_VERSION=0.0.1 -build-arg CONTAINER_BUILD=true -t JavaScriptCollection-0.0.1  .
# - 参数:
#   APP_VERSION: 版本
#   CONTAINER_BUILD: 采用容器构建
#
# 注意：vite构建需要支持node14以上，安装node16较为稳妥

FROM registry.cn-hangzhou.aliyuncs.com/142vip/node:18.18.0-alpine AS build_base

ARG CONTAINER_BUILD
## 确定工作空间 /apps
WORKDIR /apps
COPY . .

RUN echo $CONTAINER_BUILD;

## 基于容器自动构建
RUN if [ "$CONTAINER_BUILD" = "true" ]; then  \
    sh ./scripts/ci && pnpm build; \
  fi;

FROM registry.cn-hangzhou.aliyuncs.com/142vip/nginx:1.23.0-alpine
ARG APP_VERSION
LABEL version=$APP_VERSION  description="JavaScriptCollection文档合集、博客"
LABEL author="【Github&公众号】：储凡" email="fairy@2925.com"

# 将dist文件中的内容复制到 /usr/share/nginx/html/ 这个目录下面 注意：--from参数
COPY  --from=build_base /apps/docs/.vuepress/dist/  /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/
