let total = 0;

let goal = Math.floor(Math.random()* 80) + 20
$('.total').text(total)
$('.goal').text(goal)

for (let i = 1 ; i < 5 ; i++) {
    $('.crystalRow').append(`
    <div class="col-md-3">
    <img class ="crystal" id="crystal${i}" data-crystal=${Math.floor(Math.random() * 20) + 1} 
    src="./assets/images/Crystal-Icons/crystal${i}.png" alt="crystal${i}">
    </div> 
    `)
}

$('.crystal').on('click', function () {
    let crystalValue = $(this).attr('data-crystal')
    total += parseInt(crystalValue)
    $('.total').text(total)
    setTimeout(function () {
        gameStatus()
    }, 1000)
})

function gameStatus () {
    if (goal === total) {
        $('#message').text('Congratulations! You Win!')
        setTimeout(function () {
            $('#messages').text('Click on a Button to try and reach the total.') 
            reset()
        }, 1000)    
    } else if (total > goal) {
        $('#message').text('Better Luck Next Time...')
        setTimeout(function () {
            $('#messages').text('Click on a Button to try and reach the total.')
            reset()
        }, 1000)
    }
}

function reset () {
    $('crystal1').attr('data-crystal', Math.floor(Math.random() * 20) + 1)
    $('crystal2').attr('data-crystal', Math.floor(Math.random() * 20) + 1)
    $('crystal3').attr('data-crystal', Math.floor(Math.random() * 20) + 1)
    $('crystal4').attr('data-crystal', Math.floor(Math.random() * 20) + 1)
    total = 0
    $('.total').text(total)
    goal = Math.floor(Math.random()* 80) + 20
}