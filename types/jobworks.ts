import type { MicroCMSImage, MicroCMSListContent } from "microcms-js-sdk";

export type Jobworks = {
  id?: string;
  title?: string;
  role?: string;
  text?: string;
  youtube?: string;
  mainimage?: MicroCMSImage;
  subimages?: MicroCMSImage [];
  tools?:string [];
  url?: string;
  company: string;
};