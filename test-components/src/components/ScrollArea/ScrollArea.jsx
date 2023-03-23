import React from 'react';
import './ScrollArea.css';
import * as ScrollArea from '@radix-ui/react-scroll-area';

import loadout from "../../../src/utils/demo-data/loadout.json";

const ScrollAreaDemo = () => (
    <ScrollArea.Root className="ScrollAreaRoot">
        <ScrollArea.Viewport className="ScrollAreaViewport">
            <div>
                {loadout.map((tag) => (
                    <div className="Tag" key={loadout.Loadout_ID}>
                        {tag.Loadout_ID}
                    </div>
                ))}
            </div>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar className="ScrollAreaScrollbar" orientation="vertical">
            <ScrollArea.Thumb className="ScrollAreaThumb" />
        </ScrollArea.Scrollbar>
        <ScrollArea.Scrollbar className="ScrollAreaScrollbar" orientation="horizontal">
            <ScrollArea.Thumb className="ScrollAreaThumb" />
        </ScrollArea.Scrollbar>
        <ScrollArea.Corner className="ScrollAreaCorner" />
    </ScrollArea.Root>
);

export default ScrollAreaDemo;