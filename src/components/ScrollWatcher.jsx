const ScrollWatcher = ({children}) => {
    return (
        <a 
            href="#top"
            className="animate-bounce fixed flex justify-center items-center size-10 md:size-12 bottom-8 right-2 md:right-4 rounded-full border border-black scroll-watcher">
                {children}
        </a>
    )
}

export default ScrollWatcher;