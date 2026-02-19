import React from "react";

const RestaurantHelpDesk = () => {
  return (
    <div className="bg-(--color-background) rounded-lg p-6 h-full overflow-y-auto">
      <div className="bg-white rounded-lg shadow-md p-6 border border-(--color-primary)">
        <h2 className="text-2xl font-bold text-(--color-text) mb-4">Help Desk & Support</h2>
        <div className="text-center text-(--color-text) py-12">
          <p className="text-lg">Support tickets and help desk features will be displayed here</p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantHelpDesk;