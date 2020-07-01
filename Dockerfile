# copy all source code to the container and yarn run build
FROM mhart/alpine-node:11 AS builder
WORKDIR /app
COPY . .
RUN yarn run build

# install the serve package
# copy the output from build above into current container folder
FROM mhart/alpine-node
RUN yarn global add serve
WORKDIR /app
COPY --from=builder /app/build .
CMD ["serve", "-p", "80", "-s", "."]
