FROM node:16
LABEL maintainer="Min"

WORKDIR /app 
COPY dockerRuntime/ /app

RUN tar xvf openjdk-12.0.2_linux-x64_bin.tar.gz

ENV JAVA_HOME=/app/jdk-12.0.2/
ENV PATH=$PATH:$JAVA_HOME/bin
