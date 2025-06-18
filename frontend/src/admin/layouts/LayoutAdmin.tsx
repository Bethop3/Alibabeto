import React from "react"
import Dashboard from "../components/Dashboard"

type Props = {
    children: React.ReactNode | React.ReactElement
}

const LayoutAdmin = ({ children }: Props) => {
    return (
        <div>
            <Dashboard />
            <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%] p-10">
                {children}
            </div>
        </div>
    )
}

export default LayoutAdmin