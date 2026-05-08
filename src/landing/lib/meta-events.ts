export type MetaEventName =
  | "PageView"
  | "InitiateCheckout"
  | "Lead"
  | "Schedule";

export type MetaUserData = {
  email?: string;
  phone?: string;
  firstName?: string;
  lastName?: string;
};

export type MetaEventPayload = {
  eventName: MetaEventName;
  eventId?: string;
  pageUrl?: string;
  customData?: Record<string, string | number | boolean | undefined>;
  userData?: MetaUserData;
};

export type MetaPixelMethod = "init" | "track" | "trackCustom";

export interface MetaPixelFunction {
  (
    method: MetaPixelMethod,
    eventName: string,
    parameters?: Record<string, unknown>,
    options?: { eventID?: string },
  ): void;
  queue?: unknown[];
}

export const META_PIXEL_ID =
  import.meta.env.VITE_META_PIXEL_ID || import.meta.env.VITE_NEXT_PUBLIC_META_PIXEL_ID;

export function createEventId(eventName: MetaEventName) {
  const randomId =
    typeof crypto !== "undefined" && "randomUUID" in crypto
      ? crypto.randomUUID()
      : `${Date.now()}-${Math.random().toString(16).slice(2)}`;

  return `${eventName}.${randomId}`;
}

export function trackMetaEvent({
  eventName,
  eventId = createEventId(eventName),
  pageUrl = typeof window !== "undefined" ? window.location.href : undefined,
  customData,
  userData,
}: MetaEventPayload) {
  const pixelParameters = {
    ...customData,
    page_url: pageUrl,
  };

  if (typeof window !== "undefined" && window.fbq && META_PIXEL_ID) {
    const method = eventName === "Schedule" ? "trackCustom" : "track";
    window.fbq(method, eventName, pixelParameters, { eventID: eventId });
  }

  if (typeof navigator !== "undefined") {
    fetch("/api/meta/events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        eventName,
        eventId,
        pageUrl,
        customData,
        userData,
      }),
      keepalive: true,
    }).catch(() => {
      // Tracking must never block the landing page experience.
    });
  }

  return eventId;
}

export function trackAuditBookingClick() {
  return trackMetaEvent({
    eventName: "InitiateCheckout",
    customData: {
      content_name: "Audit Booking",
      content_category: "CTA Click",
    },
  });
}

export function trackLeadSubmission(userData?: MetaUserData) {
  return trackMetaEvent({
    eventName: "Lead",
    customData: {
      content_name: "Lead Form",
      status: "submitted",
    },
    userData,
  });
}

export function trackScheduledCall() {
  return trackMetaEvent({
    eventName: "Schedule",
    customData: {
      content_name: "Call Scheduled",
      status: "confirmed",
    },
  });
}
