const dateConfigs: { [key: string]: Intl.DateTimeFormatOptions } = {
  dayMonthYearConfig: {
    hour: "2-digit",
    minute: "2-digit",
    day: "2-digit",
    month: "short",
    year: "numeric",
  },
  dayMonthHourConfig: {
    hour: "2-digit",
    minute: "2-digit",
    day: "2-digit",
    month: "short",
  },
  dayMonthConfig: {
    day: "2-digit",
    month: "short",
  },
  yearMonthConfig: {
    month: "short",
    year: "numeric",
  },
  hourConfig: { hour: "2-digit", minute: "2-digit" },
} as const;

type DateConfigKeys = keyof typeof dateConfigs;

export default function getTimeString(
  date: string,
  config?: DateConfigKeys
): string {
  if (!date) return "";

  const currentTime = Date.now();
  const _12h = 1000 * 60 * 60 * 12;
  const dateMs = new Date(date).getTime();

  const currentYear = new Date().getFullYear();
  const dateYear = new Date(date).getFullYear();

  const passedYear = dateYear < currentYear;
  const passed12h = currentTime - dateMs > _12h;

  const internalizeDate = (config: Intl.DateTimeFormatOptions) =>
    new Intl.DateTimeFormat("en-us", config).format(new Date(date));

  return config
    ? internalizeDate(dateConfigs[config])
    : passedYear
    ? internalizeDate(dateConfigs.dayMonthYearConfig)
    : passed12h
    ? internalizeDate(dateConfigs.dayMonthConfig)
    : internalizeDate(dateConfigs.hourConfig);
}
