// DOM加载完成后执行初始化函数
document.addEventListener('DOMContentLoaded', () => {
  // 等待组件加载完成后执行初始化
  setTimeout(() => {
    initializeTheme();      // 初始化主题
    initializeNavigation(); // 初始化导航
    initializeScrollFeatures(); // 初始化滚动相关功能
  }, 100);
});

// 主题初始化函数
function initializeTheme() {
  const themeButton = document.getElementById('theme-toggle')
  if (!themeButton) return;

  const darkTheme = 'dark'    // 深色主题类名
  const iconTheme = 'uil-sun' // 太阳图标类名

  // 从本地存储获取之前选择的主题
  const selectedTheme = localStorage.getItem('selected-theme')
  const selectedIcon = localStorage.getItem('selected-icon')

  // 获取当前主题状态
  const getCurrentTheme = () => document.documentElement.classList.contains(darkTheme) ? 'dark' : 'light'
  const getCurrentIcon = () => themeButton.querySelector('i').classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

  // 如果用户之前选择了主题，则应用保存的设置
  if (selectedTheme) {
    document.documentElement.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.querySelector('i').className = `uil ${selectedIcon}`
  }

  // 主题切换按钮点击事件
  themeButton.addEventListener('click', () => {
    // 切换深色主题
    const isDark = document.documentElement.classList.toggle(darkTheme)
    // 更新主题图标（深色模式显示太阳图标，浅色模式显示月亮图标）
    themeButton.querySelector('i').className = `uil ${isDark ? 'uil-sun' : 'uil-moon'}`
    // 保存主题设置到本地存储
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
  })
}

// 导航功能初始化
function initializeNavigation() {
  const navMenu = document.getElementById('nav-menu')
  const navMenuMobile = document.getElementById('nav-menu-mobile')
  const navToggle = document.getElementById('nav-toggle')
  const header = document.getElementById('header')
  
  if (!navToggle || !navMenuMobile || !header) return;

  // 移动端菜单显示/隐藏
  navToggle.addEventListener('click', () => {
    navMenuMobile.classList.toggle('hidden')
    const isOpen = !navMenuMobile.classList.contains('hidden')
    // 切换菜单图标（打开时显示关闭图标，关闭时显示菜单图标）
    navToggle.querySelector('i').className = isOpen ? 'uil uil-times' : 'uil uil-apps'
  })

  // 点击菜单外部区域关闭菜单
  document.addEventListener('click', (e) => {
    if (!header.contains(e.target) && !navMenuMobile.classList.contains('hidden')) {
      navMenuMobile.classList.add('hidden')
      navToggle.querySelector('i').className = 'uil uil-apps'
    }
  })

  // 处理平滑滚动和头部偏移
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

  // 滚动时激活对应的导航链接
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

// 初始化滚动相关功能
function initializeScrollFeatures() {
  const header = document.getElementById('header')
  if (!header) return;
  
  // 滚动时改变头部背景
  function scrollHeader() {
    if (window.scrollY >= 80) header.classList.add('shadow-md')
    else header.classList.remove('shadow-md')
  }
  window.addEventListener('scroll', scrollHeader)

  // 显示/隐藏返回顶部按钮
  const scrollUp = document.getElementById('scroll-up')
  if (scrollUp) {
    window.addEventListener('scroll', function() {
      // 根据滚动位置显示或隐藏返回顶部按钮
      if (this.scrollY >= 560) {
        scrollUp.classList.remove('hidden')
      } else {
        scrollUp.classList.add('hidden')
      }
    })

    // 点击返回顶部按钮，平滑滚动到顶部
    scrollUp.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    })
  }
}