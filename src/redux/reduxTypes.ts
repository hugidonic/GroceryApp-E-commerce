export interface ItemI {
  name: string;
  description: string;
  price: number;
  picture: ReturnType<typeof require>;
};

export interface GroupI {
  name: string;
  color: string;
  picture: ReturnType<typeof require>;
}