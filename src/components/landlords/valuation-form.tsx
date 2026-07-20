"use client";

import { useState, type FormEvent } from "react";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardBody } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateEmail(value: string): string | null {
  if (!value) return null;
  return EMAIL_PATTERN.test(value) ? null : "Enter a valid email address.";
}

// There's no CRM/backend behind this yet — so submitting always shows a
// clear message directing the landlord to call or email us directly,
// rather than a silently disabled button (which tends to just look
// broken). Swap this handler for a real submission once one exists.
export function ValuationForm() {
  const [emailError, setEmailError] = useState<string | null>(null);
  const [submitFailed, setSubmitFailed] = useState(false);

  function handleEmailBlur(e: React.FocusEvent<HTMLInputElement>) {
    setEmailError(validateEmail(e.target.value));
  }

  function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (emailError) setEmailError(validateEmail(e.target.value));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const emailValue = (e.currentTarget.elements.namedItem("email") as HTMLInputElement).value;
    const error = validateEmail(emailValue);
    setEmailError(error);
    if (error) return;
    setSubmitFailed(true);
  }

  return (
    <div className="mx-auto max-w-2xl px-8 pb-20">
      <Card>
        <CardBody className="p-8">
          <form onSubmit={handleSubmit} noValidate>
            <fieldset className="mb-7">
              <legend className="mb-4 text-[12.5px] font-semibold uppercase tracking-wide text-brand-700">
                Your property
              </legend>
              <div className="mb-3">
                <label htmlFor="address" className="mb-1.5 block text-[13px] font-medium text-ink-900">
                  Property address
                </label>
                <Input id="address" name="address" placeholder="e.g. 14 Chase Side, Enfield" required />
              </div>
              <div className="mb-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div>
                  <label htmlFor="propertyType" className="mb-1.5 block text-[13px] font-medium text-ink-900">
                    Property type
                  </label>
                  <Select id="propertyType" name="propertyType" defaultValue="" required>
                    <option value="" disabled>
                      Select type
                    </option>
                    <option>Flat</option>
                    <option>Terraced house</option>
                    <option>Semi-detached house</option>
                    <option>Detached house</option>
                    <option>Studio</option>
                    <option>Other</option>
                  </Select>
                </div>
                <div>
                  <label htmlFor="bedrooms" className="mb-1.5 block text-[13px] font-medium text-ink-900">
                    Bedrooms
                  </label>
                  <Select id="bedrooms" name="bedrooms" defaultValue="" required>
                    <option value="" disabled>
                      Select bedrooms
                    </option>
                    <option>Studio</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5+</option>
                  </Select>
                </div>
              </div>
              <div>
                <label htmlFor="status" className="mb-1.5 block text-[13px] font-medium text-ink-900">
                  Current status
                </label>
                <Select id="status" name="status" defaultValue="" required>
                  <option value="" disabled>
                    Select status
                  </option>
                  <option>Currently tenanted</option>
                  <option>Vacant / empty</option>
                  <option>Not yet decided</option>
                </Select>
              </div>
            </fieldset>

            <fieldset className="mb-7">
              <legend className="mb-4 text-[12.5px] font-semibold uppercase tracking-wide text-brand-700">
                Your details
              </legend>
              <div className="mb-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-[13px] font-medium text-ink-900">
                    Full name
                  </label>
                  <Input id="name" name="name" required />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-1.5 block text-[13px] font-medium text-ink-900">
                    Phone
                  </label>
                  <Input id="phone" name="phone" type="tel" required />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-[13px] font-medium text-ink-900">
                  Email address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  aria-invalid={!!emailError}
                  aria-describedby={emailError ? "email-error" : undefined}
                  onBlur={handleEmailBlur}
                  onChange={handleEmailChange}
                />
                {emailError ? (
                  <p id="email-error" className="mt-1.5 text-[12px] text-red-600">
                    {emailError}
                  </p>
                ) : null}
              </div>
            </fieldset>

            <fieldset className="mb-7">
              <legend className="mb-4 text-[12.5px] font-semibold uppercase tracking-wide text-brand-700">
                Scheduling
              </legend>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div>
                  <label htmlFor="preferredDate" className="mb-1.5 block text-[13px] font-medium text-ink-900">
                    Preferred date <span className="font-normal text-ink-600">(optional)</span>
                  </label>
                  <Input id="preferredDate" name="preferredDate" type="date" />
                </div>
                <div>
                  <label htmlFor="preferredTime" className="mb-1.5 block text-[13px] font-medium text-ink-900">
                    Best time to reach you
                  </label>
                  <Select id="preferredTime" name="preferredTime" defaultValue="" required>
                    <option value="" disabled>
                      Select a time
                    </option>
                    <option>Any time</option>
                    <option>Morning</option>
                    <option>Afternoon</option>
                    <option>Evening</option>
                  </Select>
                </div>
              </div>
            </fieldset>

            <fieldset className="mb-7">
              <legend className="mb-4 text-[12.5px] font-semibold uppercase tracking-wide text-brand-700">
                Anything else
              </legend>
              <div className="mb-4">
                <label htmlFor="notes" className="mb-1.5 block text-[13px] font-medium text-ink-900">
                  Anything we should know? <span className="font-normal text-ink-600">(optional)</span>
                </label>
                <Textarea
                  id="notes"
                  name="notes"
                  placeholder="e.g. access arrangements, timing constraints"
                />
              </div>
              <label className="flex items-start gap-2.5 text-[12.5px] text-ink-600">
                <input type="checkbox" name="marketingOptIn" className="mt-0.5" />
                Keep me updated with occasional market insights and property news.
              </label>
            </fieldset>

            <button type="submit" className={cn(buttonVariants({ variant: "primary" }), "w-full py-3.5 text-[14px]")}>
              Request a valuation
            </button>

            {submitFailed ? (
              <div
                role="alert"
                className="mt-3.5 rounded-lg border border-amber-600/30 bg-amber-50 px-4 py-3.5 text-[13px] text-amber-600"
              >
                Sorry, we couldn&apos;t complete your request right now. Please call us
                on{" "}
                <a href="tel:02084478400" className="font-semibold underline">
                  020 8447 8400
                </a>{" "}
                or email us instead, and we&apos;ll get back to you directly.
              </div>
            ) : null}
          </form>
        </CardBody>
      </Card>
    </div>
  );
}
