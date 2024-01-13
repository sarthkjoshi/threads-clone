import { getCurrentUserNotifications } from "@/lib/getServerData";
import React from "react";

export default async function Notification() {
  const notification: Array<NotificationType> | [] =
    await getCurrentUserNotifications();
  console.log(notification);
  return <div>page</div>;
}
