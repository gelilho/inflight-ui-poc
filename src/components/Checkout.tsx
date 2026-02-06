import { useState } from "react";
import { CreditCard, Apple, Plane, Clock, Check } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { products } from "./ProductCatalog";
import aviosLogo from "figma:asset/ad731dd079d986d8408837761aa9dc6b6c848227.png";

interface CheckoutProps {
  cart: { [key: number]: number } | null;
}

// Generar número de pedido aleatorio de 6 caracteres alfanuméricos
const generateOrderNumber = () => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';
  for (let i = 0; i < 6; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};

export function Checkout({ cart }: CheckoutProps) {
  const [deliveryOption, setDeliveryOption] = useState<"before" | "during">("during");
  const [paymentMethod, setPaymentMethod] = useState<string>("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [orderNumber, setOrderNumber] = useState<string>("");

  if (!cart) {
    return (
      <div className="bg-gray-50 px-6 py-6 min-h-screen flex items-center justify-center">
        <p className="text-gray-600">No hay productos en el carrito</p>
      </div>
    );
  }

  const cartItems = Object.entries(cart).map(([id, qty]) => {
    const product = products.find((p) => p.id === Number(id));
    return { product, qty };
  });

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + (item.product?.price || 0) * item.qty,
    0
  );

  const handlePayment = (method: string) => {
    setPaymentMethod(method);
    setShowSuccess(true);
    setOrderNumber(generateOrderNumber());
  };

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center p-6">
        <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-xl text-center">
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="size-12 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-[#1A1A1A] mb-3">
            ¡Pedido Confirmado!
          </h2>
          
          {/* Número de pedido destacado */}
          <div className="bg-[#FFCC00] rounded-lg p-4 mb-4">
            <p className="text-xs text-[#1A1A1A] font-semibold mb-1">Número de Pedido</p>
            <p className="text-3xl font-bold text-[#1A1A1A] tracking-wider">
              {orderNumber}
            </p>
          </div>
          
          <p className="text-gray-600 mb-6">
            Tu pedido se {deliveryOption === "before" ? "preparará para recoger antes del vuelo" : "servirá durante el vuelo"}
          </p>
          <div className="bg-gray-50 rounded-lg p-4 mb-4">
            <p className="text-sm text-gray-600 mb-1">Total pagado</p>
            <p className="text-3xl font-bold text-[#1A1A1A]">
              €{totalPrice.toFixed(2)}
            </p>
          </div>
          <p className="text-xs text-gray-500">
            Recibirás una confirmación en tu correo electrónico
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 px-6 py-6 min-h-screen">
      <h2 className="text-2xl font-bold text-[#1A1A1A] mb-6">
        Resumen de Pedido
      </h2>

      {/* Order Items */}
      <div className="bg-white rounded-xl p-4 mb-4 shadow-sm">
        <h3 className="font-semibold text-[#1A1A1A] mb-3">Productos</h3>
        <div className="space-y-3">
          {cartItems.map((item) => (
            <div key={item.product?.id} className="flex gap-3">
              <ImageWithFallback
                src={item.product?.image || ""}
                alt={item.product?.name || ""}
                className="w-16 h-16 object-cover rounded-lg"
              />
              <div className="flex-1">
                <p className="font-semibold text-[#1A1A1A] text-sm">
                  {item.product?.name}
                </p>
                <p className="text-xs text-gray-600">
                  Cantidad: {item.qty}
                </p>
              </div>
              <div className="text-right">
                <p className="font-bold text-[#1A1A1A]">
                  €{((item.product?.price || 0) * item.qty).toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-200 mt-4 pt-4 flex justify-between items-center">
          <span className="font-semibold text-[#1A1A1A]">Total</span>
          <span className="text-2xl font-bold text-[#1A1A1A]">
            €{totalPrice.toFixed(2)}
          </span>
        </div>
      </div>

      {/* Delivery Options */}
      <div className="bg-white rounded-xl p-4 mb-4 shadow-sm">
        <h3 className="font-semibold text-[#1A1A1A] mb-3">Opciones de entrega</h3>
        <div className="space-y-2">
          <button
            onClick={() => setDeliveryOption("before")}
            className={`w-full p-4 rounded-lg border-2 transition-all ${
              deliveryOption === "before"
                ? "border-[#FFCC00] bg-[#FFFDF0]"
                : "border-gray-200 bg-white"
            }`}
          >
            <div className="flex items-start gap-3">
              <Clock className="size-5 text-[#FFCC00] mt-0.5" />
              <div className="text-left flex-1">
                <p className="font-semibold text-[#1A1A1A]">
                  Recogida antes del vuelo
                </p>
                <p className="text-sm text-gray-600">
                  Recoge tu pedido en la puerta de embarque antes de subir al avión
                </p>
              </div>
            </div>
          </button>
          <button
            onClick={() => setDeliveryOption("during")}
            className={`w-full p-4 rounded-lg border-2 transition-all ${
              deliveryOption === "during"
                ? "border-[#FFCC00] bg-[#FFFDF0]"
                : "border-gray-200 bg-white"
            }`}
          >
            <div className="flex items-start gap-3">
              <Plane className="size-5 text-[#FFCC00] mt-0.5" />
              <div className="text-left flex-1">
                <p className="font-semibold text-[#1A1A1A]">
                  Servicio durante el vuelo
                </p>
                <p className="text-sm text-gray-600">
                  Te lo serviremos directamente en tu asiento
                </p>
              </div>
            </div>
          </button>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="bg-white rounded-xl p-4 mb-24 shadow-sm">
        <h3 className="font-semibold text-[#1A1A1A] mb-3">Método de pago</h3>
        <div className="space-y-3">
          {/* Tarjeta Guardada - Estilo Apple Pay */}
          <button
            onClick={() => handlePayment("card")}
            className="w-full p-4 rounded-xl bg-white border border-gray-300 hover:border-gray-400 transition-all shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-md flex items-center justify-center">
                  <CreditCard className="size-5 text-white" />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-[#1A1A1A]">•••• 4567</p>
                  <p className="text-xs text-gray-500">Visa</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-[#1A1A1A]">€{totalPrice.toFixed(2)}</p>
              </div>
            </div>
          </button>

          {/* Avios - Estilo Apple Pay con Logo */}
          <button
            onClick={() => handlePayment("avios")}
            className="w-full p-4 rounded-xl bg-white border border-gray-300 hover:border-gray-400 transition-all shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-14 h-9 bg-white rounded-md flex items-center justify-center px-2">
                  <img src={aviosLogo} alt="Avios" className="w-full h-full object-contain" />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-[#1A1A1A]">Pagar con Avios</p>
                  <p className="text-xs text-gray-500">{Math.round(totalPrice * 100)} puntos disponibles</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-[#1A1A1A]">{Math.round(totalPrice * 100)}</p>
                <p className="text-xs text-gray-500">Avios</p>
              </div>
            </div>
          </button>

          {/* Apple Pay */}
          <button
            onClick={() => handlePayment("applepay")}
            className="w-full p-4 rounded-xl bg-black hover:bg-gray-900 transition-all shadow-sm"
          >
            <div className="flex items-center justify-center gap-2">
              <Apple className="size-6 text-white" />
              <span className="font-semibold text-lg text-white">Pay</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}