import React from 'react';
import styles from './Toast.styles.scss'
import * as Toast from '@radix-ui/react-toast';

const ToastDemo = () => {
    const [open, setOpen] = React.useState(false);
    const eventDateRef = React.useRef(new Date());
    const timerRef = React.useRef(0);

    React.useEffect(() => {
        return () => clearTimeout(timerRef.current);
    }, []);

    return (
        <Toast.Provider swipeDirection="right">
            <button
                className="Button large violet"
                onClick={() => {
                    setOpen(false);
                    window.clearTimeout(timerRef.current);
                    timerRef.current = window.setTimeout(() => {
                        eventDateRef.current = dateRightNow();
                        setOpen(true);
                    }, 100);
                }}
            >
                Add to calendar
            </button>

            <Toast.Root className="ToastRoot" open={open} onOpenChange={setOpen}>
                <Toast.Title className="ToastTitle">Scheduled: Catch up</Toast.Title>
                <Toast.Description asChild>
                    <time className="ToastDescription" dateTime={eventDateRef.current.toISOString()}>
                        {prettyDate(eventDateRef.current)}
                    </time>
                </Toast.Description>
                <Toast.Action className="ToastAction" asChild altText="Goto schedule to undo">
                    <button className="Button small green">Undo</button>
                </Toast.Action>
            </Toast.Root>
            <Toast.Viewport className="ToastViewport" />
        </Toast.Provider>
    );
};

function dateRightNow() {
    const now = new Date();
    const inOneWeek = now.setDate(now.getDate());
    return new Date(inOneWeek);
}

function prettyDate(date) {
    return new Intl.DateTimeFormat('en-US', { dateStyle: 'full', timeStyle: 'short' }).format(date);
}

export default ToastDemo;
