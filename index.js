function calculateTotal(items) {
  let newItems = [calculateTotal] 

  for(let i = 0; i < items.length; i++) {
    newItems.push(items[i])
  }

  return total
}

const items = [
  {id: 1, price: 19.95, discount: .12, quantity: 2},
  {id: 2, price: 12.95, discount: .10, quantity: 1}
]
const total = items.map((items) => function(calculateTotal) {
  return total - 2
})

console.log(total)

module.exports = calculateTotal