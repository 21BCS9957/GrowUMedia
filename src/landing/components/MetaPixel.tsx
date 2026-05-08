import { useEffect } from "react";
import { META_PIXEL_ID, type MetaPixelFunction, trackMetaEvent } from "../lib/meta-events";

export default function MetaPixel() {
  useEffect(() => {
    if (!META_PIXEL_ID) {
      trackMetaEvent({ eventName: "PageView" });
      return;
    }

    if (window.fbq) {
      trackMetaEvent({ eventName: "PageView" });
      return;
    }

    const existingScript = document.getElementById("meta-pixel");
    if (existingScript) {
      return;
    }

    const fbqQueue: Parameters<MetaPixelFunction>[] = [];
    window.fbq = ((...args: Parameters<MetaPixelFunction>) => {
      fbqQueue.push(args);
    }) as MetaPixelFunction;
    window.fbq.queue = fbqQueue;

    const script = document.createElement("script");
    script.id = "meta-pixel";
    script.async = true;
    script.src = "https://connect.facebook.net/en_US/fbevents.js";
    document.head.appendChild(script);

    window.fbq("init", META_PIXEL_ID);
    trackMetaEvent({ eventName: "PageView" });
  }, []);

  if (!META_PIXEL_ID) {
    return null;
  }

  return (
    <noscript>
      <img
        height="1"
        width="1"
        style={{ display: "none" }}
        src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
        alt=""
      />
    </noscript>
  );
}
