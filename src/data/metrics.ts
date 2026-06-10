export interface Metric {
  value: string;
  label: {
    en: string;
    id: string;
  };
  project?: {
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
    project: {
      en: "on mutualan.com",
      id: "di mutualan.com",
    },
  },
  {
    value: "450K+",
    label: {
      en: "Daily actions",
      id: "Aksi harian",
    },
    project: {
      en: "on mutualan.com",
      id: "di mutualan.com",
    },
  },
  {
    value: "5,859+",
    label: {
      en: "Polling stations",
      id: "Tempat pemungutan suara (TPS)",
    },
    project: {
      en: "for Bandung Bedas",
      id: "untuk Bandung Bedas",
    },
  },
  {
    value: "99.99%",
    label: {
      en: "Accuracy",
      id: "Akurasi",
    },
    project: {
      en: "for Bandung Bedas",
      id: "untuk Bandung Bedas",
    },
  },
];
