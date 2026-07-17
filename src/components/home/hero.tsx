import { Button } from "@/components/ui/button";
import { SocialProofRow } from "./social-proof-row";

export function Hero() {
  return (
    <div className="mx-auto max-w-6xl px-8 pt-14">
      <h1 className="max-w-xl text-[38px] font-bold leading-[1.2] tracking-tight text-ink-900">
        Renting made refreshingly straightforward.
      </h1>
      <p className="mt-3.5 max-w-lg text-[15.5px] text-ink-600">
        A family-run lettings agency that&apos;s known Enfield&apos;s streets for over thirty
        years — and treats every landlord and tenant like a neighbour.
      </p>

      <form className="mt-7 flex max-w-3xl flex-col gap-2 rounded-xl border border-ink-300 bg-white p-1.5 sm:flex-row sm:items-center sm:gap-0">
        <select
          name="area"
          className="h-10 flex-1 rounded-lg border-0 bg-transparent px-3.5 text-[13.5px] text-ink-900 focus:outline-none sm:border-r sm:border-ink-300"
          defaultValue=""
        >
          <option value="" disabled>
            Any area
          </option>
          <option value="enfield-town">Enfield Town</option>
          <option value="n14">N14</option>
          <option value="n21">N21</option>
        </select>
        <select
          name="beds"
          className="h-10 flex-1 rounded-lg border-0 bg-transparent px-3.5 text-[13.5px] text-ink-900 focus:outline-none sm:border-r sm:border-ink-300"
          defaultValue=""
        >
          <option value="" disabled>
            Any beds
          </option>
          <option value="1">1 bed</option>
          <option value="2">2 beds</option>
          <option value="3">3 beds</option>
          <option value="4">4+ beds</option>
        </select>
        <select
          name="price"
          className="h-10 flex-1 rounded-lg border-0 bg-transparent px-3.5 text-[13.5px] text-ink-900 focus:outline-none"
          defaultValue=""
        >
          <option value="" disabled>
            Any price
          </option>
          <option value="1000">Up to £1,000</option>
          <option value="1500">£1,000 – £1,500</option>
          <option value="9999">£1,500+</option>
        </select>
        <Button type="submit" variant="primary" className="sm:ml-1.5">
          Search
        </Button>
      </form>

      <SocialProofRow />
    </div>
  );
}
