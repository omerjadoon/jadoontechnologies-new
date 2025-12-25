"use client";

import { useEffect } from "react";
import mixpanel from "mixpanel-browser";

export default function MixpanelInitializer() {
    useEffect(() => {
        mixpanel.init("15a4c3fdbfb5855520833bbfa100ad1c", {
            debug: process.env.NODE_ENV !== "production",
            track_pageview: true,
            persistence: "localStorage",
            autocapture: true,
            record_sessions_percent: 100,
        });
    }, []);

    return null;
}
