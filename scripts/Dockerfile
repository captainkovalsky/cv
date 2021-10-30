FROM alpine:latest as builder
LABEL maintainer="Viktor Dzundza <vdzundza@protonmain.com>"
WORKDIR /app
COPY build ./html
COPY nginx ./nginx
RUN ls -la

FROM nginx:alpine
COPY --from=builder /app/nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/html/ /usr/share/nginx/html
ENTRYPOINT ["nginx", "-g", "daemon off;"]
