import { Button } from "@/components/ui/Button";
import { HeartTogglePreview } from "@/components/ui/HeartTogglePreview";
import { Input } from "@/components/ui/Input";
import { NewsletterField } from "@/components/ui/NewsletterField";
import { SearchBar } from "@/components/ui/SearchBar";
import { products } from "@/data/products";
import { formatCondition, formatPrice } from "@/types";

/**
 * Temporary Phase 0 verification page.
 * Confirms design tokens, mock data, and types work before we build real UI.
 */
export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-[1280px] flex-1 flex-col gap-8 px-6 py-12">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold text-navy">ShopRise</h1>
        {/* <p className="text-dark">
          Phase 0 complete — design tokens, types, and mock data are wired up.
        </p> */}
      </header>

      <section className="rounded-lg bg-surface p-6">
        <h2 className="mb-4 text-lg font-medium text-navy">Design tokens</h2>
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <span className="h-8 w-8 rounded bg-navy" />
            <span className="text-sm text-dark">Navy</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-8 w-8 rounded bg-coral" />
            <span className="text-sm text-dark">Coral</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-8 w-8 rounded bg-gray-light" />
            <span className="text-sm text-dark">Gray light</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-8 w-8 rounded bg-surface border border-gray-light" />
            <span className="text-sm text-dark">Surface</span>
          </div>
        </div>
      </section>

      <section className="rounded-lg bg-surface p-6">
        <h2 className="mb-4 text-lg font-medium text-navy">Button primitive</h2>
        <div className="flex flex-wrap items-center gap-4">
          <Button variant="primary">Sign in</Button>
          <Button variant="primary">Sell on ShopRise</Button>
          <Button variant="accent">Search</Button>
          <Button variant="primary" disabled>
            Disabled
          </Button>
        </div>
      </section>

      <section className="rounded-lg bg-surface p-6">
        <h2 className="mb-4 text-lg font-medium text-navy">
          Search bar &amp; input primitives
        </h2>
        <div className="flex flex-col gap-6">
          <SearchBar />
          <NewsletterField />
          <Input label="Email" defaultValue="johndoe@gmail.com" />
        </div>
      </section>

      <section className="rounded-lg bg-surface p-6">
        <h2 className="mb-4 text-lg font-medium text-navy">Heart toggle</h2>
        <HeartTogglePreview />
      </section>

      <section>
        <h2 className="mb-4 text-lg font-medium text-navy">
          Mock products ({products.length})
        </h2>
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <li
              key={product.id}
              className="rounded-lg border border-gray-light bg-white p-4"
            >
              <p className="font-medium text-dark">{product.title}</p>
              <p className="text-coral">{formatPrice(product.price)}</p>
              <p className="text-sm text-dark">
                {formatCondition(product.condition)} · {product.location}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
