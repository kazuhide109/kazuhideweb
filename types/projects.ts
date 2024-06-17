import type { MicroCMSImage, MicroCMSListContent } from "microcms-js-sdk";

export type Prj = {
  id?: string;
  title?: string;
  text?: string;
  url?: string;
  image?: MicroCMSImage;
};