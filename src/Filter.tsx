import React, {useState} from 'react';

import {AnimatePresence, motion, AnimateSharedLayout} from "framer-motion";
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

    const [selected, setSelected] = useState(buttons.findIndex(button=> button === 'cars'))

    const handlerFilter = (selector: string) => {
        setCards(data.filter(card=>card.category === selector))
    }

    return (
        <AnimateSharedLayout>
            <motion.div
                layout
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
            >
                <motion.div
                    layout
                    style={{
                        padding: '1rem',
                        maxWidth: '400px',
                        backgroundColor: '#525252',
                        borderRadius: '6px',
                    }}
                >
                    {
                        buttons.map((btn, ind)=>(
                            <Button
                                key={ind}
                                text={btn}
                                onClick={()=>{handlerFilter(btn); setSelected(ind)}}
                                isSelected={selected === ind}
                            />
                        ))
                    }
                </motion.div>
                    <motion.div
                        layout
                        style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        overflow: 'hidden',
                        width: '660px',
                        marginTop: '50px',
                    }}
                    >
                        <AnimatePresence initial={false} exitBeforeEnter>
                            {
                                cards.map(card=>(
                                    <motion.div
                                        layout
                                        key={card.title}
                                        initial={{opacity: 0}}
                                        animate={{opacity: 1}}
                                        exit={{opacity: 0}}
                                    >
                                        <motion.div
                                            layout
                                            style={cardStyle}
                                        >
                                            {card.title}
                                        </motion.div>
                                    </motion.div>
                                ))
                            }
                        </AnimatePresence>
                    </motion.div>
            </motion.div>
        </AnimateSharedLayout>
    );
};

export default Filter;


const cardStyle = {
    display: 'flex',
    justifyContent: 'center',
    width: '180px',
    marginBottom: '0.5rem',
    marginRight: '0.5rem',
    padding: '0.5rem',
    backgroundColor: '#bbb',
    borderRadius: '12px',
}