import { inject, observer } from "mobx-react";
import { useState, useEffect } from "react";

import CartList from "../../components/cartList";
import OrderButton from "../../components/orderButton";
import OrderPopup from "../../components/orderPopup";

const Cart = inject("ShopStore")(
  observer(({ ShopStore }) => {
    const [popupVisible, setPopupVisibility] = useState(false);

    const { goodsListInCart, fetchGoodsInCart } = ShopStore;

    useEffect(fetchGoodsInCart, [fetchGoodsInCart]);

    const cartIsEmpty = goodsListInCart.length === 0;

    const startOrder = () => setPopupVisibility(true);
    const onCompleteOrder = () => setPopupVisibility(false);
    const onCancelOrder = () => setPopupVisibility(false);

    return (
      <>
        <OrderPopup
          goodsInCart={goodsListInCart}
          visible={popupVisible}
          onCompleteOrder={onCompleteOrder}
          onCancelOrder={onCancelOrder}
        />
        <CartList goodsList={goodsListInCart} />
        <OrderButton onOrder={startOrder} disabled={cartIsEmpty} />
      </>
    );
  })
);

export default Cart;
