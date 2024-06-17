import type { MicroCMSImage, MicroCMSListContent } from "microcms-js-sdk";

export type Blog = {
  tag?: string[];
  id?: string;
  title?: string;
  explaintext?: string;
  mainimage?: MicroCMSImage;
  subimages?: MicroCMSImage [];
  youtube?: string;
  awards?: string;
  media?: string;
  team?: string;
  role?: string;
};