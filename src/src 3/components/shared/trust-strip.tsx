import { Card, CardBody } from "@/components/ui/card";

// Company-wide accreditations — the same on every page that shows it
// (landlords, tenants), so this lives in shared rather than being
// duplicated per section.
//
// NOTE: these are placeholder monogram badges, not the schemes' actual
// logo artwork — this sandbox has no network access to fetch the real
// logo files from NALS/Propertymark, TPO, SAFEagent, or the TDS. Swap
// each `mark` below for the official logo image once sourced (the
// business will have these already, as a current member of each scheme).
const CREDENTIALS = [
  { mark: "NALS", name: "National Approved Letting Scheme" },
  { mark: "CMP", name: "NALS Client Money Protection" },
  { mark: "SAFE", name: "SAFEagent" },
  { mark: "TPO", name: "The Property Ombudsman" },
  { mark: "TDS", name: "Tenancy Deposit Scheme" },
];

export function TrustStrip() {
  return (
    <section className="border-b border-ink-300 py-14">
      <div className="mx-auto max-w-6xl px-8">
        <h2 className="mb-7 text-2xl font-semibold tracking-tight text-ink-900">
          Accredited and regulated
        </h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {CREDENTIALS.map((credential) => (
            <Card key={credential.mark}>
              <CardBody className="flex flex-col items-center gap-3 p-5 text-center">
                <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-50 text-[12px] font-semibold tracking-tight text-brand-700">
                  {credential.mark}
                </span>
                <span className="text-[12px] text-ink-600">{credential.name}</span>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
