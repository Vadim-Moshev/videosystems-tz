import { inject, observer } from "mobx-react";
import { useEffect } from "react";

import GoodsCardsList from "../../components/goodsCardsList";

const Shop = inject("ShopStore")(
  observer(({ ShopStore }) => {
    const { goodsList, fetchGoods } = ShopStore;
    useEffect(fetchGoods, [fetchGoods]);

    return (
      <>
        <GoodsCardsList goodsList={goodsList} />
      </>
    );
  })
);

export default Shop;
