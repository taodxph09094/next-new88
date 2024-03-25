
interface Props {
    params: {
        productId: string
    }
}
const ProductDetail = (props: Props) => {
    const {params} = props
  return (
    <div>ProductDetail {params.productId}</div>
  )
}
export default ProductDetail