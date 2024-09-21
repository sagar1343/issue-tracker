"use client";

import { Status } from "@prisma/client";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

interface Props {
  open: number;
  close: number;
  inProgress: number;
}

function IssuesChart({ open, close, inProgress }: Props) {
  const data: { label: string; value: number; status: Status }[] = [
    { label: "Open Issues", value: open, status: "OPEN" },
    { label: "In Progress Issues", value: inProgress, status: "IN_PROGRESS" },
    { label: "Closed Issues", value: close, status: "CLOSED" },
  ];

  return (
    <div className="card card-bordered card-normal">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="label" />
          <YAxis />
          <Bar dataKey="value" barSize={60} fill="#5046E4" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default IssuesChart;
