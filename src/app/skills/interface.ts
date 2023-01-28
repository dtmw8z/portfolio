export interface Category {
  name: string;
  skills: Skill[];
}

export interface Image {
  name: string;
}

export interface Skill {
  name: string;
  percentage: number;
  outerStrokeColor: string;
  innerStrokeColor: string;
  imageSource: Image;
}
