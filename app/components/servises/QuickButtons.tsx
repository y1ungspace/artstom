'use client'

import QuickButton from "./QuickButton"

const QuickButtons: React.FC = () => {
  return(
    <section className="flex justify-evenly my-12">
      <QuickButton />
      <QuickButton />
      <QuickButton />
      <QuickButton />
    </section>
  )
}

export default QuickButtons