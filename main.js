/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 3000,
    delay: 100,
})

sr.reveal(`.foto`)
sr.reveal(`.nama`, {delay: 300})
sr.reveal(`.sosmed`, {delay: 400})
sr.reveal(`.medsos`, {delay: 400})
sr.reveal(`.nav-pills`, {interval: 100, delay: 500})
sr.reveal(`.tab-content`, {delay: 600})
sr.reveal(`.projek1`)
sr.reveal(`.projek2`)
sr.reveal(`.projek3`)
sr.reveal(`.`, {delay: 1000})

//alert gagal terkirim
const gagal = document.querySelector('.alert-gagal');

//Button Close alert terkirim
const myAlert = document.querySelector('.my-alert');
const close = document.querySelector('.close');

close.addEventListener('click', function () {
  myAlert.classList.toggle('hidden');
});


// Form Aktif
const scriptURL = 'https://script.google.com/macros/s/AKfycbw8-8ztvVelG4inRlvfEf7qqy-EYd6V1xtG8DGrm98TqZv1CBziT7mGeWGuCVdbDEoHyw/exec'

      const form = document.forms['submit-to-google-sheet']
      const btnKirim = document.querySelector('.btn-kirim')
      const btnLoading = document.querySelector('.btn-loading')

      //klik kirim dan muncul loading
      form.addEventListener('submit', e => {
        e.preventDefault()

        btnLoading.classList.toggle('invisible')
        btnKirim.classList.toggle('invisible')

        //terkirim, form kosong kembali dan muncul alert
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
          .then(response => {
            btnLoading.classList.toggle('invisible')
            btnKirim.classList.toggle('invisible')
            myAlert.classList.toggle('hidden')
            gagal.classList.add('hidden')
            form.reset()
            console.log('Success!', response)
          })
          
          //tidak terkirim muncul alert
          .catch(error => {
            console.error('Error!', error.message)
            btnLoading.classList.toggle('invisible')
            btnKirim.classList.toggle('invisible')
            gagal.classList.add('hidden')
          })
      })
