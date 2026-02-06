import { useState } from "react";
import { ShoppingCart, Plus, Minus } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import pretLogo from "figma:asset/479751c63a4054d4b5c9efe051d1b12269a8b6fc.png";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  brand?: string;
}

interface ProductCatalogProps {
  onCheckout?: (cart: { [key: number]: number }) => void;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Menú Completo",
    description: "Sándwich, patatas, bebida y postre",
    price: 9.50,
    image: "https://images.unsplash.com/photo-1666307536243-a9bf2d66c51d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXJwbGFuZSUyMG1lYWwlMjB0cmF5JTIwZm9vZHxlbnwxfHx8fDE3NzAxMzg4NDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Comidas",
  },
  {
    id: 2,
    name: "Sándwich de Salmón y Queso",
    description: "Pret a Manger - Salmón ahumado con queso crema",
    price: 6.50,
    image: "https://images.unsplash.com/photo-1741522226997-a34b5a45c648?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWxtb24lMjBjcmVhbSUyMGNoZWVzZSUyMHNhbmR3aWNofGVufDF8fHx8MTc3MDM4MDA3NXww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Comidas",
    brand: "pret",
  },
  {
    id: 3,
    name: "Sándwich de Atún con Rúcula",
    description: "Pret a Manger - Atún fresco con rúcula",
    price: 6.50,
    image: "https://images.unsplash.com/photo-1757961048411-73703e333d25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0dW5hJTIwYXJ1Z3VsYSUyMHNhbmR3aWNofGVufDF8fHx8MTc3MDM4MDA4MXww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Comidas",
    brand: "pret",
  },
  {
    id: 4,
    name: "Café Starbucks",
    description: "Café Premium recién hecho",
    price: 3.50,
    image: "https://images.unsplash.com/photo-1637290742802-3c8a0f5bd49b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFyYnVja3MlMjBjb2ZmZWUlMjBjdXB8ZW58MXx8fHwxNzcwMjU5NjUyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Bebidas",
    brand: "starbucks",
  },
  {
    id: 5,
    name: "Snack Mix",
    description: "Patatas y frutos secos",
    price: 3.00,
    image: "https://images.unsplash.com/photo-1760997707695-f0b5527e5de9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbmFja3MlMjBjaGlwcyUyMGZvb2R8ZW58MXx8fHwxNzcwMDcyODg5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Snacks",
  },
];

export function ProductCatalog({ onCheckout }: ProductCatalogProps) {
  const [cart, setCart] = useState<{ [key: number]: number }>({});
  const [activeTab, setActiveTab] = useState<string>("Todos");

  const categories = ["Todos", "Comidas", "Bebidas", "Snacks"];

  const filteredProducts =
    activeTab === "Todos"
      ? products
      : products.filter((p) => p.category === activeTab);

  const addToCart = (productId: number) => {
    setCart((prev) => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1,
    }));
  };

  const removeFromCart = (productId: number) => {
    setCart((prev) => {
      const newCart = { ...prev };
      if (newCart[productId] > 1) {
        newCart[productId]--;
      } else {
        delete newCart[productId];
      }
      return newCart;
    });
  };

  const totalItems = Object.values(cart).reduce((sum, qty) => sum + qty, 0);
  const totalPrice = Object.entries(cart).reduce((sum, [id, qty]) => {
    const product = products.find((p) => p.id === Number(id));
    return sum + (product?.price || 0) * qty;
  }, 0);

  return (
    <div className="bg-gray-50 px-6 py-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-[#1A1A1A]">
          Enjoy your flight with Vueling!
        </h3>
        {totalItems > 0 && (
          <div className="flex items-center gap-2 bg-[#FFCC00] px-4 py-2 rounded-full">
            <ShoppingCart className="size-4 text-[#1A1A1A]" />
            <span className="font-semibold text-[#1A1A1A]">{totalItems}</span>
            <span className="text-sm text-[#1A1A1A]">
              €{totalPrice.toFixed(2)}
            </span>
          </div>
        )}
      </div>

      {/* Category Tabs */}
      <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
            className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
              activeTab === category
                ? "bg-[#FFCC00] text-[#1A1A1A] font-semibold"
                : "bg-white text-gray-600"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="space-y-4">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-sm overflow-hidden"
          >
            <div className="flex gap-4 p-4">
              <div className="relative">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                {product.brand === "pret" && (
                  <img
                    src={pretLogo}
                    alt="Pret a Manger"
                    className="absolute -bottom-1 -right-1 w-12 h-auto bg-white rounded-md p-0.5 shadow-sm"
                  />
                )}
                {product.brand === "starbucks" && (
                  <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-green-700 rounded-full flex items-center justify-center shadow-sm">
                    <span className="text-white text-xs font-bold">★</span>
                  </div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-[#1A1A1A] mb-1">
                  {product.name}
                </h4>
                <p className="text-sm text-gray-600 mb-2">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-[#1A1A1A]">
                    €{product.price.toFixed(2)}
                  </span>
                  {cart[product.id] ? (
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => removeFromCart(product.id)}
                        className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors"
                      >
                        <Minus className="size-4 text-[#1A1A1A]" />
                      </button>
                      <span className="font-semibold text-[#1A1A1A] min-w-[20px] text-center">
                        {cart[product.id]}
                      </span>
                      <button
                        onClick={() => addToCart(product.id)}
                        className="w-8 h-8 rounded-full bg-[#FFCC00] flex items-center justify-center hover:bg-[#FFD700] transition-colors"
                      >
                        <Plus className="size-4 text-[#1A1A1A]" />
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => addToCart(product.id)}
                      className="px-4 py-2 rounded-full bg-[#FFCC00] text-[#1A1A1A] font-semibold hover:bg-[#FFD700] transition-colors"
                    >
                      Añadir
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Order Button - Inside scroll */}
      {totalItems > 0 && (
        <div className="mt-6">
          <Button
            className="w-full bg-[#1A1A1A] hover:bg-[#333333] text-white h-14 rounded-full text-lg font-semibold shadow-lg"
            onClick={() => onCheckout && onCheckout(cart)}
          >
            Realizar Pedido - €{totalPrice.toFixed(2)}
          </Button>
        </div>
      )}
    </div>
  );
}