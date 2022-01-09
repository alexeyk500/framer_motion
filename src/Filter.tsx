import React, {useState} from 'react';

import {AnimatePresence, motion} from "framer-motion";
import {DataType} from "./data";
import Button from "./Button";

type PropsType = {
    data: DataType[]
}

const Filter:React.FC <PropsType> = ({data}) => {

    const [cards, setCards] = useState<DataType[]>(data.filter(card => card.category === 'cars'))

    const buttons = data.reduce((acc: string[], el) => {
        if (acc.includes(el.category)) return acc
        return [...acc, el.category]
    }, [])

    const handlerFilter = (selector: string) => {
        setCards(data.filter(card=>card.category === selector))
    }

    return (
        <div>
            <div>
                {
                    buttons.map(btn=>(
                        <Button
                            key={btn}
                            text={btn}
                            onClick={()=>{handlerFilter(btn)}}
                        />
                    ))
                }
            </div>
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                overflow: 'hidden',
                width: '660px',
                marginTop: '50px',
            }}>
                <AnimatePresence initial={false} exitBeforeEnter>
                        {
                            cards.map(card=>(
                                <motion.div
                                    key={card.title}
                                    initial={{opacity: 0}}
                                    animate={{opacity: 1}}
                                    exit={{opacity: 0}}
                                >
                                    <div
                                        style={cardStyle}
                                    >
                                        {card.title}
                                    </div>
                                </motion.div>
                            ))
                        }
                </AnimatePresence>

            </div>

        </div>
    );
};

export default Filter;


const cardStyle = {
    display: 'flex',
    justifyContent: 'center',
    width: '200px',
    marginBottom: '0.5rem',
    marginRight: '0.5rem',
    backgroundColor: '#bbb'
}