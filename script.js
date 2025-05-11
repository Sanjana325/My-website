
            const h2Element = document.querySelector('#home h2');
            const homeSection = document.querySelector('#home');
          
            h2Element.addEventListener('mouseenter', () => {
              homeSection.style.backgroundImage = 'url(images/serve.jpeg)';
            });
          
            h2Element.addEventListener('mouseleave', () => {
              homeSection.style.backgroundImage ='url(images/5000.jpg)';
            });
      
            function toggleTable(id) {
            const table = document.getElementById(id);
            table.style.display = table.style.display === "none" ? "table" : "none";
        }
        
        document.getElementById('reservation_form').addEventListener('submit', function(event) {
            event.preventDefault();
          
            const name = document.getElementById('name').value;
            const people = document.getElementById('people').value;
            const date = document.getElementById('date').value;
            const time = document.getElementById('time').value;
          
            if (name && people && date && time) {
              document.getElementById('reservation_confirmation').style.display = 'block';
              document.getElementById('reservation_form').reset();
            } else {
              alert('Please fill out all fields before submitting.');
            }
          });
          