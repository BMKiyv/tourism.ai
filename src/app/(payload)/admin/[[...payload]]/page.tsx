import { RootPage } from "@payloadcms/next/views";
import config from "@/payload.config";
import { importMap } from "../importMap";

type Args = {
  params: Promise<{
    payload: string[];
  }>;
  searchParams: Promise<{
    [key: string]: string | string[];
  }>;
};

const Page = async ({ params, searchParams }: Args) => {
  const { payload } = await params;

  return RootPage({
    config,
    importMap,
    params: Promise.resolve({ segments: payload }),
    searchParams,
  });
};

export default Page;
