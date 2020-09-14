import React, { useEffect, useState } from "react"
import { FaTimes } from "react-icons/fa"
import { ItemCard } from "../../components/ItemCard"
import { config } from "../../config/fleetMembers"

export const Modal = (props: ModalProps) => {
  const { isOpen, onClick, category } = props

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  let members: {
    name: string
    capacity: string
    boot: string
    luxury: boolean
    features: string
  }[]

  if (category && category.length > 0) {
    members = config(category)
  }

  return (
    <>
      {isOpen && members && (
        <div className="fixed z-20 left-0 top-0 w-screen h-screen overflow-y-auto bg-black bg-opacity-75">
          <div className="bg-white mx-5 my-20 md:m-10 lg:mx-auto p-2 lg:p-10 border lg:w-3/4 transition delay-150 duration-300 ease-in-out transform scale-100 rounded-lg">
            <div className="w-full flex justify-end p-5">
              <button
                className="text-2xl text-gray-600 hover:text-wineDark"
                onClick={() => {
                  onClick("")
                }}
              >
                <FaTimes />
              </button>
            </div>

            <div className="lg:p-5">
              {/* content */}
              <ul>
                {members.map((member, index) => (
                  <li key={`${index}_fleetMembers`} className="py-3">
                    <ItemCard {...member} />
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full flex justify-end p-5">
              <button
                className="text-2xl text-gray-600 hover:text-wineDark"
                onClick={() => {
                  onClick("")
                }}
              >
                close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

declare interface ModalProps {
  isOpen: boolean
  onClick: (member: string) => void
  category: string
}
