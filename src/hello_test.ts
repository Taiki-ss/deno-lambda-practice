import { assertEquals } from "std/assert/mod.ts";
import { hello } from "./hello.ts";

Deno.test("hello", () => {
  assertEquals(hello("Taiki"), "Hello, Taiki!");
});
