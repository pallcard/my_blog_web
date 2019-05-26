#!/usr/bin/env bash

BUILD_PROFILE=""
PORT="7003"
LOGIN_COMMAND="login --username=13476861319 -p=Zhenghe123 registry.cn-hangzhou.aliyuncs.com"
DOCKER_NAME="my_blog_web"
repo="registry.cn-hangzhou.aliyuncs.com/wechatx/${DOCKER_NAME}:latest"
REMOTE_SERVER="root@203.195.238.249"
JOB_NAME=${DOCKER_NAME}

#编译
echo start to compile
rm -rf build
npm run build

# Docker
echo Start to build docker...

cd ci
rm -rf dist
cp -rf ../build dist
docker build -t ${DOCKER_NAME} .
rm -rf dist


docker ${LOGIN_COMMAND}
docker tag ${DOCKER_NAME} ${repo}
docker push ${repo}

# Deploy
echo deploy to remote server...

ssh ${REMOTE_SERVER} "
docker ${LOGIN_COMMAND};
scp docker
docker pull ${repo};
docker rm -f $JOB_NAME || true;
docker run -d -p ${PORT}:80 --name ${JOB_NAME} ${repo};"


