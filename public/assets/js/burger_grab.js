document.addEventListener('DOMContentLoaded', (event) => {
    if (event) {
      console.info('DOM loaded');
    }

  // CREATE
  const createBurgerBtn = document.getElementById('create-form');

  if (createBurgerBtn) {
    createBurgerBtn.addEventListener('submit', (e) => {
      e.preventDefault();

      // Grabs the value of the textarea that goes by the name, "quote"
      const newBurger = {
        name: document.getElementById('burgerName').value.trim(),
      };

      // Send POST request to create a new quote
      fetch('/api/burgers', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },

        // make sure to serialize the JSON body
        body: JSON.stringify(newBurger),
        }).then(() => {
        // Empty the form
        document.getElementById('burgerName').value = '';

        // Reload the page so the user can see the new quote
        console.log('Created a new burger!');
        location.reload();
      });
    });
  }


  // UPDATE
  const devourBurger = document.querySelectorAll('.devour');

  // Set up the event listener for the create button
  if (devourBurger) {
    devourBurger.forEach((button) => {
      button.addEventListener('click', (e) => {
        //console.log('test');
        // Grabs the id of the element that goes by the name, "id"
        const id = e.target.getAttribute('data-id');

        fetch(`/api/burgers/${id}`, {
          method: 'PUT',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },

        //   // make sure to serialize the JSON body
        //   body: JSON.stringify(newState),
        }).then((response) => {
          // Check that the response is all good
          // Reload the page so the user can see the new quote
          if (response.ok) {
            location.reload('/');
          } else {
            alert('something went wrong!');
          }
        });
      });
    });
  }







});

