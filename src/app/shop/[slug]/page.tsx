import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProduct, products, formatPrice } from "@/lib/products";
import BuyButton from "@/components/BuyButton";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  return { title: product?.name ?? "Product" };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  return (
    <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 lg:grid-cols-2">
      <div className="flex min-h-72 items-center justify-center rounded-lg border border-white/10 bg-gradient-to-br from-black via-navy to-red/40">
        <span className="font-display text-sm font-black tracking-[0.3em] text-white/50">
          NO FACE PATRIOT
        </span>
      </div>
      <div>
        <Link
          href="/shop"
          className="text-xs font-bold uppercase tracking-wider text-white/50 hover:text-white"
        >
          ← Back to shop
        </Link>
        <h1 className="mt-4 font-display text-4xl font-black text-white">
          {product.name}
        </h1>
        <p className="mt-2 text-2xl font-semibold text-red">
          {formatPrice(product.price)}
        </p>
        <p className="mt-6 text-white/70">{product.longDescription}</p>
        <div className="mt-8">
          <BuyButton slug={product.slug} />
        </div>
      </div>
    </div>
  );
}
