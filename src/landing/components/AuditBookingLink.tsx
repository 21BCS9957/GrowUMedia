"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";
import { trackAuditBookingClick } from "../lib/meta-events";

type AuditBookingLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
};

export default function AuditBookingLink({
  children,
  onClick,
  ...props
}: AuditBookingLinkProps) {
  return (
    <a
      {...props}
      onClick={(event) => {
        trackAuditBookingClick();
        onClick?.(event);
      }}
    >
      {children}
    </a>
  );
}
