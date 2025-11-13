//  map type

type MapType = {
  [key in "hite" | "with"]: number;
};



//  
type Student = {
  id: number;
  name: string;
  age: string;
};

type MapType2 = {
    [key in keyof Student] : number
}