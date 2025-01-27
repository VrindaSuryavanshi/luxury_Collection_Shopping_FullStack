import React from "react";


const AddressCard = ({address}) => {
 
  return (
    <div>
      <div className="space-y-2 text-left">
        <h1 className="font-semibold text-lg opacity-50">Address :</h1>
        <p className="font-semibold">{address?.firstName} {address?.lastName}</p>
        <p className="text-sm">{address?.streetAddress} ,{address?.city} , {address?.state} , {address?.zipCode}</p>
        <div>
          <p className="space-y-1 text-sm">Phone Number</p>
          <p className="font-semibold text-sm">{address?.mobile}</p>
        </div>
      </div>
    </div>
  );
};

export default AddressCard;
