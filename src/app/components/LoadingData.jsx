const { SvgLoader } = require("./assets/svgs")

const LoadingData = ({isSeddingData}) => {
    return(
        <section className={"bg-slate-950/[.9] top-0 left-0 w-full h-full flex flex-col items-center justify-center " + (isSeddingData ? 'fixed' : 'hidden')}>
            <SvgLoader />
        </section>
    )
}

export default LoadingData