export interface Metric {
  value: string;
  label: {
    en: string;
    id: string;
  };
}

export const metrics: Metric[] = [
  {
    value: "39K+",
    label: {
      en: "Users served",
      id: "Pengguna terlayani",
    },
  },
  {
    value: "450K+",
    label: {
      en: "Daily actions",
      id: "Aksi harian",
    },
  },
  {
    value: "5,859+",
    label: {
      en: "Polling stations",
      id: "Tempat pemungutan suara (TPS)",
    },
  },
  {
    value: "99.99%",
    label: {
      en: "Accuracy",
      id: "Akurasi",
    },
  },
];
