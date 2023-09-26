export type ChartItemType = {
  hour: number;
  today: number;
  yesterday: number;
};

export type ChartProps = {
  trends: ChartItemType[];
};

export type ActiveDotProps = {
  cx?: number;
  cy?: number;
};

export type TooltipProps = {
  active?: boolean;
  payload?: { value: string }[];
};

export type RenderLegendProps = {
  payload?: { value: string }[];
};
