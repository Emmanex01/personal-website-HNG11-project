  const hamburgerBtn = document.querySelector('.hamburger');
  const exitBtn = document.querySelector('.exit-button');
  const sideBar = document.querySelector('header');
  console.log(sideBar);
  
  let sideBarActive = false;
  console.log(sideBarActive);


    hamburgerBtn.addEventListener('click', () => {
      sideBarActive = !sideBarActive;
      console.log(sideBarActive);
      toggleMenu();
    });

    exitBtn.addEventListener('click', () => {
      sideBarActive = !sideBarActive;
      console.log(sideBarActive);
      toggleMenu();
    })

    const toggleMenu = function () {

      sideBarActive ? exitBtn.style.display = "block" : exitBtn.style.display = "none";
      sideBarActive ? hamburgerBtn.style.display = "none" : hamburgerBtn.style.display = "block";
      sideBarActive ? sideBar.classList.add("sidebar") : sideBar.classList.remove("sidebar");

    }



document.addEventListener('DOMContentLoaded', () => {
    const currentTimeElement = document.getElementById('currentTimeUTC');
    const currentDayElement = document.getElementById('currentDay');
    
  
    // Function to update time and day
    function updateTimeAndDay() {
      const now = new Date();
      const utcTime = now.toUTCString().split(' ')[4];
      const day = now.toLocaleDateString('en-US', { weekday: 'long' });
      
      currentTimeElement.textContent = `Current Time (UTC): ${utcTime}`;
      currentDayElement.textContent = `Current Day: ${day}`;
    }
  
    // Initial update
    updateTimeAndDay();
  
    // Update every second
    setInterval(updateTimeAndDay, 1000);
  });
  