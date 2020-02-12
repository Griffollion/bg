function lockVoting(el,container, mainContainer) {
    el.closest(mainContainer).classList.add('voted'); 
    el.closest(container).classList.add('voted'); 
    el.setAttribute('data-js', '');
}

function addVote(el,container, counter) {
  var counter = el.closest(container).querySelector(counter);
  var votes = counter.getAttribute('data-votes');
  ++votes;
  counter.setAttribute('data-votes', votes);

}

document.addEventListener('DOMContentLoaded', function() {
    const votingForm = '[data-js="voting-container"]';
    const votingTile = '.voting-tile';
    const votesCount = '[data-votes]';
    const votingBtn = document.querySelectorAll('[data-voting="voting-btn"]');
    const selectedContainer = document.querySelectorAll('[data-selected=""]');
    var voted = null;

    selectedContainer.forEach((el)=> {
        el.addEventListener('click', function(e){
            e.stopPropagation();
            voted = el;
        })
    });
  

    votingBtn.forEach((el)=> {
        el.addEventListener('click', function(e){
            e.stopPropagation();
            addVote(voted,votingTile, votesCount)
            lockVoting(voted,votingTile, votingForm);
        })
    });
});