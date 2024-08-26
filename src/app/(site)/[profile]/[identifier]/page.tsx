import { Suspense } from "react";

import { Article } from "~/features/article";
import { SkeletonArticle } from "~/features/article/components/SkeletonArticle";
import { getUser } from "~/server/auth";
import { getPublicKeyFromNip05OrNpub } from "~/server/nostr";
import { notFound } from "next/navigation";

type Props = {
  profile: string;
  identifier: string;
};

async function ArticleWrapper({ profile, identifier }: Props) {
  const user = await getUser();

  if (!identifier) {
    notFound();
  }

  const profilePublicKey = await getPublicKeyFromNip05OrNpub(profile);

  const address = {
    identifier,
    pubkey: profilePublicKey,
    kind: 30023,
  };

  return <Article address={address} publicKey={user?.publicKey} />;
}

export default function ArticlePage({
  params,
}: {
  params: { profile: string; identifier: string };
}) {
  return (
    <Suspense fallback={<SkeletonArticle />}>
      <ArticleWrapper profile={params.profile} identifier={params.identifier} />
    </Suspense>
  );
}
