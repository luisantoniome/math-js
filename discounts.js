const originalPrice = 120
const discountPercentage = 15

console.table({
  originalPrice,
  discountPercentage
})

const discountedPrice = (originalPrice, discountPercentage) => {
  const pricePercentageWithDiscount = 100 - discountPercentage
  const discountedPrice  = (originalPrice * pricePercentageWithDiscount) / 100

  return discountedPrice
}

const discountedPrice2 = (originalPrice, discountPercentage) => {
  const discount = discountPercentage * originalPrice / 100
  const discountedPrice = originalPrice - discount

  return discountedPrice
}

console.log(discountedPrice(120, 15))
console.log(discountedPrice2(120, 15))

const calcDiscountedPrice = () => {
  const priceInput = document.querySelector('#priceInput').value
  const discountInput = document.querySelector('#discountInput').value
  const couponInput = document.querySelector('#couponInput').value

  let discount = discountInput

  const coupons = [
    {
      name: 'Luis20',
      discount: 20
    },
    {
      name: 'Luis50',
      discount: 50
    },
    {
      name: 'Luis70',
      discount: 70
    }
  ]

  const isCouponValueValid = coupon => coupon.name === couponInput

  const userCoupon = coupons.find(isCouponValueValid)

  if (!userCoupon) {
    console.log(`Coupon ${couponInput} not valid`)
  } else {
    discount = userCoupon.discount
  }

  const finalPrice = discountedPrice(priceInput, discount)

  const finalPriceP = document.querySelector('#finalPrice')
  finalPriceP.innerText = `Final price: ${finalPrice}`
}