"use client";

import { useEffect, useRef } from "react";
import {
  type MetaUserData,
  trackLeadSubmission,
  trackScheduledCall,
} from "../lib/meta-events";

type ConversionEventTrackerProps = {
  eventName: "Lead" | "Schedule";
  userData?: MetaUserData;
};

export default function ConversionEventTracker({
  eventName,
  userData,
}: ConversionEventTrackerProps) {
  const tracked = useRef(false);

  useEffect(() => {
    if (tracked.current) {
      return;
    }

    tracked.current = true;

    if (eventName === "Lead") {
      trackLeadSubmission(userData);
      return;
    }

    trackScheduledCall();
  }, [eventName, userData]);

  return null;
}
