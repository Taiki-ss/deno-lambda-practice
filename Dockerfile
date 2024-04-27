FROM denoland/deno-lambda:1.42.4

COPY . .
RUN deno cache main.ts

CMD ["main.handler"]