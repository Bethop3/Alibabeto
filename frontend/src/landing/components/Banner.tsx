import Container from '../../global/components/Container'

const Banner = () => {
    return (
        <Container classes='my-4'>
            <div className="h-64 rounded-md overflow-hidden bg-cover bg-center" style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1597923709001-5a061c88418d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
            }}>
                <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
                    <div className="px-10 max-w-xl">
                        <h2 className="text-2xl text-white font-semibold">Wearables</h2>
                        <a href='/productos?categoria=12' className="flex items-center mt-4 px-3 py-2 bg-alibabeto-1 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                            <span>Ver Ahora</span>
                            <svg className="h-5 w-5 mx-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                        </a>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Banner