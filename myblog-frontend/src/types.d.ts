type UserState = {
  username: string | null, 
  password: string | null,
  token: string | null,
  error: string | null
}


type Product = {
  id: number;
  name: string;
  price: number;
  img: string;
};

type CartItem = {
  id: number;
  quantity: number;
};

type ProductState = {
  products: Product[];
  loading: boolean;
  cart: CartItem[];
};

type Post = {
  id: string, 
  type: string, 
  title: string,
  body: string,
  url: string
}

type PostToAdd = {
  type: string, 
  title: string,
  body: string,
  url: string
}

type PostState = {
 posts: Post[], 
 loading: boolean;
}

// type UserState = { username: string | null };
