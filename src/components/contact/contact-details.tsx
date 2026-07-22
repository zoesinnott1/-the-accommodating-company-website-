import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Card, CardBody } from "@/components/ui/card";

const HOURS = [
  { day: "Monday", time: "9am–5pm" },
  { day: "Tuesday", time: "9am–5pm" },
  { day: "Wednesday", time: "9am–5pm" },
  { day: "Thursday", time: "9am–5pm" },
  { day: "Friday", time: "9am–5pm" },
  { day: "Saturday", time: "9am–2pm" },
  { day: "Sunday", time: "Closed" },
];

// Same day-of-week index Date.getDay() returns (0 = Sunday), used to
// highlight today's row in the hours table below.
const TODAY_INDEX = (new Date().getDay() + 6) % 7;

export function ContactDetails() {
  return (
    <Card>
      <CardBody className="flex flex-col gap-6 p-8">
        <div className="flex items-start gap-3">
          <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-brand-50">
            <MapPin size={18} className="text-brand-700" aria-hidden />
          </span>
          <div>
            <h3 className="text-[13px] font-medium text-ink-900">Address</h3>
            <p className="mt-0.5 text-[13.5px] text-ink-600">
              52 Browning Road, Enfield, Middlesex EN2 0EN
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-brand-50">
            <Phone size={18} className="text-brand-700" aria-hidden />
          </span>
          <div>
            <h3 className="text-[13px] font-medium text-ink-900">Phone</h3>
            <a href="tel:02084478400" className="mt-0.5 block text-[13.5px] text-brand-700 hover:underline">
              020 8447 8400
            </a>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-brand-50">
            <Mail size={18} className="text-brand-700" aria-hidden />
          </span>
          <div>
            <h3 className="text-[13px] font-medium text-ink-900">Email</h3>
            <a
              href="mailto:contact@accommodatingcompany.co.uk"
              className="mt-0.5 block text-[13.5px] text-brand-700 hover:underline"
            >
              contact@accommodatingcompany.co.uk
            </a>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-brand-50">
            <Clock size={18} className="text-brand-700" aria-hidden />
          </span>
          <div className="flex-1">
            <h3 className="mb-2 text-[13px] font-medium text-ink-900">Opening hours</h3>
            <dl className="flex flex-col gap-1">
              {HOURS.map((row, index) => (
                <div
                  key={row.day}
                  className={
                    index === TODAY_INDEX
                      ? "flex items-center justify-between text-[13px] font-semibold text-ink-900"
                      : "flex items-center justify-between text-[13px] text-ink-600"
                  }
                >
                  <dt>{row.day}</dt>
                  <dd>{row.time}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
