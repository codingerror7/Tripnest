import { Suspense } from "react";
import SearchClient from "./SearchClient.js";

export const dynamic = "force-dynamic";

export default function Page() {
  return (
    <Suspense fallback={<div className="text-white text-center">Loading...</div>}>
      <SearchClient />
    </Suspense>
  );
}
