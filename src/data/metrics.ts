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
      id: "Pengguna Aktif",
    },
    project: {
      en: "on mutualan.com",
      id: "di mutualan.com",
    },
    desc: {
      en: "The total number of registered active users on mutualan.com social media growth exchange platform.",
      id: "Total pengguna aktif terdaftar di platform pertumbuhan media sosial mutualan.com.",
    },
  },
  {
    value: "450K+",
    label: {
      en: "Daily actions",
      id: "Aktivitas Harian",
    },
    project: {
      en: "on mutualan.com",
      id: "di mutualan.com",
    },
    desc: {
      en: "Follow exchange transactions processed daily with low latency and high availability on mutualan.com.",
      id: "Ratusan ribu transaksi follow exchange diproses setiap hari dengan latensi rendah dan availability tinggi.",
    },
  },
  {
    value: "5,859+",
    label: {
      en: "Polling stations",
      id: "TPS Tercakup",
    },
    project: {
      en: "for Bandung Bedas",
      id: "untuk Bandung Bedas",
    },
    desc: {
      en: "Voting stations covered and synchronized concurrently in real-time during the 2024 Regional Elections.",
      id: "Ribuan TPS tersinkronisasi secara real-time selama Pilkada 2024 untuk kebutuhan monitoring dan rekapitulasi data.",
    },
  },
  {
    value: "99.99%",
    label: {
      en: "Accuracy",
      id: "Tingkat Akurasi",
    },
    project: {
      en: "for Bandung Bedas",
      id: "untuk Bandung Bedas",
    },
    desc: {
      en: "High-precision data matching the official KPU results with a difference of only 3 votes out of 1.04M+ votes.",
      id: "Tingkat akurasi tinggi dengan selisih hanya 3 suara dari lebih dari 1,04 juta suara dibanding hasil resmi KPU.",
    },
  },
];
