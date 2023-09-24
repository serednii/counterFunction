import {onIncrementButtonClick, onDecrementButtonClick, onResetButtonClick} from './controler'
const counterNode = document.querySelector('.js-counter');
const incrementBtnNode = document.querySelector('.js-increment-btn');
const decrementBtnNode = document.querySelector('.js-decrement-btn');
const resetBtnNode = document.querySelector('.js-reset-btn');

type obgCounter = {
    counter: number
}

interface ICreateView {
    render: (counter: obgCounter)=>void
}

export function createView():ICreateView{
    return {
        render({counter}){
            counterNode && (counterNode.innerText = counter)
            }
    }
}

incrementBtnNode?.addEventListener('click', onIncrementButtonClick);
decrementBtnNode?.addEventListener('click', onDecrementButtonClick);
resetBtnNode?.addEventListener('click', onResetButtonClick);
