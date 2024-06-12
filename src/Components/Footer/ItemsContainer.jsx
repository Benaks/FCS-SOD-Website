import Item from "./Item";
import { PRODUCTS, RESOURCES, COMPANY, SUPPORT } from "./Menus";
const ItemsContainer = () => {
  return (
    <div className="py-10 flex justify-center flex-row">
     
      <Item Links={SUPPORT} title="SOCIALS:" />
    </div>
  );
};

export default ItemsContainer;