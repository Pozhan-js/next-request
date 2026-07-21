"use client";

import dynamic from "next/dynamic";

const WithCustomLoading = dynamic(
  async () => {
    return import("../components/WithCustomLoading");
  },
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  },
);

export default function Page() {
  return <WithCustomLoading />;
}
