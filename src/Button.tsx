import React from 'react';
import {motion} from "framer-motion";

type PropsType = {
    text: string,
    onClick: ()=>void,
    isSelected: boolean,
}

const Button:React.FC <PropsType> = ({
    text,
    onClick,
    isSelected,
}) => {
    return (
        <motion.button
            layout
            style={{
                position: 'relative',
                border: 'none',
                outline: 'none',
                padding: '12px 16px',
                backgroundColor: 'rgb(100,250,250)',
                cursor: 'pointer',
                minWidth: '100px',
                marginRight: '1rem',
                borderRadius: '6px',
            }}
            onClick={onClick}
            whileHover={{backgroundColor: 'rgb(100,180,255)'}}
            whileTap={{backgroundColor: 'rgb(100,100,255)'}}
        >
            {isSelected && <SelectedBtn />}
            <motion.span
                style={{
                    position: 'relative',
                }}
                animate={{color: isSelected ?'#fff' :'#000'}}
            >
                {text}
            </motion.span>
        </motion.button>
    );
};

export default Button;

const SelectedBtn:React.FC = () => {
    return(
        <motion.div
            layoutId={'selectedBtn'}
            style={{
                position: 'absolute',
                width: '90%',
                height: '75%',
                top: '5px',
                left: '5px',
                backgroundColor: 'red',
                borderRadius: '6px',
            }}
        />
    )
}