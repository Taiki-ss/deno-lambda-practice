import { APIGatewayProxyEventV2 } from "npm:aws-lambda";
import { hello } from "./hello.ts";

export const handler = (event: APIGatewayProxyEventV2) => {
  console.log("event", JSON.stringify(event));
  return {
    statusCode: 200,
    body: JSON.stringify(hello("Taiki")),
  };
};
