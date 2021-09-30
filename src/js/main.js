const button = document.getElementsByClassName('btn')
const dice = document.getElementById('dice')

const index = () => ~~(Math.random() * 6) + 1
const rollTheDice = () => {
   switch (index()) {
     case 1: dice.innerHTML = `
      <div class="dice-number-position">
        <div class="number center"></div>
      </div>`
       break

     case 2: dice.innerHTML = `
      <div class="dice-number-position">
        <div class="number left top"></div>
        <div class="number right bottom"></div>
      </div>`
       break

     case 3: dice.innerHTML = `
      <div class="dice-number-position">
        <div class="number left top"></div>
        <div class="number center"></div>
        <div class="number right bottom"></div>
      </div>`
       break

     case 4: dice.innerHTML = `
      <div class="dice-number-position">
        <div class="number left top"></div>
        <div class="number left bottom"></div>
        <div class="number right top"></div>
        <div class="number right bottom"></div>
      </div>`
       break

     case 5: dice.innerHTML = `
      <div class="dice-number-position">
        <div class="number left top"></div>
        <div class="number left bottom"></div>
        <div class="number center"></div>
        <div class="number right top"></div>
        <div class="number right bottom"></div>
      </div>`
       break

     case 6: dice.innerHTML = `
      <div class="dice-number-position">
        <div class="number left top"></div>
        <div class="number left center"></div>
        <div class="number left bottom"></div>
        <div class="number right top"></div>
        <div class="number right center"></div>
        <div class="number right bottom"></div>
      </div>`
       break
   }
}

button[0].addEventListener('click', rollTheDice)

