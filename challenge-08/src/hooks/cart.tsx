import React, {
  createContext,
  useState,
  useCallback,
  useContext,
  useEffect,
} from 'react';

import AsyncStorage from '@react-native-community/async-storage';

interface Product {
  id: string;
  title: string;
  image_url: string;
  price: number;
  quantity: number;
}

interface ProductDTO {
  id: string;
  title: string;
  image_url: string;
  price: number;
}

interface CartContext {
  products: Product[];
  addToCart(item: Product): void;
  increment(id: string): void;
  decrement(id: string): void;
}

const CartContext = createContext<CartContext | null>(null);

const CartProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function loadProducts(): Promise<void> {
      const cart = await AsyncStorage.getItem('@GoMarketPlace:cart');

      if (cart) {
        setProducts(JSON.parse(cart));
      }
    }

    loadProducts();
  }, []);

  const increment = useCallback(
    async id => {
      const clickedProduct = products.find(product => product.id === id);
      const filterClickedProduct = products.filter(
        product => product.id !== id,
      );
      if (clickedProduct) {
        clickedProduct.quantity += 1;

        setProducts([...filterClickedProduct, clickedProduct]);
      }

      await AsyncStorage.setItem(
        '@GoMarketPlace:cart',
        JSON.stringify(products),
      );
    },
    [products],
  );

  const addToCart = useCallback(
    async (product: ProductDTO) => {
      const productIndex = products.findIndex(
        cartProduct => cartProduct.id === product.id,
      );

      if (productIndex < 0) {
        setProducts(oldProducts => [
          ...oldProducts,
          { ...product, quantity: 1 },
        ]);
        await AsyncStorage.setItem(
          '@GoMarketPlace:cart',
          JSON.stringify([...products, { ...product, quantity: 1 }]),
        );
      } else {
        increment(product.id);
      }
    },
    [products, increment],
  );

  const decrement = useCallback(
    async id => {
      const clickedProduct = products.find(product => product.id === id);
      const filterClickedProduct = products.filter(
        product => product.id !== id,
      );
      if (clickedProduct) {
        if (clickedProduct.quantity <= 1) {
          setProducts(filterClickedProduct);
        } else {
          clickedProduct.quantity -= 1;

          setProducts([...filterClickedProduct, clickedProduct]);
        }
      }

      await AsyncStorage.setItem(
        '@GoMarketPlace:cart',
        JSON.stringify(products),
      );
    },
    [products],
  );

  const value = React.useMemo(
    () => ({ addToCart, increment, decrement, products }),
    [products, addToCart, increment, decrement],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

function useCart(): CartContext {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(`useCart must be used within a CartProvider`);
  }

  return context;
}

export { CartProvider, useCart };
