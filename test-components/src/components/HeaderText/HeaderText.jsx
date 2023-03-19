import React from 'react';

function HeaderText({title, subtitle}) {
    return (
        <>
            <div style={{
                marginBottom: '2rem',
                marginLeft: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
            }}>
                <span style={{
                    fontSize: '2rem',
                    fontFamily: 'Bahnschrift',
                }}>{title}</span>
                <span style={{
                    fontSize: '1rem',
                }}>{subtitle}</span>
            </div>
        </>
    );
}

export default HeaderText;