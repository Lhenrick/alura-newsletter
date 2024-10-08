

const Article = ({title, text, tags, image, alt}) => {
    return <div className="p-5 bg-gray-200 dark:bg-dark-200 sm:rounded-xl sm:shadow-lg flex  gap-2 flex-col items-center sm:hover:dark:shadow-black sm:hover:shadow-gray-500 sm:hover:shadow-lg" >
        <h3 className="text-xl text-dark-100 dark:text-gray-200 font-bold" >{title}</h3>
        <div className="w-full flex-row justify-end gap-2 pr-5 hidden sm:flex">
            {
                tags.map(tag => <span key={tag} className="bg-fuchsia-600 dark:bg-dark-100 px-4 py-1 rounded-full text-gray-200 text-xs font-bold uppercase hover:bg-dark-200 dark:hover:bg-fuchsia-600  hover:scale-110">{tag}</span>)
            }
        </div>
        <div className="grid gap-1">
            {
                text.map((content, index) => <p className="text-dark-200 dark:text-gray-400" key={index}>{content}</p>)
            }
        </div>
        {image && <img className="sm:p-4" src={image} />}
        {image && alt && <span className="sr-only">{alt}</span>}
    </div>
    
}

export default Article