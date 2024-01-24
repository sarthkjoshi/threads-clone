import UserAvatar from "@/components/common/UserAvatar";
import { getCurrentUserNotifications } from "@/lib/getServerData";
import { formatDate } from "@/lib/utils";
import React from "react";

export default async function Notification() {
  const notification: Array<NotificationType> | [] =
    await getCurrentUserNotifications();

  return (
    <div>
      {notification.map((n) => {
        return (
          <div className="flex gap-2 items-center m-2">
            <UserAvatar />
            <div className="bg-slate-400 w-full p-2 rounded-md">
              <div className="flex">
                <h1 className="font-bold mr-1">{n.User.name}</h1>
                <p>{n.User.username}</p>
                <p className="ml-8 ">{formatDate(n.createdAt)}</p>
              </div>
              <div>
                <p>{n.content}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
