import _ from 'plasticine-lodash'

export default function Hello() {
  const chunked1 = _.chunk([0, 1, 2, 3, 4, 5], 3)
  const chunked2 = _.chunk([0, 1, 2, 3, 4, 5], 4)

  console.log(chunked1)
  console.log(chunked2)

  return (
    <div>
      <span>chunked1: {JSON.stringify(chunked1)}</span>
      <br />
      <span>chunked2: {JSON.stringify(chunked2)}</span>
    </div>
  )
}
