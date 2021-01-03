import {motion} from 'framer-motion'

export const fall = {
    hidden: {
        opacity: 0,
        x: -300
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: .5
        }
    },
    exit: {
        opacity: 0,
        y: 300,
        rotate: 20,
        transition: {
            duration: .5
        }
    }
}