export type QuestionsProps = {
  title: string;
  answer: string;
};

// Animation
export type TAnimationName =
  | "slideInUp"
  | "rotateIn"
  | "scaleIn"
  | "rotateIn3d";

export type StaggerOptions = {
  enabled: boolean;
  delay: number;
};

export type TAnimationOptions = {
  name?: TAnimationName;
  enabled?: boolean;
  duration?: number;
  delay?: number;
  stagger?: StaggerOptions;
};

// Spacing
export type TSpacing = {
  vertical?: TSize;
  top?: TSize;
  bottom?: TSize;
};

// Size
export type TSize = "xs" | "sm" | "md" | "lg";

export type TColor = "white" | "neutral" | "accent" | "transparent";

export type TTailwindColor =
  | "neutral"
  | "primary"
  | "secondary"
  | "accent"
  | "red"
  | "orange"
  | "amber"
  | "yellow"
  | "lime"
  | "green"
  | "emerald"
  | "teal"
  | "cyan"
  | "sky"
  | "blue"
  | "indigo"
  | "violet"
  | "purple"
  | "fuchsia"
  | "pink"
  | "rose";

export type TBackground = {
  color: TColor;
};

// Image
export type TImagePosition = {
  top: number;
  left: number;
};

export type TImage = {
  src: string;
  position?: TImagePosition;
  alt?: string;
};

// Video
export type TVideo = {
  src: string;
};

// Link
export type TLink = {
  url: string;
  target?: TLinkTarget;
};

export type TTextLink = {
  text: string;
  link: TLink;
};

export interface TImageLink {
  image: TImage;
  link: TLink;
}

export type TIconLink = {
  icon: string;
  text: string;
  link: TLink;
};

export type TLinkTarget = "_self" | "_blank";

export interface TButton {
  variant: "primary" | "secondary" | "transparent" | "text" | "accent";
  link?: TLink;
  text: string;
}

export type TIcon = {
  name: string;
};

// Card
export type TCard = {
  variant: "neutral" | "white" | "accent";
  icon?: TIcon;
  image?: TImage;
  number?: string;
  heading?: string;
  title: string;
  description?: string;
  button?: TButton;
  link?: TLink;
  interactive?: boolean;
};

// Intro
export interface TIntro {
  heading?: string;
  level?: number;
  title?: string;
  description?: string;
  button?: TButton;
  width?: TSize;
  center?: boolean;
  animation?: TAnimationOptions;
}

// Map
export type TLocationType = "image" | "marker";

export type TMarkerLocation = {
  type?: TLocationType;
  name?: string;
  link?: string;
  img?: TImage;
  pos: TPosition;
};

export type TPosition = {
  top: number;
  left: number;
};

// Badge
export type TBadge = {
  logo: TImage;
  text?: string;
  link?: TLink;
};

// Contact
export type TContact = {
  name: string;
  image?: TImage;
  roleLabel?: string;
  role?: string;
  social?: string;
  description?: string;
  links?: TIconLink[];
  tags?: string[];
  location?: string;
};

// Field
export interface TFieldSelectOption {
  value: string;
  label: string;
}

export interface TField {
  type:
    | "text"
    | "email"
    | "textarea"
    | "checkbox"
    | "date"
    | "datetime"
    | "select";
  options?: TFieldSelectOption[];
  name: string;
  label: string;
  placeholder: string;
  required: boolean;
}
