import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import emailjs from '@emailjs/browser';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import {
  User, Mail, Users, MessageSquare, CheckCircle,
  Flag, Send, MessageCircle, AlertCircle, Tag, Car,
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

// ─── Schema ───────────────────────────────────────────────────────────────────
const bookingSchema = z.object({
  name:       z.string().min(2, 'Name must be at least 2 characters'),
  email:      z.string().email('Please enter a valid email'),
  country:    z.string().min(1, 'Please select your country'),
  passengers: z.number().min(1, 'At least 1 passenger required').max(20, 'Maximum 20 passengers'),
  message:    z.string().optional(),
  promoCode:  z.string().optional(),
});
type BookingFormData = z.infer<typeof bookingSchema>;

// ─── Props ────────────────────────────────────────────────────────────────────
interface BookingFormProps {
  packageName:     string;   // e.g. "Cultural Triangle"
  packagePrice:    string;   // e.g. "From $469"
  packageDuration: string;   // e.g. "7 Days" | "14 Days" | "21 Days"
}

// ─── Vehicle tiers ────────────────────────────────────────────────────────────
const VEHICLE_TIERS = [
  { id: 'wagon-r', label: 'Hatchback', emoji: '🚗', rate: 70,  seats: 4, description: 'Compact & economical' },
  { id: 'sedan',   label: 'Sedan',   emoji: '🚙', rate: 80,  seats: 4, description: 'Comfortable & stylish' },
  { id: 'suv',     label: 'SUV',     emoji: '🚐', rate: 120, seats: 7, description: 'Spacious & premium'   },
] as const;

type VehicleId = typeof VEHICLE_TIERS[number]['id'];

const getTierTotal = (rate: number, days: number | null): number | null =>
  days ? rate * days : null;

// ─── Colours per vehicle ──────────────────────────────────────────────────────
const VEHICLE_COLORS: Record<VehicleId, {
  border: (sel: boolean) => string;
  bg:     (sel: boolean) => string;
  badge:  string;
  check:  string;
  price:  (sel: boolean) => string;
  rate:   (sel: boolean) => string;
}> = {
  'wagon-r': {
    border: s => s ? 'border-blue-500'   : 'border-gray-200',
    bg:     s => s ? 'bg-blue-50'        : 'bg-white hover:bg-blue-50',
    badge:  'bg-blue-100 text-blue-700',
    check:  'bg-blue-500',
    price:  s => s ? 'text-blue-700'     : 'text-gray-800',
    rate:   s => s ? 'text-blue-400'     : 'text-gray-400',
  },
  sedan: {
    border: s => s ? 'border-indigo-500' : 'border-gray-200',
    bg:     s => s ? 'bg-indigo-50'      : 'bg-white hover:bg-indigo-50',
    badge:  'bg-indigo-100 text-indigo-700',
    check:  'bg-indigo-500',
    price:  s => s ? 'text-indigo-700'   : 'text-gray-800',
    rate:   s => s ? 'text-indigo-400'   : 'text-gray-400',
  },
  suv: {
    border: s => s ? 'border-purple-500' : 'border-gray-200',
    bg:     s => s ? 'bg-purple-50'      : 'bg-white hover:bg-purple-50',
    badge:  'bg-purple-100 text-purple-700',
    check:  'bg-purple-500',
    price:  s => s ? 'text-purple-700'   : 'text-gray-800',
    rate:   s => s ? 'text-purple-400'   : 'text-gray-400',
  },
};

// ─── Promo codes ──────────────────────────────────────────────────────────────
const PROMO_CODES = {
  NKS25: { discount: 5, type: 'percentage', description: '5% off your booking' },
  HES25: { discount: 5, type: 'percentage', description: '5% off your booking' },
  RVP25: { discount: 5, type: 'percentage', description: '5% off your booking' },
} as const;

// ─── EmailJS ──────────────────────────────────────────────────────────────────
const EMAILJS_CONFIG = {
  SERVICE_ID:            'service_slq5dbm',
  BOOKING_TEMPLATE_ID:   'template_k82rtr2',
  AUTO_REPLY_TEMPLATE_ID:'template_m9bwcdl',
  PUBLIC_KEY:            'wRx4YOQ1VVqvhlAKt',
};
emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);

