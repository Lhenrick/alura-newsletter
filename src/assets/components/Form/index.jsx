import Input from "../Input";
import coverImg from "../../images/reapers-cover.svg"
const Form = ({ onSubmit }) => {
    const safeSubmit = event => {
        event.preventDefault()
        event.stopPropagation()
        const name = event.target[0].value;
        const email = event.target[1].value;
        onSubmit({ name, email })
    }

    return (
        <>
            <figure className="flex justify-center h-3/6 ">
                <img src={coverImg} alt="reaper's chronicle login cover image" className="border-4 rounded-xl shadow-xl shadow-fuchsia-600 hover:animate-pulse" />
            </figure>
            <form onSubmit={safeSubmit} className="h-full flex flex-col items-center justify-center gap-10 -mt-80  mx-5">
                <Input type="text" required placeholder="Your name..." />
                <Input type="email" required placeholder="Your email... " />
                <button type="submit" className=" py-1 px-5 w-full max-w-sm bg-fuchsia-700 dark:bg-fuchsia-700 rounded-full text-gray-200 uppercase outline-none hover:animate-pulse hover:shadow-md hover:shadow-gray-500 hover:dark:shadow-black">Sign up</button>
            </form>
        </>
    )
}

export default Form