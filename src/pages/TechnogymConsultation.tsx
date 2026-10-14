import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, Dumbbell, Heart, MoveUpRight, Sparkles, Star, X } from "lucide-react";
import { z } from "zod";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { toast } from "@/hooks/use-toast";
import { SOCIAL } from "@/data/events";

import strengthPhoto from "@/assets/equipment/equipment-club-strength.webp";
import endurancePhoto from "@/assets/equipment/equipment-stair-climber.webp";
import functionalPhoto from "@/assets/equipment/equipment-studio-treadmills.webp";
import jointsPhoto from "@/assets/equipment/equipment-elliptical.webp";
import restorePhoto from "@/assets/equipment/equipment-home-bike.webp";

const groups = [
  {
    id: "strength",
    name: "BUILD STRENGTH",
    tagline: "Muscle and bone age together.",
    summary: "Strength training is how you keep both. Choose equipment for the specific muscles and movements you want to build, not for how impressive the machine looks.",
    image: strengthPhoto,
    alt: "Strength training equipment in a considered fitness studio",
    chip: "bg-peach/70",
    goals: ["Build lasting strength", "Support bone health", "Feel capable day to day"],
    question: "Which movement do I want to feel easier in six months?",
  },
  {
    id: "endurance",
    name: "BUILD ENDURANCE",
    tagline: "Heart and lungs, your way.",
    summary: "A vague goal sends most people to the treadmill by default. Decide what you actually want, then pick the machine that feels good on your body, whether that is running, cycling or rowing.",
    image: endurancePhoto,
    alt: "Technogym cardio equipment photographed from a product catalogue",
    chip: "bg-gilt/45",
    goals: ["Find cardio I enjoy", "Build steady stamina", "Make movement a routine"],
    question: "Which kind of movement would I choose to return to?",
  },
  {
    id: "functional",
    name: "TRAIN FUNCTIONALLY",
    tagline: "Move the way life moves.",
    summary: "Free weights, benches, racks and cable training build strength you can actually use: carrying, lifting, climbing, playing. Choose by the movements you want to get better at.",
    image: functionalPhoto,
    alt: "A row of training equipment in a contemporary fitness space",
    chip: "bg-sage/25",
    goals: ["Carry and lift with ease", "Feel ready for the outdoors", "Train useful movement"],
    question: "What do I want my body to be ready for?",
  },
  {
    id: "joints",
    name: "PROTECT YOUR JOINTS",
    tagline: "Start where it aches.",
    summary: "Say your goal is losing belly fat, but what you really feel is an aching knee. Then your focus becomes equipment that creates gentle, low-grade movement through the joint, which encourages lubrication. Specificity beats trend, every time.",
    image: jointsPhoto,
    alt: "Low-impact cardio equipment shown in a clean product setting",
    chip: "bg-peach/70",
    goals: ["Explore lower-impact movement", "Adjust around my needs", "Build confidence gradually"],
    question: "What would moving comfortably look like for me?",
    note: "General information, not medical advice. Persistent joint pain needs a check with a doctor or physiotherapist.",
  },
  {
    id: "restore",
    name: "RESTORE AND ALIGN",
    tagline: "Yoga and Pilates are home turf.",
    summary: "Mobility, alignment and breath make everything else you do safer. This group is for stretching, recovery and mind-body work that supports your lifting.",
    image: restorePhoto,
    alt: "A home fitness space with cardio equipment and natural light",
    chip: "bg-gilt/45",
    goals: ["Make room for mobility", "Pair strength with recovery", "Build a mind-body practice"],
    question: "What kind of practice helps me feel more at home in my body?",
  },
] as const;

type GroupId = (typeof groups)[number]["id"];

const consultationSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name.").max(100, "Keep your name under 100 characters."),
  contact: z.string().trim().min(1, "Please add a WhatsApp number or email.").max(160, "Please keep your contact details under 160 characters."),
  plan: z.enum(["Home gym", "Wellness studio", "Clinic or hospital", "Hotel or residential facility", "Not sure yet"]),
  goal: z.string().trim().min(1, "Please tell me the real goal you have in mind.").max(500, "Please keep your goal under 500 characters."),
  space: z.enum(["Small", "Medium", "Large", "Not sure"]),
  budget: z.enum(["Starter", "Mid-range", "Premium", "Full facility"]),
  message: z.string().trim().max(800, "Please keep your message under 800 characters."),
  group: z.enum(["strength", "endurance", "functional", "joints", "restore", "unsure"]),
});

type FormValues = z.infer<typeof consultationSchema>;

const initialValues: FormValues = {
  name: "",
  contact: "",
  plan: "Not sure yet",
  goal: "",
  space: "Not sure",
  budget: "Starter",
  message: "",
  group: "unsure",
};

const Field = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div className="space-y-2">
    <Label className="text-sm text-ink">{label}</Label>
    {children}
  </div>
);

const inputClass = "border-ink/25 bg-cream/70 text-ink placeholder:text-ink/45 focus-visible:ring-terracotta";

