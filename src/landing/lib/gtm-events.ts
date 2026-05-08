type DataLayerEvent = {
  event: string;
  [key: string]: string | number | boolean | undefined;
};

declare global {
  interface Window {
    dataLayer?: DataLayerEvent[];
  }
}

export function pushDataLayerEvent(event: DataLayerEvent) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(event);
}

export function trackAuditBookingClick() {
  pushDataLayerEvent({
    event: "audit_booking_click",
    form_name: "Audit Booking",
    source_path: window.location.pathname,
  });
}

export function trackAuditLead() {
  pushDataLayerEvent({
    event: "audit_lead_submitted",
    form_name: "Audit Booking",
    source_path: window.location.pathname,
  });
}

export function trackAuditScheduled() {
  pushDataLayerEvent({
    event: "audit_call_scheduled",
    form_name: "Audit Booking",
    source_path: window.location.pathname,
  });
}
