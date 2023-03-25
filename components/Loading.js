import {Oval} from "react-loader-spinner"

const Loading = ({ loading, children }) => {
    if (loading) return (
        <div className='flex justify-center'>
                <Oval
                 ariaLabel="loading-indicator"
                 height={100}
                 width={100}
                 strokeWidth={1}
                 strokeWidthSecondary={2000}
                 color="purple"
                 secondaryColor="black"
               />
               </div>
    )
    

    return <>{children}</>
}

export default Loading