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

export type TLink = {
  to: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  inverse?: boolean;
};

export type TImageLink = {
  src: string;
  alt: string;
  to?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
};

export type TTextLink = {
  text: string;
  to?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
};
