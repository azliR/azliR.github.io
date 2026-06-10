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
  desc?: {
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
    desc: {
      en: "The total number of registered active users on mutualan.com social media growth exchange platform.",
      id: "Jumlah total pengguna aktif terdaftar di platform pertukaran pertumbuhan media sosial mutualan.com.",
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
    desc: {
      en: "Follow exchange transactions processed daily with low latency and high availability on mutualan.com.",
      id: "Transaksi pertukaran follow yang diproses setiap hari dengan latensi rendah dan ketersediaan tinggi di mutualan.com.",
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
    desc: {
      en: "Voting stations covered and synchronized concurrently in real-time during the 2024 Regional Elections.",
      id: "Tempat pemungutan suara yang tercakup dan disinkronkan secara bersamaan dalam waktu nyata selama Pilkada 2024.",
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
    desc: {
      en: "High-precision data matching the official KPU results with a difference of only 3 votes out of 1.04M+ votes.",
      id: "Data presisi tinggi yang sesuai dengan hasil resmi KPU dengan selisih hanya 3 suara dari 1,04 juta lebih suara.",
    },
  },
];
