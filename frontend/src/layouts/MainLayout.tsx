/* eslint-disable @typescript-eslint/no-explicit-any */

type Props = {
    size?: 'md' | 'lg'
    children?: React.ReactNode
}

const MainLayout = ({ children, size = 'lg' }: Props) => {

    let sizeContainer = 'max-w-[1100px]'

    if (size === 'md') {
        sizeContainer = 'max-w-[90%]'
    }
    return (
        <main className={`${sizeContainer} container mx-auto`}>
            {children}
        </main>
    )
}

export default MainLayout