import { EnergyReading } from '../models/energy-consumption.model';

export const getReadings = (length = 1200): Promise<EnergyReading[]> => {
  const current = Date.now();
  const hour = 1000 * 60 * 60;
  return Promise.resolve(
    Array.from({ length }, (_, index) => ({
      time: current - index * hour,
      value: Math.random() * 0.7 + 0.4,
    })),
  );
};

export const groupByDay = (readings: EnergyReading[]): EnergyReading[] => {
  const groupedByDay = readings.reduce((curr, { time, value }) => {
    const readingDate = new Date(time);
    const day = new Date(
      readingDate.getFullYear(),
      readingDate.getMonth(),
      readingDate.getDate(),
    ).getTime();
    if (!curr[day]) curr[day] = 0;
    curr[day] += value;
    return curr;
  }, {} as Record<number, number>);

  return Object.entries(groupedByDay).map(([day, value]) => ({
    time: Number(day),
    value,
  }));
};

export const sortByTime = (readings: EnergyReading[]): EnergyReading[] => {
  return [...readings].sort(
    (readingA, readingB) => readingA.time - readingB.time,
  );
};
