"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export function CalSchedule() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });

      cal("ui", {
        theme: "dark",
        styles: { branding: { brandColor: "#F97316" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <Cal
      calLink="devfik/30min"
      config={{ layout: "month_view", theme: "dark" }}
      namespace="30min"
      style={{ width: "100%", height: "100%", overflow: "scroll" }}
    />
  );
}
