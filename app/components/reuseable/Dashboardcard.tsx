import { type } from "os";
import React from "react";

type MessageProps = {
  sender: string;
  message: string;
  subject: string;
  time: string;
};

const Dashboardcard = ({ sender, message, subject, time }: MessageProps) => {
  function getInitials(name: string) {
    const parts = name.trim().split(" ");
    const initials =
      parts.length === 1 ? parts[0][0] : parts[0][0] + parts[1][0];
    return initials.toUpperCase();
  }

  const initials = getInitials(sender);

  function stringToColor(str: string) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    const color =
      "#" +
      ((hash >> 24) & 0xff).toString(16).padStart(2, "0") +
      ((hash >> 16) & 0xff).toString(16).padStart(2, "0") +
      ((hash >> 8) & 0xff).toString(16).padStart(2, "0");
    return color;
  }

  return (
    <tbody>
      <tr>
        <td className="flex gap-3">
          <span
            className="rounded-full h-10 w-10 text-lg flex justify-center items-center"
            style={{ backgroundColor: stringToColor(sender) }}
          >
            {initials}
          </span>
          <span>
            <h3>{sender}</h3>
            <p>{message}</p>
          </span>
        </td>
        <td>{subject}</td>
        <td className="py-8">{time}</td>
      </tr>
    </tbody>
  );
};

export default Dashboardcard;
