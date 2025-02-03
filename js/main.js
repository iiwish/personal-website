document.addEventListener('DOMContentLoaded', () => {
  // Wait for components to load
  setTimeout(() => {
    initializeTheme();
    initializeNavigation();
    initializeScrollFeatures();
  }, 100);
});

// Theme initialization
function initializeTheme() {
  const themeButton = document.getElementById('theme-toggle')
  if (!themeButton) return;

  const darkTheme = 'dark'
  const iconTheme = 'uil-sun'

  // Previously selected theme
  const selectedTheme = localStorage.getItem('selected-theme')
  const selectedIcon = localStorage.getItem('selected-icon')

  // Get current theme
  const getCurrentTheme = () => document.documentElement.classList.contains(darkTheme) ? 'dark' : 'light'
  const getCurrentIcon = () => themeButton.querySelector('i').classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

  // Validate if user previously chose a topic
  if (selectedTheme) {
    document.documentElement.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.querySelector('i').className = `uil ${selectedIcon}`
  }

  // Activate / deactivate the theme manually with the button
  themeButton.addEventListener('click', () => {
    // Add or remove the dark theme
    const isDark = document.documentElement.classList.toggle(darkTheme)
    // Update theme icon (show sun icon in dark mode, moon icon in light mode)
    themeButton.querySelector('i').className = `uil ${isDark ? 'uil-sun' : 'uil-moon'}`
    // Save the theme and the current icon
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
  })
}

// Navigation initialization
function initializeNavigation() {
  const navMenu = document.getElementById('nav-menu')
  const navMenuMobile = document.getElementById('nav-menu-mobile')
  const navToggle = document.getElementById('nav-toggle')
  const header = document.getElementById('header')
  
  if (!navToggle || !navMenuMobile || !header) return;

  // Menu show/hide
  navToggle.addEventListener('click', () => {
    navMenuMobile.classList.toggle('hidden')
    const isOpen = !navMenuMobile.classList.contains('hidden')
    navToggle.querySelector('i').className = isOpen ? 'uil uil-times' : 'uil uil-apps'
  })

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!header.contains(e.target) && !navMenuMobile.classList.contains('hidden')) {
      navMenuMobile.classList.add('hidden')
      navToggle.querySelector('i').className = 'uil uil-apps'
    }
  })

  // Handle smooth scrolling with header offset
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()
      
      const headerHeight = header.offsetHeight
      const targetId = this.getAttribute('href')
      if (targetId === '#') return
      
      const targetElement = document.querySelector(targetId)
      if (targetElement) {
        const targetPosition = targetElement.offsetTop - headerHeight
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        })

        // 关闭移动端菜单
        if (!navMenuMobile.classList.contains('hidden')) {
          navMenuMobile.classList.add('hidden')
          navToggle.querySelector('i').className = 'uil uil-apps'
        }
      }
    })
  })

  // Scroll sections active link
  const sections = document.querySelectorAll('section[id]')

  function scrollActive() {
    const scrollY = window.pageYOffset
    const headerHeight = header.offsetHeight

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight
      const sectionTop = current.offsetTop - headerHeight - 10
      const sectionId = current.getAttribute('id')
      
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document.querySelectorAll(`.nav__link[href*=${sectionId}]`).forEach(link => {
          link.classList.add('text-primary')
        })
      } else {
        document.querySelectorAll(`.nav__link[href*=${sectionId}]`).forEach(link => {
          link.classList.remove('text-primary')
        })
      }
    })
  }

  window.addEventListener('scroll', scrollActive)
}

// Initialize scroll features
function initializeScrollFeatures() {
  const header = document.getElementById('header')
  if (!header) return;
  
  // Change header background
  function scrollHeader() {
    if (window.scrollY >= 80) header.classList.add('shadow-md')
    else header.classList.remove('shadow-md')
  }
  window.addEventListener('scroll', scrollHeader)

  // Show scroll up button and handle click
  const scrollUp = document.getElementById('scroll-up')
  if (scrollUp) {
    window.addEventListener('scroll', function() {
      if (this.scrollY >= 560) {
        scrollUp.classList.remove('hidden')
      } else {
        scrollUp.classList.add('hidden')
      }
    })

    // Add click event for smooth scrolling to top
    scrollUp.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    })
  }
}