// ─── Countries ────────────────────────────────────────────────────────────────
const COUNTRIES = [
  { code: 'AU', name: 'Australia',      flag: '🇦🇺' },
  { code: 'CA', name: 'Canada',         flag: '🇨🇦' },
  { code: 'CN', name: 'China',          flag: '🇨🇳' },
  { code: 'DK', name: 'Denmark',        flag: '🇩🇰' },
  { code: 'FI', name: 'Finland',        flag: '🇫🇮' },
  { code: 'FR', name: 'France',         flag: '🇫🇷' },
  { code: 'DE', name: 'Germany',        flag: '🇩🇪' },
  { code: 'IN', name: 'India',          flag: '🇮🇳' },
  { code: 'IT', name: 'Italy',          flag: '🇮🇹' },
  { code: 'JP', name: 'Japan',          flag: '🇯🇵' },
  { code: 'LK', name: 'Sri Lanka',      flag: '🇱🇰' },
  { code: 'NL', name: 'Netherlands',    flag: '🇳🇱' },
  { code: 'NO', name: 'Norway',         flag: '🇳🇴' },
  { code: 'KR', name: 'South Korea',    flag: '🇰🇷' },
  { code: 'ES', name: 'Spain',          flag: '🇪🇸' },
  { code: 'SE', name: 'Sweden',         flag: '🇸🇪' },
  { code: 'CH', name: 'Switzerland',    flag: '🇨🇭' },
  { code: 'UK', name: 'United Kingdom', flag: '🇬🇧' },
  { code: 'US', name: 'United States',  flag: '🇺🇸' },
].sort((a, b) => a.name.localeCompare(b.name));

// ─── Helper ───────────────────────────────────────────────────────────────────
const parseDays = (duration: string): number | null => {
  const m = duration.match(/\d+/);
  return m ? parseInt(m[0]) : null;
};

