const Loading = ({ loading, children }) => {
    if (loading) return (
        <div >

        <p className="text-center text-black">Loading...</p>
        </div>
    )
    

    return <>{children}</>
}

export default Loading