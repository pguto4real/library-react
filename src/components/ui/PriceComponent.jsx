import React from "react";

export default function PriceComponent({salePrice,originalPrice}) {
  return (
    <>
      {salePrice ? (
              <>
                <span className="book__price--normal">
                  ${originalPrice.toFixed(2)}
                </span>
                ${salePrice.toFixed(2)}
              </>
            ) : (
              <>${originalPrice.toFixed(2)}</>
            )}
    </>
  );
}
