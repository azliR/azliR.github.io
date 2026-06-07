export interface Metric {
  value: string;
  label: string;
}

export const metrics: Metric[] = [
  {
    value: "39K+",
    label: "Users served",
  },
  {
    value: "450K+",
    label: "Daily actions",
  },
  {
    value: "5,859+",
    label: "Polling stations",
  },
  {
    value: "99.99%",
    label: "Accuracy",
  },
];
