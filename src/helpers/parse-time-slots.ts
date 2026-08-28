// helpers/parse-time-slots.ts
import type { Prisma } from "@misael1981/physio-database"

export type TimeSlot = {
  open: string
  close: string
}

export function parseTimeSlots(timeSlots: Prisma.JsonValue): TimeSlot[] {
  if (!Array.isArray(timeSlots)) return []

  return timeSlots.filter(
    (slot): slot is TimeSlot =>
      typeof slot === "object" &&
      slot !== null &&
      "open" in slot &&
      "close" in slot &&
      typeof (slot as TimeSlot).open === "string" &&
      typeof (slot as TimeSlot).close === "string",
  )
}
