import React from "react"

export const ItemCard = (props: ItemCardProps) => {
  const { capacity, features, name, boot } = props

  return (
    <div
      className={`w-full border rounded-lg overflow-hidden flex flex-col md:flex-row shadow-md`}
    >
      {/* <div className="bg-gray-500 w-full md:w-1/2 h-auto">.</div> */}
      <div className="p-3 w-full flex flex-col">
        <h3 className="font-medium p-3 border-b-2 border-wine">{name}</h3>
        <dl className="pt-2 flex flex-col">
          <div className="inline-flex py-2">
            <dt className="text-sm px-3 leading-5 font-medium text-gray-600">
              Capacity
            </dt>
            <dd className="text-sm  px-3 leading-5">{capacity}</dd>
          </div>

          {boot && (
            <div className="inline-flex py-2">
              <dt className="text-sm px-3 leading-5 font-medium text-gray-600">
                Boot space
              </dt>
              <dd className="text-sm  px-3 leading-5">{boot}</dd>
            </div>
          )}

          <div className="inline-flex py-2">
            <dt className="text-sm px-3 leading-5 font-medium text-gray-600">
              Features
            </dt>
            <dd className="text-sm  px-3 leading-5">{features}</dd>
          </div>
        </dl>
      </div>
    </div>
  )
}

declare interface ItemCardProps {
  name: string
  capacity: string
  boot?: string
  features: string
  luxury?: boolean
}
