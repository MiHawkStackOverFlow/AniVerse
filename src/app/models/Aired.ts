export interface Timeline {
  day: string;
  month: string;
  year: string;
}

export interface Aired {
  from: string;
  to: string;
  prop: {
    from: Timeline;
    to: Timeline;
  };
  string: string;
}

export interface Broadcast {
  day: string;
  time: string;
  timezone: string;
  string: string;
}