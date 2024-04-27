import { APIGatewayProxyEventV2 } from "https://deno.land/x/lambda/mod.ts";
import { hello } from "./hello.ts";

export const handler = (event: APIGatewayProxyEventV2) => {
  console.log("event", JSON.stringify(event));
  return {
    statusCode: 200,
    body: JSON.stringify(hello("Taiki")),
  };
};
