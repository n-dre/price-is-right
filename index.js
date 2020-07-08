const items = [{
  id: 1, price: 19.95, discount: .12, quantity: 2,
},{
  id: 2, price: 12.95, discount: .10, quantity: 1,
}]

function hasPrice(item) {
  return item.price > 0
}

function objectTotal(item) {
  const unformattedTotal = item.price * (1 - item.discount) * item.quantity
  const total = parseInt(unformattedTotal * 100) / 100

  return { ...item, total }
}

function calculateTotal(items) {
  items = items.map(objectTotal)

  return items
}

module.exports = calculateTotal