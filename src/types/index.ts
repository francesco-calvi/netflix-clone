export type User = {
  uid: string;
  email: string;
};

export type Plan = {
  role: unknown;
  name: string;
  active: boolean;
  tax_code: unknown;
  images: [];
  description: string;
  metadata: {};
  prices: {
    priceId: string;
    priceData: {
      tax_behavior: string;
      active: boolean;
      type: string;
      product: string;
      description: string;
      transform_quantity: unknown;
      billing_scheme: string;
      tiers_mode: unknown;
      tiers: unknown;
      interval_count: number;
      metadata: {};
      currency: string;
      recurring: {
        trial_period_days: unknown;
        interval: string;
        interval_count: number;
        usage_type: string;
        aggregate_usage: unknown;
      };
      interval: string;
      unit_amount: number;
      trial_period_days: unknown;
    };
  };
};

export type Subscription = {
  role: string;
  current_period_end: number;
  current_period_start: number;
};

export type Movie = {
  backdrop_path: string;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
};
