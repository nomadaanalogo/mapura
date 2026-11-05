declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
  }
}

export function trackLead(eventName = "Lead") {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("track", eventName)
  }
}
