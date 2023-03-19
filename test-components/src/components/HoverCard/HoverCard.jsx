import React from 'react';
import * as HoverCard from '@radix-ui/react-hover-card';
import './HoverCard.css';
import icon from "../../icons/png/board.png";

const HoverCardDemo = ({turbinesCount}) => (
    <HoverCard.Root>
        <HoverCard.Trigger asChild>
                <img
                    className="Image large"
                    src={icon}
                    alt="icon"
                />
        </HoverCard.Trigger>

        <HoverCard.Portal>
            <HoverCard.Content className="HoverCardContent" sideOffset={5}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 15 }}>
                        <div>
                            <div className="Text bold">Nr. of available turbines</div>
                            <div className="Text faded">{turbinesCount}</div>
                        </div>
                    </div>
                </div>

                <HoverCard.Arrow className="HoverCardArrow" />
            </HoverCard.Content>
        </HoverCard.Portal>
    </HoverCard.Root>
);

export default HoverCardDemo;