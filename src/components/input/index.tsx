import { cn } from "@/lib/utils"

function Input({className, type, ...props}: React.ComponentProps< 'input' >) {
    return(
        <input
            type={type}
            data-slot='input'
            className={cn(' border border-beige-500 rounded-lg px-5 py-3 outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 w-full ', 'focus-visible:border-ring focus-visible: focus-visible:ring-[1px] ' ,className)}
        />
    )
}

export {Input}