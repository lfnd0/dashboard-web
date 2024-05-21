'use client'

import * as ScrollArea from '@radix-ui/react-scroll-area'
import * as Tabs from '@radix-ui/react-tabs'
import { useState } from 'react'
import { TabItem } from './TabItem'

export function SettingsTabs() {
  const [currentTab, setCurrentTab] = useState('1')

  return (
    <Tabs.Root value={currentTab} onValueChange={setCurrentTab}>
      <ScrollArea.Root className="w-full" type="scroll">
        <ScrollArea.Viewport className="w-full overflow-x-scroll">
          <Tabs.List className="mt-6 flex w-full items-center gap-4 border-b border-zinc-200 dark:border-zinc-700">
            <TabItem
              value="1"
              title="My details"
              isSelected={currentTab === '1'}
            />
            <TabItem
              value="2"
              title="Profile"
              isSelected={currentTab === '2'}
            />
            <TabItem
              value="3"
              title="Password"
              isSelected={currentTab === '3'}
            />
            <TabItem value="4" title="Team" isSelected={currentTab === '4'} />
            <TabItem value="5" title="Plan" isSelected={currentTab === '5'} />
            <TabItem
              value="6"
              title="Billing"
              isSelected={currentTab === '6'}
            />
            <TabItem value="7" title="Email" isSelected={currentTab === '7'} />
            <TabItem
              value="8"
              title="Notifications"
              isSelected={currentTab === '8'}
            />
            <TabItem
              value="9"
              title="Integrations"
              isSelected={currentTab === '9'}
            />
            <TabItem value="10" title="API" isSelected={currentTab === '10'} />
          </Tabs.List>
        </ScrollArea.Viewport>

        <ScrollArea.Scrollbar
          className="flex h-0.5 translate-y-1.5 touch-none select-none flex-col bg-zinc-100 "
          orientation="horizontal"
        >
          <ScrollArea.Thumb className="relative flex-1 rounded-lg bg-zinc-300" />
        </ScrollArea.Scrollbar>
      </ScrollArea.Root>
    </Tabs.Root>
  )
}
