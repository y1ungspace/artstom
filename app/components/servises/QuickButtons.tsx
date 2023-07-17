'use client'

import QuickButton from "./QuickButton"

const QuickButtons: React.FC = () => {
  return(
    <section className="flex justify-evenly mt-12">
      <QuickButton />
      <QuickButton />
      <QuickButton />
      <QuickButton />
    </section>
  )
}

export default QuickButtons