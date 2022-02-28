export interface ProductI {
  name: string;
  description: string;
  price: number;
  picture: ReturnType<typeof require>;
};

export interface GroupI {
  name: GroupNamesType;
  color: string;
  picture: ReturnType<typeof require>;
}

export type GroupNamesType = 
"Dairy" |
"Oils" |
"Drinks" |
"Rice" |
"Sauces" 