const TechnogymConsultation: React.FC = () => {
  const [activeGroup, setActiveGroup] = useState<GroupId | null>(null);
  const [activeWhy, setActiveWhy] = useState(0);
  const [values, setValues] = useState<FormValues>(initialValues);
  const [submitted, setSubmitted] = useState<FormValues | null>(null);
  const consultationRef = useRef<HTMLElement>(null);

  const selectedGroup = groups.find((group) => group.id === activeGroup) ?? null;
  const selectedIndex = selectedGroup ? groups.findIndex((group) => group.id === selectedGroup.id) : -1;

  const groupFromHash = () => {
    const candidate = window.location.hash.slice(1);
    return groups.find((group) => group.id === candidate)?.id ?? null;
  };

  useEffect(() => {
    const syncHash = () => setActiveGroup(groupFromHash());
    syncHash();
    window.addEventListener("hashchange", syncHash);
    window.addEventListener("popstate", syncHash);
    return () => {
      window.removeEventListener("hashchange", syncHash);
      window.removeEventListener("popstate", syncHash);
    };
  }, []);

  const openGroup = (id: GroupId) => {
    window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}#${id}`);
    setActiveGroup(id);
  };

  const closeGroup = (open: boolean) => {
    if (!open) {
      setActiveGroup(null);
      if (groups.some((group) => group.id === window.location.hash.slice(1))) {
        window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
      }
    }
  };

  const changeGroup = (direction: -1 | 1) => {
    const nextIndex = (selectedIndex + direction + groups.length) % groups.length;
    openGroup(groups[nextIndex].id);
  };

  const startConsultation = (group?: GroupId) => {
    setValues((current) => ({ ...current, group: group ?? current.group }));
    closeGroup(false);
    window.setTimeout(() => consultationRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 80);
  };

  const update = <K extends keyof FormValues>(key: K, value: FormValues[K]) => {
    setValues((current) => ({ ...current, [key]: value }));
    setSubmitted(null);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = consultationSchema.safeParse(values);
    if (!result.success) {
      toast({ title: "A few details are missing", description: result.error.issues[0]?.message ?? "Please check the form and try again." });
      return;
    }
    setSubmitted(result.data);
  };

  const messageFor = (form: FormValues) => [
    "Hello, I would like a Technogym equipment and fitness-space consultation.",
    `Name: ${form.name}`,
    `WhatsApp or email: ${form.contact}`,
    `Planning: ${form.plan}`,
    `My goal: ${form.goal}`,
    `Space: ${form.space}`,
    `Budget range: ${form.budget}`,
    `Equipment interest: ${form.group === "unsure" ? "Not sure yet" : groups.find((group) => group.id === form.group)?.name ?? form.group}`,
    form.message ? `Additional details: ${form.message}` : "",
  ].filter(Boolean).join("\n");

  const whyNotes = [
    { label: "Goal on paper", text: "lose belly fat", color: "bg-peach/75", tilt: "-rotate-2" },
    { label: "What I actually feel", text: "an aching pain in my knee", color: "bg-gilt/45", tilt: "rotate-1" },
    { label: "Equipment focus", text: "gentle, low-grade movement that keeps the knee moving.", color: "bg-sage/25", tilt: "-rotate-1" },
  ];

  return (
    <div className="min-h-screen bg-cream text-ink">
      <Helmet>
        <title>Equipment, Chosen on Purpose — balance_ee</title>
        <meta name="description" content="Choose Technogym equipment around your real goals. Explore strength, endurance and movement choices, then book a personal equipment or fitness-space consultation with balance_ee." />
        <link rel="canonical" href="/technogym-consultation" />
      </Helmet>
      <Navbar />

      <main className="equipment-board">
        <div className="equipment-frame" aria-hidden="true" />
        <section className="px-4 pb-16 pt-28 md:px-8 md:pb-24 md:pt-36">
          <div className="mx-auto max-w-7xl">
            <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-7">
                <p className="text-xs font-medium uppercase tracking-[0.24em] text-terracotta">A considered approach to training equipment</p>
                <h1 className="mt-5 max-w-4xl font-display text-6xl leading-[0.92] sm:text-7xl md:text-8xl">Equipment, <span className="italic text-terracotta">chosen</span> on purpose.</h1>
                <p className="mt-5 font-display text-2xl text-forest sm:text-3xl">High-end, high-tech equipment for people who lift for health.</p>
                <p className="mt-5 max-w-2xl leading-relaxed text-ink/75">When selecting equipment to work with, focus on specificity and goal.</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button asChild variant="editorial" size="lg"><a href="#equipment-board">Explore the board <ArrowDown /></a></Button>
                  <Button type="button" variant="editorial-outline" size="lg" onClick={() => startConsultation()}>Book a consultation <ArrowRight /></Button>
                </div>
                <p className="mt-4 text-xs text-ink/60">Affiliate partner earning a commission at no extra cost to you.</p>
              </div>
              <div className="relative lg:col-span-5">
                <figure className="equipment-polaroid equipment-pin-right mx-auto max-w-sm">
                  <img src={restorePhoto} alt="Cardio equipment shown in a naturally lit home fitness space" className="aspect-[4/5] w-full object-cover" />
                  <figcaption className="mt-3 font-display text-xl">Make room for movement.</figcaption>
                </figure>
                <div className="equipment-note absolute -bottom-7 -left-1 max-w-[12rem] rotate-[-4deg] bg-gilt/55 p-4 shadow-soft sm:-left-12">
                  <Dumbbell className="h-5 w-5 text-terracotta" aria-hidden="true" />
                  <p className="mt-2 text-sm font-medium">Strength for health. Not just looks.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-ink/15 bg-cream/70 px-4 py-14 md:px-8 md:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 md:grid-cols-12 md:items-end">
              <div className="md:col-span-4">
                <p className="text-xs uppercase tracking-[0.24em] text-terracotta">How I think about it</p>
                <h2 className="mt-3 font-display text-5xl leading-none sm:text-6xl">Why Technogym?</h2>
                <p className="mt-4 max-w-sm leading-relaxed text-ink/70">Good equipment starts with a good question: what are you asking it to help you do?</p>
              </div>
              <div className="grid gap-3 sm:grid-cols-3 md:col-span-8">
                {[
                  { title: "SPECIFICITY", text: "Pieces are built with a purpose. Different goals and different movements with range.", color: "bg-peach/65", tilt: "-rotate-1" },
                  { title: "TECH", text: "High-End Digital Tech, Programmes, Videos.", color: "bg-sage/25", tilt: "rotate-1" },
                  { title: "QUALITY AND RANGE", text: "From a compact home corner to a full facility, the quality stays high and the range is wide enough to fit realistic goals.", color: "bg-gilt/40", tilt: "-rotate-1" },
                ].map((note) => (
                  <article key={note.title} className={`equipment-note min-h-44 p-5 shadow-soft ${note.color} ${note.tilt}`}>
                    <p className="text-xs font-bold uppercase tracking-[0.17em]">{note.title}</p>
                    <p className="mt-4 font-display text-xl leading-snug">{note.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-16 md:px-8 md:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.24em] text-terracotta">Start with your why</p>
              <h2 className="mt-3 font-display text-5xl leading-none sm:text-6xl">Take an extra 10 minutes.</h2>
              <p className="mt-5 leading-relaxed text-ink/75">You can buy equipment with a vague goal like “just lose weight”, but if you take an extra 10 minutes to find out what you really want, it elevates your experience for the entire length of your ownership relationship with that equipment.</p>
            </div>
            <div className="mt-9 grid gap-4 md:grid-cols-3 md:items-center">
              {whyNotes.map((note, index) => (
                <React.Fragment key={note.label}>
                  <Button
                    type="button"
                    variant="ghost"
                    aria-pressed={activeWhy === index}
                    onClick={() => setActiveWhy(index)}
                    className={`equipment-note h-auto min-h-40 w-full items-start justify-start whitespace-normal p-6 text-left shadow-soft transition-transform hover:-translate-y-1 hover:rotate-0 focus-visible:ring-2 focus-visible:ring-terracotta ${note.color} ${activeWhy === index ? "rotate-0 ring-2 ring-terracotta/45" : note.tilt}`}
                  >
                    <span>
                      <span className="block text-xs font-bold uppercase tracking-[0.15em]">{note.label}</span>
                      <span className="mt-5 block font-display text-3xl leading-tight">{note.text}</span>
                    </span>
                  </Button>
                  {index < whyNotes.length - 1 && <ArrowRight className="mx-auto hidden h-7 w-7 text-terracotta md:block" aria-hidden="true" />}
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>

        <section id="equipment-board" className="scroll-mt-24 border-y border-ink/15 bg-card/65 px-4 py-16 md:px-8 md:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div className="max-w-2xl">
                <p className="text-xs uppercase tracking-[0.24em] text-terracotta">The board</p>
                <h2 className="mt-3 font-display text-5xl leading-none sm:text-6xl">Five ways to find your fit.</h2>
                <p className="mt-4 leading-relaxed text-ink/70">Start from the reason you want to move. The right equipment follows.</p>
              </div>
              <div className="hidden items-center gap-3 pb-1 text-terracotta sm:flex" aria-hidden="true"><Star className="h-5 w-5" /><span className="font-display text-xl">Your goal leads.</span></div>
            </div>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
              {groups.map((group, index) => (
                <Button
                  type="button"
                  variant="ghost"
                  key={group.id}
                  onClick={() => openGroup(group.id)}
                  className={`equipment-group h-auto min-h-0 w-full flex-col items-stretch justify-start whitespace-normal border border-ink/10 bg-cream p-0 text-left shadow-soft transition-transform hover:-translate-y-1 hover:rotate-0 focus-visible:ring-2 focus-visible:ring-terracotta sm:col-span-1 lg:col-span-2 ${index % 2 === 0 ? "equipment-pin-left" : "equipment-pin-right"} ${index === 3 ? "sm:col-start-1 lg:col-start-2" : ""} ${index === 4 ? "lg:col-start-4" : ""}`}
                >
                  <img src={group.image} alt={group.alt} className="aspect-[4/3] w-full object-cover" loading="lazy" />
                  <span className="flex flex-1 flex-col p-5 sm:p-6">
                    <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-terracotta">{group.name}</span>
                    <span className="mt-3 font-display text-2xl leading-tight">{group.tagline}</span>
                    <span className="mt-3 line-clamp-4 text-sm font-normal leading-relaxed text-ink/70">{group.summary}</span>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-forest">Open this note <ArrowUpRight className="h-4 w-4" /></span>
                  </span>
                </Button>
              ))}
            </div>
          </div>
        </section>

        <section ref={consultationRef} id="consultation" className="scroll-mt-24 px-4 py-16 md:px-8 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5">
              <p className="text-xs uppercase tracking-[0.24em] text-terracotta">Let's design your space</p>
              <h2 className="mt-3 font-display text-5xl leading-[0.98] sm:text-6xl">Not sure what to select?</h2>
              <p className="mt-5 font-display text-2xl leading-snug text-forest">Architecting kinetic-optimized, neurostimulating space.</p>
              <p className="mt-4 leading-relaxed text-ink/75">High-end, high-tech, bio-tech home and facility fitness-wellness spaces, from the first sketch to the final pick. Tell me your real goal and I will help you choose.</p>
              <ol className="mt-8 space-y-4">
                {["Tell me your goal.", "Share your space and budget.", "Get a curated plan."].map((step, index) => (
                  <li key={step} className="flex items-center gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-terracotta font-display text-xl text-terracotta">{index + 1}</span>
                    <span className="font-display text-2xl">{step}</span>
                  </li>
                ))}
              </ol>
              <a className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-forest underline decoration-terracotta underline-offset-4" href="/assets/equipment/technogym-reform-brochure.pdf" target="_blank" rel="noreferrer noopener">
                View the Technogym Reform brochure <ArrowUpRight className="h-4 w-4" />
              </a>
              <p className="mt-2 text-xs text-ink/55">A Reform product brochure; further catalogue choices can be shared during a consultation.</p>
            </div>

            <div className="border border-ink/15 bg-cream/75 p-5 shadow-soft sm:p-8 lg:col-span-7">
              {submitted ? (
                <div className="py-4" role="status" aria-live="polite">
                  <div className="flex h-12 w-12 items-center justify-center bg-sage/25 text-forest"><Heart className="h-6 w-6" /></div>
                  <h3 className="mt-5 font-display text-4xl">Your plan starts with a conversation.</h3>
                  <p className="mt-3 max-w-xl leading-relaxed text-ink/70">Your details are ready. Choose WhatsApp to send them, or email to open a prepared message.</p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Button asChild variant="editorial"><a href={`${SOCIAL.whatsappUrl}?text=${encodeURIComponent(messageFor(submitted))}`} target="_blank" rel="noreferrer noopener">Continue on WhatsApp <ArrowUpRight /></a></Button>
                    <Button asChild variant="editorial-outline"><a href={`mailto:${SOCIAL.email}?subject=${encodeURIComponent("Equipment and fitness-space consultation")}&body=${encodeURIComponent(messageFor(submitted))}`}>Email me instead <ArrowUpRight /></a></Button>
                    <Button type="button" variant="ghost" onClick={() => setSubmitted(null)}>Edit details</Button>
                  </div>
                </div>
              ) : (
                <form className="space-y-5" onSubmit={onSubmit} noValidate>
                  <div>
                    <h3 className="font-display text-3xl">Tell me what you're imagining.</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink/65">A few details make the first conversation more useful.</p>
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Name">
                      <Input autoComplete="name" maxLength={100} value={values.name} onChange={(event) => update("name", event.target.value)} className={inputClass} placeholder="Your name" />
                    </Field>
                    <Field label="WhatsApp or email">
                      <Input autoComplete="email" maxLength={160} value={values.contact} onChange={(event) => update("contact", event.target.value)} className={inputClass} placeholder="How should I reach you?" />
                    </Field>
                  </div>
                  <Field label="I'm planning a">
                    <Select value={values.plan} onValueChange={(value: FormValues["plan"]) => update("plan", value)}>
                      <SelectTrigger className={inputClass}><SelectValue /></SelectTrigger>
                      <SelectContent>
                        {["Home gym", "Wellness studio", "Clinic or hospital", "Hotel or residential facility", "Not sure yet"].map((option) => <SelectItem key={option} value={option}>{option}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </Field>
                  <Field label="My real goal, in one sentence">
                    <Textarea maxLength={500} value={values.goal} onChange={(event) => update("goal", event.target.value)} className={`${inputClass} min-h-24`} placeholder="What do you actually want to feel or fix?" />
                  </Field>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Space size">
                      <Select value={values.space} onValueChange={(value: FormValues["space"]) => update("space", value)}>
                        <SelectTrigger className={inputClass}><SelectValue /></SelectTrigger>
                        <SelectContent>{["Small", "Medium", "Large", "Not sure"].map((option) => <SelectItem key={option} value={option}>{option}</SelectItem>)}</SelectContent>
                      </Select>
                    </Field>
                    <Field label="Budget">
                      <Select value={values.budget} onValueChange={(value: FormValues["budget"]) => update("budget", value)}>
                        <SelectTrigger className={inputClass}><SelectValue /></SelectTrigger>
                        <SelectContent>{["Starter", "Mid-range", "Premium", "Full facility"].map((option) => <SelectItem key={option} value={option}>{option}</SelectItem>)}</SelectContent>
                      </Select>
                    </Field>
                  </div>
                  <Field label="Equipment group of interest">
                    <Select value={values.group} onValueChange={(value: FormValues["group"]) => update("group", value)}>
                      <SelectTrigger className={inputClass}><SelectValue /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="unsure">Not sure yet</SelectItem>
                        {groups.map((group) => <SelectItem key={group.id} value={group.id}>{group.name}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </Field>
                  <Field label="Optional message">
                    <Textarea maxLength={800} value={values.message} onChange={(event) => update("message", event.target.value)} className={`${inputClass} min-h-20`} placeholder="Anything else I should know?" />
                  </Field>
                  <Button type="submit" variant="editorial" size="lg" className="w-full sm:w-auto">Prepare my consultation <ArrowRight /></Button>
                  <p className="text-xs text-ink/55">Your details stay in this form until you choose WhatsApp or email.</p>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <Dialog open={Boolean(selectedGroup)} onOpenChange={closeGroup}>
        {selectedGroup && (
          <DialogContent className="equipment-detail max-h-[92dvh] w-[calc(100%-2rem)] max-w-3xl overflow-y-auto border-ink/15 bg-cream p-0 sm:rounded-none">
            <div className="grid md:grid-cols-2">
              <img src={selectedGroup.image} alt={selectedGroup.alt} className="h-56 w-full object-cover md:h-full md:min-h-[32rem]" />
              <div className="p-6 pt-12 sm:p-8 sm:pt-12">
                <p className="text-xs uppercase tracking-[0.18em] text-terracotta">{selectedGroup.name}</p>
                <DialogTitle className="mt-3 text-left font-display text-3xl font-normal leading-tight">{selectedGroup.tagline}</DialogTitle>
                <DialogDescription className="mt-4 text-left text-sm leading-relaxed text-ink/75">{selectedGroup.summary}</DialogDescription>
                {selectedGroup.note && <p className="mt-4 border-l-2 border-terracotta pl-3 text-xs leading-relaxed text-ink/65">{selectedGroup.note}</p>}
                <div className="mt-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em]">This is for you if...</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {selectedGroup.goals.map((goal) => <span key={goal} className={`border border-ink/10 px-3 py-2 text-xs ${selectedGroup.chip}`}>{goal}</span>)}
                  </div>
                </div>
                <p className="mt-6 font-display text-2xl leading-snug text-forest">Ask yourself: “{selectedGroup.question}”</p>
                <Button type="button" variant="editorial" className="mt-6 w-full" onClick={() => startConsultation(selectedGroup.id)}>Ask me which one fits you <ArrowRight /></Button>
                <div className="mt-6 flex items-center justify-between border-t border-ink/15 pt-4">
                  <Button type="button" variant="ghost" size="icon" aria-label="Previous equipment group" onClick={() => changeGroup(-1)}><ArrowLeft /></Button>
                  <span className="text-xs text-ink/55">{String(selectedIndex + 1).padStart(2, "0")} / {String(groups.length).padStart(2, "0")}</span>
                  <Button type="button" variant="ghost" size="icon" aria-label="Next equipment group" onClick={() => changeGroup(1)}><ArrowRight /></Button>
                </div>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
      <Footer />
    </div>
  );
};

export default TechnogymConsultation;