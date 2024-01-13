import { CDN_URL } from "../utils/constant";

const ItemList = ({ items, dummy }) => {
  console.log(dummy);
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
                  - ₹
                  {item.card.info.price
                    ? item.card.info.price / 100
                    : item.card.info.defaultPrice / 100}
                </span>
              </div>
              <p className="text-xs">{item.card.info.description}</p>
            </div>
            <div className="w-3/12 p-4">
              <div className="absolute">
                <button className="font-light p-2 mx-16 rounded-lg bg-black text-white shadow-lg">
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
