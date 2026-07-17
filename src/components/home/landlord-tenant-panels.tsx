import Link from "next/link";
import { Card, CardBody } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function LandlordTenantPanels() {
  return (
    <section className="border-b border-ink-300 py-14">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 px-8 md:grid-cols-2">
        <Card>
          <CardBody className="p-7">
            <h3 className="text-[16px] font-semibold text-ink-900">For landlords</h3>
            <p className="mt-2 text-[13.5px] text-ink-600">
              Valuations, marketing, referencing and full management — with a dedicated
              point of contact, not a call centre.
            </p>
            <Link
              href="/landlords"
              className={cn(buttonVariants({ variant: "secondary", size: "sm" }), "mt-4")}
            >
              Landlord services
            </Link>
          </CardBody>
        </Card>
        <Card>
          <CardBody className="p-7">
            <h3 className="text-[16px] font-semibold text-ink-900">For tenants</h3>
            <p className="mt-2 text-[13.5px] text-ink-600">
              Clear fees, fast viewings, and an online repair-reporting tool so issues
              get fixed without the back-and-forth.
            </p>
            <Link
              href="/tenants"
              className={cn(buttonVariants({ variant: "secondary", size: "sm" }), "mt-4")}
            >
              Tenant guide
            </Link>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}
