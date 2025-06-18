import MainLayout from "../../layouts/MainLayout"
import RegisterForm from "../components/RegisterForm"
import RegisterSvg from "../components/RegisterSvg"

const RegisterPage = () => {
    return (
        <MainLayout>
            <div className="bg-white relative min-h-[90vh]">
                <div
                    className="flex flex-col items-center justify-between pt-0 pb-0  mt-0 mr-auto mb-0 ml-auto max-w-7xl lg:flex-row"
                >
                    <div className="flex flex-col items-center w-full py-5 md:py-28 lg:flex-row">
                        <div className="w-full bg-cover relative max-w-md lg:max-w-2xl lg:w-7/12">
                            <div className="flex flex-col mt-5 mx-auto max-w-[80%] md:max-w-[90%] items-center justify-center w-full h-full relative lg:pr-10">
                                <RegisterSvg />
                            </div>
                        </div>
                        <div className="w-full mb-10 md:mt-20 mr-0 md:mb-0 ml-0 relative z-10 max-w-2xl lg:mt-0 lg:w-5/12">
                            <div
                                className="border flex flex-col items-start justify-start pt-0 md:pt-10 pr-10 pb-10 pl-10 bg-white shadow-2xl rounded-xl relative z-10"
                            >
                                <p className="w-full text-4xl font-medium text-center leading-snug font-serif">
                                    Registrate
                                </p>
                                <div className="w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8">
                                    {/* <LoginForm /> */}
                                    <RegisterForm />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default RegisterPage