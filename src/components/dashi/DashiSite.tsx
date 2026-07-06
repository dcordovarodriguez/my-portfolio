"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import {
  Camera,
  ChevronRight,
  Clock,
  MapPin,
  Menu,
  Phone,
  Star,
  X,
} from "lucide-react";

import { dashiGalleryImages, dashiHeroImages, dashiTeamImages } from "@/data/dashi-gallery";
import {
  DashiMenuCategory,
  dashiMenuCategories,
  dashiMenuItems,
  featuredDashiItems,
} from "@/data/dashi-menu";
import { dashiReviews } from "@/data/dashi-reviews";
import { dashiNav, dashiSite } from "@/data/dashi-site";
import { cn } from "@/lib/utils";

function DashiHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-[#fffdf8]/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#home" className="font-serif text-4xl tracking-[0.08em] text-black">
          DASHI
          <span className="sr-only"> Sushi home</span>
        </a>

        <nav aria-label="Primary navigation" className="hidden items-center gap-8 lg:flex">
          {dashiNav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium uppercase tracking-[0.18em] text-neutral-700 transition hover:text-[#d7193f]"
            >
              {item.label}
            </a>
          ))}
          <a
            href={dashiSite.instagramHref}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/15 text-neutral-800 transition hover:border-[#d7193f] hover:text-[#d7193f]"
            aria-label="Open Dashi Sushi Instagram"
          >
            <Camera className="h-4 w-4" />
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/15 text-neutral-900 lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <nav aria-label="Mobile navigation" className="border-t border-black/10 bg-[#fffdf8] px-5 py-5 lg:hidden">
          <div className="grid gap-2">
            {dashiNav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex min-h-12 items-center justify-between border-b border-black/10 text-base font-medium uppercase tracking-[0.12em] text-neutral-900"
              >
                {item.label}
                <ChevronRight className="h-4 w-4 text-[#d7193f]" />
              </a>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}

function SectionIntro({
  eyebrow,
  title,
  children,
  light = false,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <div className="reveal max-w-3xl">
      <p className={cn("text-xs font-semibold uppercase tracking-[0.26em]", light ? "text-white/60" : "text-[#0f6b5d]")}>
        {eyebrow}
      </p>
      <h2 className={cn("mt-3 font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl", light ? "text-white" : "text-neutral-950")}>
        {title}
      </h2>
      <div className={cn("mt-4 text-base leading-8 sm:text-lg", light ? "text-white/72" : "text-neutral-600")}>
        {children}
      </div>
    </div>
  );
}

function ImageCard({
  src,
  alt,
  label,
  className,
  priority = false,
}: {
  src: string;
  alt: string;
  label?: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <figure className={cn("group relative overflow-hidden bg-neutral-100", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        priority={priority}
        className="object-cover transition duration-700 group-hover:scale-[1.04]"
      />
      {label ? (
        <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-4 pb-4 pt-12 text-sm font-medium text-white">
          {label}
        </figcaption>
      ) : null}
    </figure>
  );
}

function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-black pt-20 text-white">
      <div className="absolute inset-0 top-20">
        <Image
          src={dashiHeroImages[0].src}
          alt={dashiHeroImages[0].alt}
          fill
          preload
          sizes="100vw"
          className="hero-zoom object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/42 to-black/70" />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl flex-col justify-end px-5 pb-16 pt-16 sm:px-8 lg:pb-20">
        <div className="max-w-4xl">
          <p className="reveal text-sm font-semibold uppercase tracking-[0.28em] text-white/70">
            {dashiSite.neighborhood}
          </p>
          <h1 className="reveal mt-4 font-serif text-6xl leading-[0.95] text-white sm:text-7xl lg:text-8xl">
            Dashi Sushi
          </h1>
          <p className="reveal mt-6 max-w-2xl text-xl leading-8 text-white/82 sm:text-2xl">
            Modern Japanese cuisine in Hillcrest with bright seafood, handcrafted plates, warm wood, and walk-in-friendly local energy.
          </p>
          <div className="reveal mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#menu"
              className="inline-flex min-h-13 items-center justify-center rounded-full bg-[#d7193f] px-7 text-sm font-semibold uppercase tracking-[0.16em] text-white shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:bg-[#bd1435]"
            >
              View Menu
            </a>
            <a
              href={dashiSite.mapsHref}
              className="inline-flex min-h-13 items-center justify-center rounded-full border border-white/55 px-7 text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:-translate-y-0.5 hover:border-white hover:bg-white/12"
            >
              Get Directions
            </a>
          </div>
        </div>

        <div className="reveal mt-12 grid gap-3 border-t border-white/22 pt-6 text-sm text-white/78 sm:grid-cols-3">
          <a href={dashiSite.mapsHref} className="flex items-center gap-3 transition hover:text-white">
            <MapPin className="h-4 w-4 text-[#a5d2c7]" />
            {dashiSite.address}
          </a>
          <a href={dashiSite.phoneHref} className="flex items-center gap-3 transition hover:text-white">
            <Phone className="h-4 w-4 text-[#a5d2c7]" />
            {dashiSite.phone}
          </a>
          <span className="flex items-center gap-3">
            <Clock className="h-4 w-4 text-[#a5d2c7]" />
            Walk-ins welcome, call ahead recommended
          </span>
        </div>
      </div>
    </section>
  );
}

function FeaturedDishes() {
  return (
    <section className="bg-[#fffdf8] px-5 py-14 sm:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionIntro eyebrow="Featured dishes" title="Bright, seasonal, carefully plated">
            <p>
              Real Dashi favorites from the menu, photographed in the restaurant&apos;s natural light.
            </p>
          </SectionIntro>
          <a
            href="#menu"
            className="inline-flex items-center gap-2 self-start text-sm font-semibold uppercase tracking-[0.16em] text-[#d7193f] sm:self-end"
          >
            View full menu <ChevronRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {featuredDashiItems.map((item, index) => (
            <article
              key={item.name}
              className="reveal group overflow-hidden rounded-[8px] bg-white shadow-[0_18px_50px_rgba(22,18,12,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_70px_rgba(22,18,12,0.13)]"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              {item.image ? (
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.imageAlt ?? item.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover transition duration-700 group-hover:scale-[1.04]"
                  />
                </div>
              ) : null}
              <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold text-neutral-950">{item.name}</h3>
                  <p className="font-semibold text-[#d7193f]">{item.price}</p>
                </div>
                <p className="mt-3 text-sm leading-6 text-neutral-600">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="bg-[#f3efe6] px-5 py-14 sm:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="reveal grid grid-cols-2 gap-4">
          <ImageCard
            src="/images/dashi/restaurant/dining-table-spread.jpg"
            alt="Dashi table spread with sashimi, yakisoba, nigiri, and chef dishes"
            className="aspect-[3/4] rounded-[8px]"
          />
          <ImageCard
            src="/images/dashi/restaurant/exterior-day.jpg"
            alt="Dashi Sushi exterior storefront in Hillcrest"
            className="mt-10 aspect-[3/4] rounded-[8px]"
          />
        </div>

        <div>
          <SectionIntro eyebrow="About Dashi" title="Premium sushi without the distance">
            <p>
              Dashi brings high-quality sushi and modern Japanese cooking to the Hillcrest community at an approachable price point. The experience is polished but relaxed, with teal banquettes, warm wood, a vivid dragon mural, and a team focused on making guests feel taken care of.
            </p>
          </SectionIntro>

          <div className="reveal mt-8 grid gap-4 sm:grid-cols-3">
            {["Fresh fish and seasonal specials", "Progressive menu with familiar favorites", "Friendly Hillcrest hospitality"].map((item) => (
              <div key={item} className="border-t border-black/15 pt-4 text-sm font-medium leading-6 text-neutral-700">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<DashiMenuCategory>("Starters");
  const visibleItems = useMemo(
    () => dashiMenuItems.filter((item) => item.category === activeCategory),
    [activeCategory],
  );

  return (
    <section id="menu" className="bg-[#fffdf8] px-5 py-14 sm:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionIntro eyebrow="Menu" title="Real Dashi favorites, easy to scan">
          <p>
            Prices and descriptions are sourced from the uploaded Dashi menu. Nigiri entries show nigiri / sashimi pricing where both were listed.
          </p>
        </SectionIntro>

        <div className="sticky top-20 z-30 -mx-5 mt-9 overflow-x-auto border-y border-black/10 bg-[#fffdf8]/95 px-5 py-3 backdrop-blur sm:mx-0 sm:rounded-full sm:border sm:px-3">
          <div className="flex min-w-max gap-2">
            {dashiMenuCategories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "min-h-11 rounded-full px-4 text-sm font-semibold transition",
                  activeCategory === category
                    ? "bg-[#0f6b5d] text-white shadow-sm"
                    : "bg-transparent text-neutral-700 hover:bg-black/5",
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {visibleItems.map((item, index) => (
            <article
              key={`${item.category}-${item.name}`}
              className="reveal group grid overflow-hidden rounded-[8px] border border-black/10 bg-white shadow-[0_12px_32px_rgba(22,18,12,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_48px_rgba(22,18,12,0.11)]"
              style={{ animationDelay: `${Math.min(index, 8) * 45}ms` }}
            >
              {item.image ? (
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.imageAlt ?? item.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-[1.04]"
                  />
                </div>
              ) : null}
              <div className="p-5">
                <div className="flex items-start justify-between gap-5">
                  <h3 className="text-lg font-semibold text-neutral-950">{item.name}</h3>
                  <p className="shrink-0 font-semibold text-[#d7193f]">{item.price}</p>
                </div>
                <p className="mt-3 text-sm leading-6 text-neutral-600">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function GallerySection() {
  return (
    <section id="gallery" className="bg-[#0e1714] px-5 py-14 sm:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionIntro eyebrow="Gallery" title="Warm wood, teal seats, vivid plates" light>
          <p>
            The visual system uses Dashi&apos;s actual restaurant, food, and team photography instead of generic stock imagery.
          </p>
        </SectionIntro>

        <div className="mt-10 grid auto-rows-[220px] gap-4 md:grid-cols-4 md:auto-rows-[260px]">
          {dashiGalleryImages.map((image, index) => (
            <ImageCard
              key={image.src}
              src={image.src}
              alt={image.alt}
              label={image.caption}
              className={cn(
                "reveal rounded-[8px]",
                index === 0 ? "md:col-span-2 md:row-span-2" : "",
                index === 3 ? "md:col-span-2" : "",
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function WalkInSection() {
  return (
    <section id="walk-ins" className="bg-[#f3efe6] px-5 py-14 sm:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div>
          <SectionIntro eyebrow="Walk-ins welcome" title="Come by, join the list, enjoy the neighborhood">
            <p>
              Dashi is built around walk-ins, quick decisions, and neighborhood dinners. For peak times or larger parties, call ahead before heading over.
            </p>
          </SectionIntro>

          <div className="reveal mt-7 grid gap-3 sm:grid-cols-2">
            <a
              href={dashiSite.phoneHref}
              className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-[#d7193f] px-6 text-sm font-semibold uppercase tracking-[0.14em] text-white"
            >
              <Phone className="h-4 w-4" />
              Call {dashiSite.phone}
            </a>
            <a
              href={dashiSite.mapsHref}
              className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full border border-black/15 px-6 text-sm font-semibold uppercase tracking-[0.14em] text-neutral-900"
            >
              <MapPin className="h-4 w-4" />
              Get Directions
            </a>
          </div>
        </div>

        <div className="reveal grid gap-3 rounded-[8px] bg-white p-5 shadow-[0_18px_50px_rgba(22,18,12,0.08)] sm:grid-cols-3 sm:p-6">
          {[
            ["1", "Walk in", "Stop by on University Ave and check current seating."],
            ["2", "Wait nearby", "If there is a rush, leave your name and enjoy Hillcrest while a table opens."],
            ["3", "Call ahead", "For larger groups or timing questions, call before you arrive."],
          ].map(([number, title, body]) => (
            <div key={title} className="border-b border-black/10 pb-4 last:border-b-0 last:pb-0 sm:border-b-0 sm:border-l sm:pl-5 sm:first:border-l-0 sm:first:pl-0">
              <p className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0f6b5d] text-sm font-semibold text-white">
                {number}
              </p>
              <h3 className="mt-4 text-lg font-semibold text-neutral-950">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-neutral-600">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReviewsSection() {
  return (
    <section id="reviews" className="bg-[#fffdf8] px-5 py-14 sm:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <SectionIntro eyebrow="Reviews" title="What walk-in guests are saying">
            <p>
              Real Google review excerpts from recent Dashi guests, including diners who visited without a reservation.
            </p>
          </SectionIntro>
          <a
            href={dashiSite.mapsHref}
            className="inline-flex items-center gap-2 self-start text-sm font-semibold uppercase tracking-[0.16em] text-[#d7193f] sm:self-end"
          >
            Find Dashi <ChevronRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {dashiReviews.map((review, index) => (
            <article
              key={review.name}
              className="reveal rounded-[8px] border border-black/10 bg-white p-5 shadow-[0_12px_32px_rgba(22,18,12,0.05)]"
              style={{ animationDelay: `${index * 70}ms` }}
            >
              <div className="flex gap-1 text-[#d7193f]" aria-label={`${review.rating} star review`}>
                {Array.from({ length: review.rating }).map((_, starIndex) => (
                  <Star key={starIndex} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 text-base leading-7 text-neutral-800">
                &ldquo;{review.quote}&rdquo;
              </blockquote>
              <div className="mt-5 border-t border-black/10 pt-4">
                <p className="font-semibold text-neutral-950">{review.name}</p>
                <p className="mt-1 text-xs font-medium uppercase tracking-[0.16em] text-neutral-500">
                  {review.meta}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamSection() {
  return (
    <section className="bg-[#fffdf8] px-5 py-14 sm:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
        <SectionIntro eyebrow="Team" title="The people behind the plates">
          <p>
            Dashi&apos;s team brings together polished technique and a relaxed neighborhood welcome, from the sushi bar to the dining room.
          </p>
        </SectionIntro>

        <div className="grid gap-4 sm:grid-cols-2">
          {dashiTeamImages.map((image) => (
            <ImageCard
              key={image.src}
              src={image.src}
              alt={image.alt}
              label={image.caption}
              className="reveal aspect-[4/5] rounded-[8px]"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function VisitSection() {
  return (
    <section id="visit" className="bg-[#0e1714] px-5 py-14 text-white sm:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div>
          <SectionIntro eyebrow="Visit" title="Dashi Sushi in Hillcrest" light>
            <p>
              Find Dashi on University Avenue for modern Japanese plates, sushi, and a bright dining room built around warm wood and teal seating.
            </p>
          </SectionIntro>

          <div className="reveal mt-8 grid gap-4 text-white/78">
            <a href={dashiSite.mapsHref} className="flex items-start gap-3 transition hover:text-white">
              <MapPin className="mt-1 h-5 w-5 text-[#a5d2c7]" />
              <span>{dashiSite.address}</span>
            </a>
            <a href={dashiSite.phoneHref} className="flex items-start gap-3 transition hover:text-white">
              <Phone className="mt-1 h-5 w-5 text-[#a5d2c7]" />
              <span>{dashiSite.phone}</span>
            </a>
            <p className="flex items-start gap-3">
              <Clock className="mt-1 h-5 w-5 text-[#a5d2c7]" />
              <span>{dashiSite.hoursNote}</span>
            </p>
          </div>
          <p className="reveal mt-6 max-w-2xl text-sm leading-6 text-white/50">
            {dashiSite.emailStatus}
          </p>
        </div>

        <a
          href={dashiSite.mapsHref}
          className="reveal group relative block aspect-[4/3] overflow-hidden rounded-[8px] bg-white/10"
          aria-label="Open map directions to Dashi Sushi"
        >
          <Image
            src="/images/dashi/restaurant/exterior-day.jpg"
            alt="Dashi Sushi exterior on University Avenue"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition duration-700 group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <span className="absolute bottom-5 left-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-neutral-950">
            Open Map <ChevronRight className="h-4 w-4" />
          </span>
        </a>
      </div>
    </section>
  );
}

function DashiFooter() {
  return (
    <footer className="bg-[#fffdf8] px-5 pb-28 pt-10 sm:px-8 lg:pb-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 border-t border-black/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-serif text-3xl tracking-[0.08em] text-black">DASHI</p>
          <p className="mt-2 text-sm text-neutral-600">{dashiSite.description}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a href={dashiSite.phoneHref} className="inline-flex h-11 items-center gap-2 rounded-full border border-black/15 px-4 text-sm font-medium">
            <Phone className="h-4 w-4" />
            Call
          </a>
          <a href={dashiSite.instagramHref} className="inline-flex h-11 items-center gap-2 rounded-full border border-black/15 px-4 text-sm font-medium">
            <Camera className="h-4 w-4" />
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}

function StickyMobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-black/10 bg-[#fffdf8]/96 p-3 shadow-[0_-12px_40px_rgba(0,0,0,0.12)] backdrop-blur lg:hidden">
      <div className="grid grid-cols-2 gap-3">
        <a
          href={dashiSite.phoneHref}
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#d7193f] text-sm font-semibold uppercase tracking-[0.14em] text-white"
        >
          <Phone className="h-4 w-4" />
          Call
        </a>
        <a
          href={dashiSite.mapsHref}
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#0f6b5d] text-sm font-semibold uppercase tracking-[0.14em] text-white"
        >
          <MapPin className="h-4 w-4" />
          Directions
        </a>
      </div>
    </div>
  );
}

export function DashiSite() {
  return (
    <div className="dashi-site min-h-screen bg-[#fffdf8] text-neutral-950">
      <DashiHeader />
      <main>
        <HeroSection />
        <FeaturedDishes />
        <MenuSection />
        <WalkInSection />
        <ReviewsSection />
        <AboutSection />
        <GallerySection />
        <TeamSection />
        <VisitSection />
      </main>
      <DashiFooter />
      <StickyMobileCta />
    </div>
  );
}
