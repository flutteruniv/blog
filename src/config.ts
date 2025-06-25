export const SITE = {
  website: "https://blog.flutteruniv.com/", // replace this with your deployed domain
  author: "Fujikawa Kei",
  profile: "https://blog.flutteruniv.com/",
  desc: "Flutter University - Learn Flutter development with practical tutorials and tips",
  title: "Flutter University",
  ogImage: "flutter-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 6,
  postPerPage: 8,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: false,
    text: "Edit page",
    url: "https://github.com/fujikawakei/blog/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "ja", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Tokyo", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
