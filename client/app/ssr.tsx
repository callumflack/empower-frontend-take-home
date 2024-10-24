/// <reference types="vinxi/types/server" />
import {
  createStartHandler,
  defaultStreamHandler,
} from "@tanstack/start/server";
import { getRouterManifest } from "@tanstack/start/router-manifest";
import { createRouter } from "./router";

const ssrHandler = createStartHandler({
  createRouter,
  getRouterManifest,
})(defaultStreamHandler);

export default ssrHandler;
