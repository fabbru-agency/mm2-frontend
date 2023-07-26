import { useState } from 'react'
import SectionTitle from '../misc/SectionTitle'
import classNames from 'classnames'
import InteriorDesign from '../misc/tabs/InteriorDesign'
import Arquitecture from '../misc/tabs/Arquitecture'
import Decoration from '../misc/tabs/Decoration'

export default function Services() {
  const [activeTab, setActiveTab] = useState(0)

  const tabs = ['Interior Design', 'Arquitectura', 'Decoração']
  return (
    <section id="services" className="py-40">
      <div className="container mx-auto">
        <SectionTitle className="text-center">Serviços</SectionTitle>

        <div className="mt-16">
          <div className="flex items-center justify-center gap-32  font-semibold text-md relative">
            {tabs.map((tab, index) => {
              return (
                <span
                  key={`tab-${index}`}
                  onClick={() => setActiveTab(index)}
                  className={classNames(
                    "text-black-300 cursor-pointer transition-all duration-500 relative after:content[''] after:absolute after:bg-blue after:max-w-0 after:w-full after:h-[2px] after:-bottom-1 after:left-0 hover:after:max-w-full after:transition-all after:duration-500",
                    {
                      '!text-gray after:max-w-full': activeTab === index,
                    }
                  )}
                >
                  {tab}
                </span>
              )
            })}
          </div>
        </div>

        <div className="mt-9">
          {activeTab === 0 && <InteriorDesign />}
          {activeTab === 1 && <Arquitecture />}
          {activeTab === 2 && <Decoration />}
        </div>
      </div>
    </section>
  )
}
