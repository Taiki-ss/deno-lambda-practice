FROM denoland/deno-lambda:1.42.4

COPY . .
RUN deno cache src/main.ts

CMD ["src/main.handler"]