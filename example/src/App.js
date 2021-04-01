import React from 'react'

import { ExampleComponent, Button } from 'scope-ui'
import 'scope-ui/dist/index.css'

const App = () => {
  return (
    <>
      <Button variant="primary">123</Button>
      <Button variant="success">123</Button>
      <Button variant="warning">123</Button>
      <Button variant="info">123</Button>
      <Button variant="disabled">123</Button>
      <Button variant="inverse">123</Button>
      <Button variant="default">123</Button>
      <Button variant="danger">123</Button>
    </>
  )
}

export default App
