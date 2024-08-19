import { Suspense } from "react";
import { Article } from "~/features/article";

export default async function page({ params }: { params: { naddr: string } }) {
  return (
    <main className="grow p-6 sm:rounded-lg sm:bg-secondary sm:p-10 sm:shadow-sm sm:ring-1 sm:ring-zinc-950/5 dark:sm:ring-white/10">
      <Suspense fallback={<div></div>}>
        <Article naddr={params.naddr} />
      </Suspense>
    </main>
  );
}
