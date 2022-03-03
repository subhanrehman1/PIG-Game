'use strict'
const player0=document.querySelector('.player--0');
const player1=document.querySelector('.player--1');
const score0El=document.querySelector('#score--0');
const score1El=document.querySelector('#score--1');
const diceEl=document.querySelector('.dice');
const buttonNew=document.querySelector('.btn--new');
const buttonRoll=document.querySelector('.btn--roll');
const buttonHold=document.querySelector('.btn--hold');
const current0=document.querySelector('#current--0');
const current1=document.querySelector('#current--1');
let currentScore=0;
let activePlayer=0;
const score=[0,0];
let playing=true;
function switchPlayer()
{
    currentScore=0;
    document.getElementById(`current--${activePlayer}`).textContent=currentScore;
    activePlayer= activePlayer===0?1:0;
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
}
//setting all to 0.
score0El.textContent=0;
score1El.textContent=0;
diceEl.classList.add('hidden');

buttonRoll.addEventListener('click',function()
{
    if(playing)
    {
        //rolling the dice and showing the dice image
    const dice=Math.trunc(Math.random()*6)+1;
    diceEl.src=`img/dice-${dice}.png`;
    diceEl.classList.remove('hidden');
    if(dice!=1)
    {
        currentScore+=dice;
        document.getElementById(`current--${activePlayer}`).textContent=currentScore;
    }
    else
    {   
        
       switchPlayer();
        
    }
    }
});

buttonHold.addEventListener('click',function()
{
    if(playing)
    {
        score[activePlayer]+=currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent=score[activePlayer];
    if(score[activePlayer]>=10)
    {
        diceEl.classList.add('hidden');
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        playing=false;
        currentScore=0;
    }
    else
    {
        switchPlayer();  
    }
    }
});

buttonNew.addEventListener('click',function()
{
    score0El.textContent=0;
    score1El.textContent=0;
    current0.textContent=0;
    current1.textContent=0;
    diceEl.classList.add('hidden');
    playing=true;
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
    document.querySelector(`.player--0`).classList.add('player--active');
    score[0]=0;
    score[1]=0;
});
