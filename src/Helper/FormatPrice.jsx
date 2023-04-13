
const FormatPrice = ({price}) => {

  return (
    <div>{price.toLocaleString('en-IN', {
        style: 'currency',
        currency: 'INR',
        minimumFractionDigits: 2
      })}</div>
  )
}

export default FormatPrice