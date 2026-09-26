import { ArrowLink } from "@/components/ArrowLink";

export default function NotFound() {
  return (
    <main id="content" className="shell flex min-h-[100svh] flex-col justify-center py-32">
      <p className="section-label">404</p>
      <h1 className="mt-4 max-w-xl font-serif text-[clamp(2.8rem,6vw,4.5rem)] leading-[1.02] tracking-[-0.03em]">
        This page isn’t here.
      </h1>
      <div className="mt-8">
        <ArrowLink href="/">Back home</ArrowLink>
      </div>
    </main>
  );
}
