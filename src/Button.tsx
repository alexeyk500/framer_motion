import React from 'react';
import {motion} from "framer-motion";

type PropsType = {
    text: string,
    onClick: ()=>void
}

const Button:React.FC <PropsType> = ({
    text,
    onClick,
                                     }) => {
    return (
        <motion.button
            style={btnStyle}
            onClick={onClick}
            whileHover={{backgroundColor: '#bbb'}}
            whileTap={{backgroundColor: '#999'}}
        >
            {text}
        </motion.button>
    );
};

export default Button;

const btnStyle = {
    border: 'none',
    outline: 'none',
    padding: '12px 16px',
    backgroundColor: '#f1f1f1',
    cursor: 'pointer',
    minWidth: '100px',
    marginRight: '1rem'
}