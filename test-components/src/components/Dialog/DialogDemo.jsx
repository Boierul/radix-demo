import React from 'react';
import './DialogDemos.css';

import * as Dialog from '@radix-ui/react-dialog';
import {Cross2Icon} from '@radix-ui/react-icons';
import ButtonText from "../Buttons/ButtonText/ButtonText.jsx";

function DialogDemo({title, icon, description, labelOne, labelTwo, buttonText, backgroundColor}) {
    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <button style={{
                    backgroundColor: backgroundColor
                }} className="Button_MK2">
                    <img style={{
                        width: '25px',
                        height: '25px',
                    }} src={icon}/>
                </button>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="DialogOverlay"/>
                <Dialog.Content className="DialogContent">
                    <Dialog.Title className="DialogTitle">{title}</Dialog.Title>
                    <Dialog.Description className="DialogDescription">
                        {description}
                    </Dialog.Description>
                    <div style={{
                        padding: '.2rem 0'
                    }}>
                        <fieldset className="Fieldset">
                            <label className="Label" htmlFor="name">
                                {labelOne}
                            </label>
                            <input className="Input" id="name" defaultValue=""/>
                        </fieldset>
                        <fieldset className="Fieldset">
                            <label className="Label" htmlFor="username">
                                {labelTwo}
                            </label>
                            <input className="Input" id="username" defaultValue=""/>
                        </fieldset>
                    </div>
                    <div style={{display: 'flex', marginTop: 15, justifyContent: 'flex-end'}}>
                        <Dialog.Close asChild>
                            <ButtonText text={buttonText} fontSize="13px"/>
                        </Dialog.Close>
                    </div>
                    <Dialog.Close asChild>
                        <button className="IconButton" aria-label="Close">
                            <Cross2Icon/>
                        </button>
                    </Dialog.Close>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}

export default DialogDemo;