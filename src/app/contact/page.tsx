import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 text-center">
      <p className="text-xs font-bold uppercase tracking-[0.35em] text-red">
        Reach out
      </p>
      <h1 className="mt-3 font-display text-4xl font-black text-white">
        Contact
      </h1>
      <p className="mx-auto mt-4 max-w-md text-white/65">
        Press, collabs, or merch questions — send a note. We&apos;ll get back
        when Gmail notify is configured.
      </p>
      <div className="mt-10">
        <ContactForm />
      </div>
    </div>
  );
}
