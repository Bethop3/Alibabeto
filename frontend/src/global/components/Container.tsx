import React, { FC } from 'react'

interface Props {
    background?: string
    classes?: string
    children: React.ReactElement | React.ReactNode
}

const Container: FC<Props> = ({ background, classes, children }) => {
    return (
        <div
            style={{
                background
            }}
            className={classes}
        >
            <section className="max-w-[1100px] container mx-auto px-10 md:px-0"
            >
                {children}
                {/* <slot/> */}
            </section>
        </div>
    )
}

export default Container