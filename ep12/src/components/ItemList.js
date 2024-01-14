import { CDN_URL } from "../utils/constant";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const ItemList = ({ items, dummy }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    //Dispatch an action
    dispatch(addItem(item));
  };
  return (
    <div>
      <ul>
        {items.map((item) => (
          <div
            key={item.card.info.id}
            className="p-2 m-2 border border-gray-200 border-b-2 text-left flex justify-between"
          >
            <div className="w-9/12">
              <div className="py-2">
                <span>{item.card.info.name}</span>
                <span>
                  - $
                  {item.card.info.price
                    ? item.card.info.price / 3000
                    : item.card.info.defaultPrice / 3000}
                </span>
              </div>
              <p className="text-xs">{item.card.info.description}</p>
            </div>
            <div className="w-3/12 p-4">
              <div className="absolute">
                <button
                  className="font-light p-2 mx-16 rounded-lg bg-black text-white shadow-lg"
                  onClick={() => handleAddItem(item)}
                >
                  Add +
                </button>
              </div>
              <img src={CDN_URL + item.card.info.imageId} />
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
