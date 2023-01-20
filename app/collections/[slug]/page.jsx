/** @format */

import Item from '../../components/Item'
import data from '../../../utils/data'
export default function page({ params }) {
  const slug = params.slug
  const item = data.products.find((x) => x.slug === slug)
  console.log(item)
  return (
    <div>
      <Item producto={item} />
    </div>
  )
}
