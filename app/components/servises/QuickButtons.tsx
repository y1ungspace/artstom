'use client'

import QuickButton from "./QuickButton"

const QuickButtons: React.FC = () => {
  return(
    <section className="flex gap-6 my-12 mx-10">
      <QuickButton />
      <QuickButton />
      <QuickButton />
      <QuickButton />
    </section>
  )
}

export default QuickButtons