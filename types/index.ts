export type TButton = {
  variant?: "primary" | "secondary" | "transparent";
  icon?: string;
  to?: string;
  size?: "xs" | "sm" | "md" | "lg";
  type?: "submit" | "button";
  loading?: boolean;
  disabled?: boolean;
};

export type TCard = {
  icon?: string;
  title: string;
  description: string;
  buttons?: TButton[];
};
