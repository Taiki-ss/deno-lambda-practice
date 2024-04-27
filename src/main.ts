import { hello } from "./hello.ts";

export const handler = async (event: any) => {
  console.log("event", JSON.stringify(event));
  return {
    statusCode: 200,
    body: JSON.stringify(hello("Taiki")),
  };
};
