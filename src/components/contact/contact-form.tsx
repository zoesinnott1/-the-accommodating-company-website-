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

// Same front-end-only pattern as the valuation form — there's no CRM/inbox
// behind this yet, so submitting shows a clear message pointing people to
// call or email directly, rather than a silently disabled button.
export function ContactForm() {
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
    <Card>
      <CardBody className="p-8">
        <h2 className="mb-5 text-[15px] font-semibold text-ink-900">Send us a message</h2>
        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-[13px] font-medium text-ink-900">
                Full name
              </label>
              <Input id="name" name="name" required />
            </div>
            <div>
              <label htmlFor="phone" className="mb-1.5 block text-[13px] font-medium text-ink-900">
                Phone <span className="font-normal text-ink-600">(optional)</span>
              </label>
              <Input id="phone" name="phone" type="tel" />
            </div>
          </div>

          <div className="mb-3">
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

          <div className="mb-3">
            <label htmlFor="reason" className="mb-1.5 block text-[13px] font-medium text-ink-900">
              I am a
            </label>
            <Select id="reason" name="reason" defaultValue="" required>
              <option value="" disabled>
                Select an option
              </option>
              <option>Landlord</option>
              <option>Tenant</option>
              <option>Prospective tenant</option>
              <option>Other</option>
            </Select>
          </div>

          <div className="mb-5">
            <label htmlFor="message" className="mb-1.5 block text-[13px] font-medium text-ink-900">
              Message
            </label>
            <Textarea id="message" name="message" required placeholder="How can we help?" />
          </div>

          <button type="submit" className={cn(buttonVariants({ variant: "primary" }), "w-full py-3.5 text-[14px]")}>
            Send message
          </button>

          {submitFailed ? (
            <div
              role="alert"
              className="mt-3.5 rounded-lg border border-amber-600/30 bg-amber-50 px-4 py-3.5 text-[13px] text-amber-600"
            >
              Sorry, we couldn&apos;t complete your request right now. Please call
              us on{" "}
              <a href="tel:02084478400" className="font-semibold underline">
                020 8447 8400
              </a>{" "}
              or email us instead, and we&apos;ll get back to you directly.
            </div>
          ) : null}
        </form>
      </CardBody>
    </Card>
  );
}
