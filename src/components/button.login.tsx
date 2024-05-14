import React from 'react'

interface PropsButtonLogin {
    /**
     * Is this the principal call to action on the page?
     */
    primary?: boolean
    /**
     * What background color to use
     */
    backgroundColor?: string
    /**
     * How large should the button be?
     */
    size?: 'small' | 'medium' | 'large'
    /**
     * Button contents
     */
    label: string
    /**
     * Optional click handler
     */
    onClick?: () => void
    disabled?: boolean
}
function ButtonLogin(props: PropsButtonLogin) {
    let size = ''
    if (props.size == 'small') {
        size = 'px-2 py-1'
    } else if (props.size == 'medium') {
        size = 'px-4 py-2'
    } else {
        size = 'px-2 py-2'
    }
    return (
        <button
            onClick={props.onClick}
            type="button"
            className={` text-dark-dark2  rounded-[6px] ${props.disabled ? 'bg-red-red4 ' : ''} 
            ${props.primary ? 'bg-red-red3' : 'bg-red-red1'} ${size ? size : 'px-2 py-1'}`}
            disabled={props.disabled}
        >
            {props.label}
            <style jsx>{`
                button {
                    background-color: ${props.backgroundColor};
                }
            `}</style>
        </button>
    )
}

export default ButtonLogin
