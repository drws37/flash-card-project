const inputForm = document.querySelector('#add-user')

if(inputForm) {
  inputForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const {name} = e.target;

    const res = await fetch('/', {
      method: 'post',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        name: name.value,
      }),
    });
  })
}

