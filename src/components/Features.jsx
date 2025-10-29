import React from 'react'
import { bankProviders } from '../data/bankProvider'
function Features() {
  return (
    <section className='mt-8'>
      <h1 className='text-2xl font-semibold text-center'>FASTag Provider</h1>
       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 p-4">
      {bankProviders.map((bank) => (
        <div key={bank.id} className="flex flex-col items-center shadow-md p-4 rounded-xl hover:shadow-lg transition mt-3">
          <img src={bank.image} alt={bank.name} loading='lazy' className="h-20 object-contain" />
          <p className="mt-3 text-center text-sm font-medium">{bank.name}</p>
        </div>
      ))}
    </div>
    </section>
  )
}

export default Features
