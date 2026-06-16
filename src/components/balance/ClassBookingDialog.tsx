import React, { useMemo, useState } from "react";
import { z } from "zod";
import { X, Instagram, MessageCircle, Phone } from "lucide-react";
import { CLASS_SLOTS, ClassSlot, CLASS_RULES, nextSaturdays } from "@/data/classes";
import { SOCIAL } from "@/data/events";
import { toast } from "@/hooks/use-toast";

type Props = {
  open: boolean;
  onClose: () => void;
  defaultSlotId?: string;
};

const schema = z.object({
  name: z.string().trim().min(2, "Tell us your name").max(80),
  email: z.string().trim().email("Use a valid email").max(120),
  phone: z.string().trim().min(7, "Add a phone number we can reach").max(20),
  date: z.string().min(1, "Pick a Saturday"),
  slotId: z.string().min(1, "Pick a time"),
  notes: z.string().max(280).optional(),
});

export const ClassBookingDialog: React.FC<Props> = ({ open, onClose, defaultSlotId }) => {
  const saturdays = useMemo(() => nextSaturdays(8, CLASS_RULES.cutoffHours), []);
  const [form, setForm] = useState({
    name: "", email: "", phone: "",
    date: saturdays[0]?.iso ?? "",
    slotId: defaultSlotId ?? CLASS_SLOTS[0].id,
    notes: "",
  });

  React.useEffect(() => {
    if (defaultSlotId) setForm((f) => ({ ...f, slotId: defaultSlotId }));
  }, [defaultSlotId]);

  if (!open) return null;

  const slot = CLASS_SLOTS.find((s) => s.id === form.slotId) as ClassSlot;
  const dateLabel = saturdays.find((d) => d.iso === form.date)?.pretty ?? form.date;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const first = result.error.issues[0];
      toast({ title: "Just one thing", description: first.message, variant: "destructive" });
      return;
    }
    const msg =
`Hi balance_ee! I'd like to book a Saturday class.

Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}
Date: ${dateLabel}
Time: ${slot.label}
${form.notes ? `Notes: ${form.notes}` : ""}`;
    const wa = `https://wa.me/${SOCIAL.whatsapp}?text=${encodeURIComponent(msg)}`;
    window.open(wa, "_blank", "noopener,noreferrer");
    toast({ title: "Almost in", description: "Finish the chat to lock your spot." });
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[3000] flex items-end sm:items-center justify-center bg-ink/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <form
        onSubmit={handleSubmit}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full sm:max-w-lg max-h-[92vh] bg-cream rounded-t-3xl sm:rounded-3xl shadow-glow flex flex-col overflow-hidden"
      >
        <div className="px-6 pt-6 pb-4 border-b border-border flex items-start justify-between gap-4">
          <div>
            <p className="text-[11px] uppercase tracking-[0.25em] text-terracotta">Saturday class</p>
            <h3 className="font-display text-3xl text-ink mt-1">Book your spot</h3>
            <p className="text-xs text-ink/60 mt-1">
              {CLASS_RULES.duration} · {CLASS_RULES.perk.toLowerCase()} · {CLASS_RULES.cutoffHours}h notice
            </p>
          </div>
          <button type="button" onClick={onClose} aria-label="Close" className="w-9 h-9 rounded-full bg-ink/5 hover:bg-ink/10 flex items-center justify-center">
            <X className="w-4 h-4 text-ink" />
          </button>
        </div>

        <div className="overflow-y-auto px-6 py-5 space-y-4">
          <Field label="Your name">
            <input className={inputCls} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="First & last name" />
          </Field>
          <div className="grid grid-cols-2 gap-3">
            <Field label="Email">
              <input type="email" className={inputCls} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@email.com" />
            </Field>
            <Field label="Phone">
              <input className={inputCls} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+234…" />
            </Field>
          </div>
          <Field label="Saturday">
            <select className={inputCls} value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })}>
              {saturdays.map((s) => (
                <option key={s.iso} value={s.iso}>{s.pretty}</option>
              ))}
            </select>
            <p className="text-[11px] text-ink/55 mt-1">Only Saturdays with at least {CLASS_RULES.cutoffHours}h lead time are listed.</p>
          </Field>
          <Field label="Time slot">
            <div className="grid grid-cols-3 gap-2">
              {CLASS_SLOTS.map((s) => {
                const active = s.id === form.slotId;
                return (
                  <button
                    type="button"
                    key={s.id}
                    onClick={() => setForm({ ...form, slotId: s.id })}
                    className={`rounded-xl text-xs font-medium py-2 border transition-all ${
                      active ? "bg-terracotta text-cream border-terracotta shadow-soft" : "bg-card text-ink border-border hover:border-terracotta/50"
                    }`}
                  >
                    {s.label}
                  </button>
                );
              })}
            </div>
          </Field>
          <Field label="Notes (optional)">
            <textarea rows={2} className={inputCls} value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} placeholder="Anything we should know? (injuries, first time, etc.)" />
          </Field>
        </div>

        <div className="border-t border-border px-6 py-4 space-y-3">
          <p className="text-[11px] text-ink/60 text-center">Best way to confirm: Instagram DM or a quick call.</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <button type="submit" className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-terracotta text-cream font-medium py-3 px-5 hover:bg-ink transition-colors">
              <MessageCircle className="w-4 h-4" /> Confirm via WhatsApp
            </button>
            <a
              href={SOCIAL.instagram}
              target="_blank" rel="noreferrer noopener"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-ink text-ink font-medium py-3 px-5 hover:bg-ink hover:text-cream transition-colors"
            >
              <Instagram className="w-4 h-4" /> DM us
            </a>
            <a
              href={SOCIAL.phoneTel}
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-ink text-ink font-medium py-3 px-5 hover:bg-ink hover:text-cream transition-colors"
            >
              <Phone className="w-4 h-4" /> Call
            </a>
          </div>
        </div>
      </form>
    </div>
  );
};

const inputCls =
  "w-full rounded-xl border border-border bg-card px-3 py-2.5 text-sm text-ink placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-terracotta/40 focus:border-terracotta";

const Field: React.FC<{ label: string; children: React.ReactNode }> = ({ label, children }) => (
  <label className="block">
    <span className="block text-[11px] uppercase tracking-wider text-forest/70 mb-1.5">{label}</span>
    {children}
  </label>
);
