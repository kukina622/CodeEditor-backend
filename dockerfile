FROM node:16
LABEL maintainer="Min"

WORKDIR /app 
COPY dockerRuntime/ /app

RUN curl -O https://download.java.net/java/GA/jdk12.0.2/e482c34c86bd4bf8b56c0b35558996b9/10/GPL/openjdk-12.0.2_linux-x64_bin.tar.gz && \
  tar xvf openjdk-12.0.2_linux-x64_bin.tar.gz

ENV JAVA_HOME=/app/jdk-12.0.2/
ENV PATH=$PATH:$JAVA_HOME/bin
