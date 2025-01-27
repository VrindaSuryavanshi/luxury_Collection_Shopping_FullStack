import React from "react";


const AddressCard = ({address}) => {
 
  return (
    <div>
      <div className="space-y-2 text-left">
        <h1 className="font-semibold text-lg opacity-50">Address :</h1>
        <p className="font-semibold">{address?.firstName} shaha</p>
        <p className="text-sm">Mumbai ,Andheri , Andheri east , 676543</p>
        <div>
          <p className="space-y-1 text-sm">Phone Number</p>
          <p className="font-semibold text-sm">09876543224</p>
        </div>
      </div>
    </div>
  );
};

export default AddressCard;
