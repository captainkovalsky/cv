type DateCmpProps = {
  startDate: string;
  endDate?: string;
  monthFormat?: "short" | "long";
};

function format(date: any, options: Intl.DateTimeFormatOptions) {
  if (!date) {
    return null;
  }

  return new Date(date).toLocaleString("default", {
    month: options.month ?? "short",
    year: options.year ?? "numeric",
  });
}

export const DateCmp = ({
  startDate,
  endDate,
  monthFormat = "short",
}: DateCmpProps) => {
  const startFormatted = format(startDate, {
    month: monthFormat,
  });
  const endFormatted = format(endDate, {
    month: monthFormat,
  });
  return (
    <p style={{ fontWeight: "bold" }}>
      {startFormatted} &mdash; {endDate ? endFormatted : "present"}
    </p>
  );
};

export default DateCmp;
