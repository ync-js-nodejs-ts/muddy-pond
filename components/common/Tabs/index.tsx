import { useState } from 'react'
import { TabItem } from './TabItem'

const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState<string>(children[0].props.itemProp)

  const handleClick = (e: any, newActiveTab: string) => {
    e.preventDefault()
    setActiveTab(newActiveTab)
  }

  return (
    <div className='mt-10 w-full'>
      <ul className='list-none grid grid-flow-col justify-center items-center grid-rows-1'>
        {children.map((Tab) => {
          if (activeTab === Tab.props.itemProp) {
            return <TabItem key={Tab.props.itemProp} isActive={true} title={Tab.props.itemProp} activateTab={handleClick} />
          } else {
            return <TabItem key={Tab.props.itemProp} isActive={false} title={Tab.props.itemProp} activateTab={handleClick} />
          }
        })}
      </ul>
      {children.map((TabContentItem) => {
        if (activeTab === TabContentItem.props.itemProp) {
          return (
            <div className='py-2 flex flex-col justify-center items-center' key={TabContentItem.props.itemProp}>
              {TabContentItem.props.children}
            </div>
          )
        }
      })}
    </div>
  )
}

export { Tabs }
