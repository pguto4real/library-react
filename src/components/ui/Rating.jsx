import React from 'react'
import FontAwesomeStar from "./FontAwesomeStar";
import FontAwesomeHalfStar from "./FontAwesomeHalfStar";
export default function Rating({rating}) {
  return (
    <>
    {
      new Array(Math.floor(rating)).fill(0).map((_, key) => (
        <FontAwesomeStar key={key} />
      ))
      //
    }
    {!Number.isInteger(rating) && <FontAwesomeHalfStar />}
  </>
  )
}
