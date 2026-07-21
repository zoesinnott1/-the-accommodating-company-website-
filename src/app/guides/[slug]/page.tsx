import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { Badge } from "@/components/ui/badge";
import { GuideContent } from "@/components/guides/guide-content";
import { GuideSources } from "@/components/guides/guide-sources";
import { GuideCta } from "@/components/guides/guide-cta";
import { guides, getGuideBySlug } from "@/modules/guides/data/guides";

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

// Next.js 15 makes route params an async prop rather than a plain object.
type GuideParams = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: GuideParams }): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return {};
  return {
    title: guide.title,
    description: guide.excerpt,
  };
}

export default async function GuideArticlePage({ params }: { params: GuideParams }) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();

  return (
    <>
      <SiteHeader />
      <main>
        <article className="mx-auto max-w-2xl px-8 pt-14 pb-20">
          <Badge variant="category">{guide.category}</Badge>
          <h1 className="mt-3 text-[30px] font-bold leading-[1.25] tracking-tight text-ink-900">
            {guide.title}
          </h1>
          <p className="mt-3 text-[12.5px] text-ink-600">
            Published {guide.publishedLabel} · {guide.readingTime} · Last
            reviewed {guide.lastReviewedLabel}
          </p>

          <div className="mt-8">
            <GuideContent blocks={guide.body} />
          </div>

          <GuideCta
            heading={guide.ctaHeading}
            description={guide.ctaDescription}
            contactSuffix={guide.ctaContactSuffix}
          />
          <GuideSources links={guide.sourceLinks} />
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
