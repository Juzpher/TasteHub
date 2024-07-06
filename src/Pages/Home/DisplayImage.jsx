import React from "react";
import Card from "../../Components/Card/Card";
import items from "../../../public/Data/Items";

const DisplayPage = ({ searchQuery }) => {
  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => <Card key={item._id} item={item} />)
        ) : (
          <h1 className="col-span-full text-center text-secondary/30 text-2xl font-bold">
            No Items found...
          </h1>
        )}
      </div>
    </div>
  );
};

export default DisplayPage;
