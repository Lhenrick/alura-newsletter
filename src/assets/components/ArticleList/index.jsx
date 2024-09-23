import data from "../../../articles.json"
import Article from "../Article"
import reaperLogo from "../../images/reapers-logo.svg"

const ArticleList = () => {
    return (
     <>
     <figure className="flex justify-center">
        <img loading="lazy" src={reaperLogo} alt="reaper's chronicle logo" />
      </figure>
    <div className="mt-5 sm:mt-0 grid gap-5 m-auto max-w-2xl sm:grid-cols-2 lg:grid-cols-3 lg:max-w-[1000px]">
        {
            data.map((props, index) => <Article key={index} {...props}/>)
        }
    </div>
    </>
    )
}

export default ArticleList