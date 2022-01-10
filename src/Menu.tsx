import React, {useState} from 'react';
import {motion, AnimateSharedLayout} from 'framer-motion';

const menuData = ['Short', 'Very Long Item', 'Normal Item']

const Menu:React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number>(0)

    return (
        <div
            style={{
                display: 'flex',
                backgroundColor: '#eee',
                padding: '1rem',
                borderRadius: '25px'
            }}
        >
            <AnimateSharedLayout>
                {
                    menuData.map((item, index)=>(
                        <MenuItem
                            key = {index}
                            item = {item}
                            isActive = {index === activeIndex}
                            onClick = {()=>{setActiveIndex(index)}}
                        />
                    ))
                }
            </AnimateSharedLayout>
        </div>
    );
};

type PropsType = {
    item: string,
    isActive: boolean,
    onClick: ()=>void,
}

const MenuItem: React.FC <PropsType> = ({
    item,
    isActive,
    onClick
}) => {
    return (
        <motion.div
            onClick={onClick}
            style={{
                margin: '0 0.5rem',
                fontWeight: '700',
                position: 'relative'
            }}
            initial={{color: '#000'}}
            animate={{color: isActive ?'rgb(255,0,0)' :'#000'}}
        >
            {isActive && <ActiveLine />}
            {item}
        </motion.div>
    )
}

const ActiveLine: React.FC = () => {
    return (
        <motion.div
            layoutId={'activeLine'}
            style={{
                position: 'absolute',
                bottom: '-6px',
                width: '100%',
                height: '4px',
                backgroundColor: 'rgb(255,0,0)',
            }}
        />
    )
}

export default Menu;