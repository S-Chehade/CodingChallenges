/*
You get any card as an argument. Your task is to return the suit of this card (in lowercase).

Our deck (is preloaded):

('3♣') -> return 'clubs'
('3♦') -> return 'diamonds'
('3♥') -> return 'hearts'
('3♠') -> return 'spades'
*/

// 1. create function that takes in a card
// 2. conditional or ternery to check which card it is
// 3. return the suit of the card in lowercase 

function defineSuit(card){
    if (card.charAt(card.length - 1) === '♣'){
        return 'clubs'
    }else if (card.charAt(card.length - 1) === '♦'){
        return 'diamonds'
    }else if (card.charAt(card.length - 1) === '♥'){
        return 'hearts'
    }else if (card.charAt(card.length - 1) === '♠'){
        return 'spades'
    }else{
        return 'Not a valid card'
    }
}


// Above passes tests, but is not the cleanest way to code

function defineSuit(card){
    const s = {
        '♣': 'clubs',
        '♦': 'diamonds',
        '♥': 'hearts',
        '♠': 'spades'
    }
    return s[card.charAt(card.length - 1)]
}

// could also return the suit by checking if card includes ♣♦♥♠

function defineSuit(card){
    if (card.includes('♣')) return 'clubs'
    if (card.includes('♦')) return 'diamonds'
    if (card.includes('♥')) return 'hearts'
    if (card.includes('♠')) return 'spades'
}