import React, { useState } from "react";

//버튼 랜덤 배치
const setRandom = (data) => {
    let tempArr = [];
    for (let contry in data) {
        tempArr.push(contry);
        tempArr.push(data[contry]);
    }
    tempArr = tempArr.sort(() => Math.random() - 0.5).map(button => {
        return {
            name: button,
            color: '',
        }
    });
    return tempArr;
}

//정답 검증 맵
const setPairMap = (data) => {
    const map = {};
    for (let contry in data) {
        map[contry] = data[contry];
        map[data[contry]] = contry;
    }
    return map;
}

export default function CountryCapitalGame({ data }) {
    const [buttonList, setButtonList] = useState(setRandom(data));
    const [selected, setSelected] = useState(); 

    const pairMap = setPairMap(data);

    const clickHandler = (button) => {
        if (selected && selected.name === button.name) return

        //정답처리
        if (selected && pairMap[selected.name] === button.name) {
            setSelected();
            setButtonList([...buttonList.filter(el => el.name !== button.name).filter(el => el.color !== 'blue')]);
            return;
        }

        //오답처리
        if (selected && pairMap[selected.name] !== button.name) {
            setSelected();
            setButtonList([...buttonList.map(el => {
                return (el.name === button.name) || (el.name === selected.name)? {...el, color: 'red'} : el;
            })]);
            return;
        }

        setSelected(button);
        setButtonList([...buttonList.map(el => {
            if (el.color === 'red' && el.name !== button.name) {
                return {...el, color: ''};
            }
            if (el.name === button.name) {
                return {...el, color: 'blue'};
            }
            return el;
        })]);
    }
    
    return <div>
        { buttonList.length === 0 ?
            'Congratulations'
            :
            buttonList.map(button => (
                <button 
                    key={button.name}
                    style={buttonStyles[button.color] ? buttonStyles[button.color] : { margin: '5px' }}
                    onClick={() => clickHandler(button)}>
                    {button.name}
                </button>
            ))
        }
    </div>;
}

const buttonStyles = {
    blue: {
        backgroundColor: '#0000ff',
        margin: '5px'
    },
    red: {
        backgroundColor: '#ff0000',
        margin: '5px'
    }
}