// ═════════════════════════════════════════════════════════════════════════════
const BookingForm: React.FC<BookingFormProps> = ({
  packageName, packagePrice, packageDuration,
}) => {
  const [isSubmitting,    setIsSubmitting]    = useState(false);
  const [isSubmitted,     setIsSubmitted]     = useState(false);
  const [countrySearch,   setCountrySearch]   = useState('');
  const [selectedVehicle, setSelectedVehicle] = useState<VehicleId>('wagon-r');
  const [appliedPromo,    setAppliedPromo]    = useState<{
    code: string; discount: number; type: string; description: string;
  } | null>(null);
  const [isCheckingPromo, setIsCheckingPromo] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const days        = parseDays(packageDuration);
  const activeTier  = VEHICLE_TIERS.find(t => t.id === selectedVehicle)!;

  const { register, handleSubmit, formState: { errors }, setValue, watch, reset, getValues } =
    useForm<BookingFormData>({
      resolver: zodResolver(bookingSchema),
      defaultValues: { passengers: 2, promoCode: '' },
    });

  const watchedCountry   = watch('country');
  const watchedPromoCode = watch('promoCode');
  const filteredCountries = COUNTRIES.filter(c =>
    c.name.toLowerCase().includes(countrySearch.toLowerCase())
  );

  // ── discount ──────────────────────────────────────────────────────────────
  const applyDiscount = (amount: number): number => {
    if (!appliedPromo) return amount;
    if (appliedPromo.type === 'percentage')
      return Math.round(amount * (1 - appliedPromo.discount / 100));
    return Math.max(0, amount - appliedPromo.discount);
  };

  // ── selected vehicle totals ───────────────────────────────────────────────
  const activeTotal      = getTierTotal(activeTier.rate, days);
  const activeDiscounted = activeTotal && appliedPromo ? applyDiscount(activeTotal) : null;
  const activeFinal      = activeDiscounted ?? activeTotal;

  // ── promo handlers ────────────────────────────────────────────────────────
  const handleApplyPromo = () => {
    setIsCheckingPromo(true);
    const code = getValues('promoCode')?.toUpperCase().trim();
    if (!code) {
      toast({ title: 'Promo Code Required', description: 'Please enter a promo code', variant: 'destructive' });
      setIsCheckingPromo(false);
      return;
    }
    setTimeout(() => {
      const promo = PROMO_CODES[code as keyof typeof PROMO_CODES];
      if (promo) {
        setAppliedPromo({ code, ...promo });
        toast({ title: '🎉 Promo Code Applied!', description: promo.description });
      } else {
        setAppliedPromo(null);
        toast({ title: 'Invalid Promo Code', description: 'The promo code is not valid', variant: 'destructive' });
      }
      setIsCheckingPromo(false);
    }, 800);
  };

  const handleRemovePromo = () => {
    setAppliedPromo(null);
    setValue('promoCode', '');
    toast({ title: 'Promo Code Removed' });
  };

  // ── email payload ─────────────────────────────────────────────────────────
  const buildEmailParams = (
    data: BookingFormData,
    country: { name: string; flag: string },
  ) => {
    const now = new Date();

    // All 3 tiers with ✅ marker on selected one
    const allOptions = VEHICLE_TIERS.map(t => {
      const tot  = getTierTotal(t.rate, days);
      const disc = tot && appliedPromo ? applyDiscount(tot) : null;
      const mark = t.id === selectedVehicle ? ' ✅' : '';
      if (!tot) return `${t.emoji} ${t.label} ($${t.rate}/day): Custom quote${mark}`;
      return disc
        ? `${t.emoji} ${t.label} ($${t.rate}/day): $${tot} → $${disc}${mark}`
        : `${t.emoji} ${t.label} ($${t.rate}/day): $${tot}${mark}`;
    }).join('  |  ');

    // Single-line summary for selected vehicle
    const selectedSummary = (() => {
      if (!activeTotal) return `${activeTier.emoji} ${activeTier.label} — Custom quote`;
      const base = `${activeTier.emoji} ${activeTier.label} ($${activeTier.rate}/day × ${days} days) = $${activeTotal}`;
      return activeDiscounted
        ? `${base}  →  $${activeDiscounted} after ${appliedPromo!.discount}% discount`
        : base;
    })();

    return {
      // ── package ──────────────────────────────────────────────────────────
      package_name:     packageName,
      package_duration: packageDuration,
      passengers:       data.passengers.toString(),

      // ── vehicle ──────────────────────────────────────────────────────────
      vehicle_selected: selectedSummary,
      vehicle_pricing:  allOptions,
      vehicle_name:    `${activeTier.emoji} ${activeTier.label}`,
      vehicle_rate:    `$${activeTier.rate}/day`,
      vehicle_total:   activeFinal ? `$${activeFinal}` : 'Custom quote',
      vehicle_original: activeTotal ? `$${activeTotal}` : 'Custom quote',

      // ── promo ─────────────────────────────────────────────────────────────
      promo_code:     appliedPromo?.code ?? 'None',
      promo_discount: appliedPromo
        ? `${appliedPromo.discount}% off — ${appliedPromo.description}`
        : 'None',

      // ── customer ──────────────────────────────────────────────────────────
      // These match the {{from_name}} / {{from_email}} / {{reply_to}} variables
      from_name:      data.name,
      from_email:     data.email,
      reply_to:       data.email,
      // FIX: aliases matching {{cust_name}} / {{cust_email}} / {{cust_reply_to}}
      // in the EmailJS templates — previously missing, causing blank fields
      cust_name:      data.name,
      cust_email:     data.email,
      cust_reply_to:  data.email,

      // ── location / message ────────────────────────────────────────────────
      booking_country:      country.name,
      booking_country_flag: country.flag,
      booking_message:      data.message?.trim() || 'No special requests',

      // ── time ─────────────────────────────────────────────────────────────
      booking_date: now.toLocaleDateString('en-US', {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
      }),
      booking_time: now.toLocaleTimeString('en-US', {
        hour: '2-digit', minute: '2-digit', hour12: true,
      }),
    };
  };

  // ── submit handlers ───────────────────────────────────────────────────────
  const handleEmailSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true);
    try {
      const country = COUNTRIES.find(c => c.code === data.country);
      if (!country) throw new Error('Select a valid country');

      const params = buildEmailParams(data, country);

      // Send booking notification email
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.BOOKING_TEMPLATE_ID,
        params,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      // Try auto-reply (don't fail the whole submission if this fails)
      try {
        await emailjs.send(
          EMAILJS_CONFIG.SERVICE_ID,
          EMAILJS_CONFIG.AUTO_REPLY_TEMPLATE_ID,
          params,
          EMAILJS_CONFIG.PUBLIC_KEY
        );
      } catch (replyErr: any) {
        console.warn('Auto-reply failed, but booking was successful:', replyErr);
      }

      setIsSubmitted(true);
      toast({ title: 'Booking Submitted!', description: "Confirmation sent. We'll contact you within 24 hours." });
      reset(); setAppliedPromo(null); setSelectedVehicle('wagon-r');
    } catch (err: any) {
      console.error('EmailJS Error:', err);
      let msg = 'Failed to send email. Please try WhatsApp instead.';
      if (err?.status) {
        msg = `Email error (${err.status}): ${err?.text || 'Unknown error'}`;
      } else if (err?.message) {
        msg = `Email error: ${err.message}`;
      }
      toast({ title: 'Email Error', description: msg, variant: 'destructive' });
    } finally { setIsSubmitting(false); }
  };

  const handleWhatsAppSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true);
    try {
      const country = COUNTRIES.find(c => c.code === data.country);
      if (!country) throw new Error('Select a valid country');

      const priceStr = (() => {
        if (!activeTotal) return 'Custom quote';
        return activeDiscounted
          ? `$${activeDiscounted} _(was $${activeTotal})_`
          : `$${activeTotal}`;
      })();

      const promoLine = appliedPromo
        ? `%0A🎟️ *Promo:* ${appliedPromo.code} — ${appliedPromo.discount}% off`
        : '';

      const msg = [
        `*📦 Booking — Ceylon Holiday Trip*`,
        ``,
        `*Package:*  ${packageName}`,
        `*Duration:* ${packageDuration}`,
        ``,
        `*🚗 Vehicle Selected:*`,
        `${activeTier.emoji} ${activeTier.label}  •  $${activeTier.rate}/day  •  ${priceStr}`,
        promoLine,
        ``,
        `*👤 Customer:*`,
        `Name:       ${data.name}`,
        `Email:      ${data.email}`,
        `Country:    ${country.flag} ${country.name}`,
        `Passengers: ${data.passengers}`,
        ``,
        `*💬 Message:*`,
        data.message?.trim() || 'No special requests',
      ].join('%0A');

      window.open(`https://wa.me/447460511586?text=${msg}`, '_blank');
      setIsSubmitted(true);
      toast({ title: 'Opening WhatsApp', description: 'Complete your booking via WhatsApp.' });
      reset(); setAppliedPromo(null); setSelectedVehicle('wagon-r');
    } catch {
      toast({ title: 'Error', description: 'Something went wrong.', variant: 'destructive' });
    } finally { setIsSubmitting(false); }
  };

  // ── success ───────────────────────────────────────────────────────────────
  if (isSubmitted) {
    return (
      <Card className="border-2 border-green-200 shadow-lg">
        <CardContent className="pt-10 pb-10">
          <div className="text-center space-y-5">
            <div className="flex justify-center">
              <div className="rounded-full bg-green-100 p-4">
                <CheckCircle className="w-16 h-16 text-green-600" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-green-700">Booking Submitted!</h3>
            <p className="text-gray-600 max-w-sm mx-auto">
              Thank you for choosing <strong>{packageName}</strong>.
              Check your email for confirmation — we'll be in touch within 24 hours.
            </p>
            <Button onClick={() => setIsSubmitted(false)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl">
              Book Another Package
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  // ── main form ─────────────────────────────────────────────────────────────
  return (
    <Card className="shadow-xl rounded-lg overflow-hidden">

      {/* ════ Header ════ */}
      <CardHeader className="bg-gradient-to-r from-orange-100 to-red-100 border-b pb-4">
        <CardTitle className="text-2xl font-bold flex items-center text-gray-800">
          <User className="w-7 h-7 mr-3 text-blue-600" />
          Book {packageName}
        </CardTitle>

        <div className="mt-2 space-y-1 text-sm text-gray-600">
          <p><strong>Duration:</strong> {packageDuration}</p>

          {/* Live selected price */}
          {activeFinal && (
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-gray-500">Your price:</span>
              <span className="text-lg font-extrabold text-gray-800">
                {activeTier.emoji} {activeTier.label}
              </span>
              {activeDiscounted ? (
                <>
                  <span className="line-through text-gray-400 text-sm">${activeTotal}</span>
                  <span className="text-green-600 font-extrabold text-lg">${activeDiscounted}</span>
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold">
                    {appliedPromo!.discount}% off
                  </span>
                </>
              ) : (
                <span className="text-blue-700 font-extrabold text-lg">${activeFinal}</span>
              )}
            </div>
          )}

          {appliedPromo && (
            <div className="bg-green-50 border border-green-200 rounded-lg px-3 py-2">
              <p className="text-green-800 text-sm font-semibold">
                🎉 {appliedPromo.discount}% off — {appliedPromo.description}
              </p>
            </div>
          )}
        </div>
      </CardHeader>

      {/* ════ Scrollable body ════ */}
      <div
        ref={formRef}
        onWheel={e => {
          if (formRef.current) { e.preventDefault(); formRef.current.scrollBy({ top: e.deltaY, behavior: 'smooth' }); }
        }}
        style={{ maxHeight: '560px', overflowY: 'auto', scrollBehavior: 'smooth' }}
      >
        <CardContent className="pt-6">
          <div className="space-y-6">

            {/* ════ Vehicle Selector ════ */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-semibold text-gray-700 flex items-center gap-1.5">
                  <Car className="w-4 h-4 text-blue-600" />
                  Select Vehicle *
                </label>
                {days && (
                  <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded-full">
                    Total for {packageDuration}
                  </span>
                )}
              </div>

              <div className="grid grid-cols-3 gap-2">
                {VEHICLE_TIERS.map(tier => {
                  const total      = getTierTotal(tier.rate, days);
                  const discounted = total && appliedPromo ? applyDiscount(total) : null;
                  const sel        = selectedVehicle === tier.id;
                  const c          = VEHICLE_COLORS[tier.id];

                  return (
                    <button
                      key={tier.id}
                      type="button"
                      onClick={() => setSelectedVehicle(tier.id)}
                      className={[
                        'relative flex flex-col items-center gap-1 p-3 rounded-xl border-2',
                        'transition-all duration-200 cursor-pointer text-center w-full',
                        c.border(sel), c.bg(sel),
                        sel ? 'shadow-lg scale-[1.03]' : 'shadow-sm',
                      ].join(' ')}
                    >
                      {/* checkmark badge */}
                      {sel && (
                        <span className={`absolute top-1.5 right-1.5 w-5 h-5 rounded-full ${c.check} flex items-center justify-center shadow`}>
                          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                      )}

                      {/* emoji */}
                      <span className="text-3xl leading-none mt-1">{tier.emoji}</span>

                      {/* name */}
                      <span className={`text-sm font-bold leading-tight ${c.price(sel)}`}>
                        {tier.label}
                      </span>

                      {/* seats */}
                      <span className={`text-xs px-1.5 py-0.5 rounded-full font-semibold ${c.badge}`}>
                        {tier.seats} seats
                      </span>

                      {/* daily rate */}
                      <span className={`text-xs ${c.rate(sel)}`}>${tier.rate}/day</span>

                      {/* ── TOTAL ── */}
                      <div className="w-full border-t border-gray-100 mt-1.5 pt-1.5">
                        {total ? (
                          discounted ? (
                            <div className="leading-tight">
                              <p className="text-xs line-through text-gray-400">${total}</p>
                              <p className={`text-lg font-extrabold ${c.price(sel)}`}>${discounted}</p>
                            </div>
                          ) : (
                            <p className={`text-lg font-extrabold ${c.price(sel)}`}>${total}</p>
                          )
                        ) : (
                          <p className="text-xs text-gray-400 italic">Custom</p>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* breakdown note */}
              {days && (
                <p className="mt-2 text-xs text-gray-400 text-center">
                  Prices are per vehicle · total for {days} days
                </p>
              )}
            </div>

            {/* ════ Name ════ */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
              <div className="relative">
                <User className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                <Input {...register('name')} type="text" placeholder="John Doe"
                  className="pl-11 py-6 border-2 placeholder:text-gray-400" />
              </div>
              {errors.name && (
                <p className="mt-1.5 text-sm text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />{errors.name.message}
                </p>
              )}
            </div>

            {/* ════ Email ════ */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                <Input {...register('email')} type="email" placeholder="john@example.com"
                  className="pl-11 py-6 border-2 placeholder:text-gray-400" />
              </div>
              {errors.email && (
                <p className="mt-1.5 text-sm text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />{errors.email.message}
                </p>
              )}
            </div>

            {/* ════ Country ════ */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Country *</label>
              <Select onValueChange={v => setValue('country', v)}>
                <SelectTrigger className="w-full py-6 border-2">
                  <div className="flex items-center">
                    {watchedCountry ? (
                      <>
                        <span className="text-2xl mr-3">{COUNTRIES.find(c => c.code === watchedCountry)?.flag}</span>
                        <span>{COUNTRIES.find(c => c.code === watchedCountry)?.name}</span>
                      </>
                    ) : (
                      <><Flag className="w-5 h-5 mr-2 text-gray-400" /><SelectValue placeholder="Select country" /></>
                    )}
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <div className="p-2">
                    <Input placeholder="Search..." value={countrySearch}
                      onChange={e => setCountrySearch(e.target.value)}
                      className="placeholder:text-gray-400" />
                  </div>
                  {filteredCountries.map(c => (
                    <SelectItem key={c.code} value={c.code}>
                      <div className="flex items-center space-x-3">
                        <span className="text-xl">{c.flag}</span>
                        <span>{c.name}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.country && (
                <p className="mt-1.5 text-sm text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />{errors.country.message}
                </p>
              )}
            </div>

            {/* ════ Passengers ════ */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Passengers *</label>
              <div className="relative">
                <Users className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                <Input {...register('passengers', { valueAsNumber: true })}
                  type="number" min="1" max="20" placeholder="2"
                  className="pl-11 py-6 border-2 placeholder:text-gray-400" />
              </div>
              {errors.passengers && (
                <p className="mt-1.5 text-sm text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />{errors.passengers.message}
                </p>
              )}
            </div>

            {/* ════ Promo Code ════ */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Promo Code</label>
              <div className="flex space-x-2">
                <div className="relative flex-1">
                  <Tag className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                  <Input {...register('promoCode')} type="text" placeholder="Enter promo code"
                    className="pl-11 py-6 border-2 placeholder:text-gray-400"
                    disabled={!!appliedPromo} />
                </div>
                {!appliedPromo ? (
                  <Button type="button" onClick={handleApplyPromo}
                    disabled={isCheckingPromo || !watchedPromoCode}
                    className="py-6 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-bold px-5">
                    {isCheckingPromo
                      ? <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                      : 'Apply'}
                  </Button>
                ) : (
                  <Button type="button" onClick={handleRemovePromo} variant="outline"
                    className="py-6 border-red-300 text-red-600 hover:bg-red-50 font-bold px-5">
                    Remove
                  </Button>
                )}
              </div>
              {!appliedPromo && (
                <p className="mt-1.5 text-xs text-gray-400">Have a promo code? Enter it above for a discount.</p>
              )}
            </div>

            {/* ════ Special Requests ════ */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Special Requests</label>
              <div className="relative">
                <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <Textarea {...register('message')} placeholder="Any special requirements..."
                  className="pl-11 min-h-[100px] border-2 resize-none placeholder:text-gray-400" />
              </div>
            </div>

            {/* ════ Submit buttons ════ */}
            <div className="grid md:grid-cols-2 gap-4 pt-2">
              <Button type="button" onClick={handleSubmit(handleEmailSubmit)} disabled={isSubmitting}
                className="w-full py-6 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold rounded-xl transition-all duration-300 hover:scale-105">
                {isSubmitting
                  ? <div className="flex items-center gap-2"><div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" /><span>Sending...</span></div>
                  : <><Send className="w-5 h-5 mr-2" />Send via Email</>}
              </Button>
              <Button type="button" onClick={handleSubmit(handleWhatsAppSubmit)} disabled={isSubmitting}
                className="w-full py-6 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold rounded-xl transition-all duration-300 hover:scale-105">
                {isSubmitting
                  ? <div className="flex items-center gap-2"><div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" /><span>Opening...</span></div>
                  : <><MessageCircle className="w-5 h-5 mr-2" />Send via WhatsApp</>}
              </Button>
            </div>

            <p className="text-xs text-gray-400 text-center pt-1">
              By submitting, you agree to our terms. We'll contact you within 24 hours.
            </p>
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

export default BookingForm;