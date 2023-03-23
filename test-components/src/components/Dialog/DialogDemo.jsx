import React from 'react';
import './DialogDemos.css';

import * as Dialog from '@radix-ui/react-dialog';
import {Cross2Icon} from '@radix-ui/react-icons';
import plusIcon from '../../icons/png/plus.png';
import ButtonText from "../Buttons/ButtonText/ButtonText.jsx";

function DialogDemo() {
    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <button className="Button_MK2">
                    <img style={{
                        width: '25px',
                        height: '25px',
                    }} src={plusIcon}/>
                </button>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="DialogOverlay"/>
                <Dialog.Content className="DialogContent">
                    <Dialog.Title className="DialogTitle">Add project</Dialog.Title>
                    <Dialog.Description className="DialogDescription">
                        Here you can add a new project to your list
                    </Dialog.Description>
                    <div style={{
                        padding: '.2rem 0'
                    }}>
                        <fieldset className="Fieldset">
                            <label className="Label" htmlFor="name">
                                Name
                            </label>
                            <input className="Input" id="name" defaultValue=""/>
                        </fieldset>
                        <fieldset className="Fieldset">
                            <label className="Label" htmlFor="username">
                                Others
                            </label>
                            <input className="Input" id="username" defaultValue=""/>
                        </fieldset>
                    </div>
                    <div style={{display: 'flex', marginTop: 15, justifyContent: 'flex-end'}}>
                        <Dialog.Close asChild>
                            <ButtonText text="Add project" fontSize="13px"/>
                            {/*<button className="Button custom">Add project</button>*/}
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