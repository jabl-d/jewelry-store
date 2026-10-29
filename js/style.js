// هنا قمنا بتحديد العناصر التي ستتحكم بالألوان الداكنة والفاتحة
const darkModeToggle = document.getElementById('dark-mode-toggle'); // في هذا السطر يتم الوصول للعنصر الذي يحتوي على الزر الذي يقوم بتغيير الوضع الليلي والنهاري
const body = document.body; // في هذا السطر يتم الوصول للعنصر الذي يحتوي على العناصر الرئيسية في الصفحة
const icon = darkModeToggle.querySelector('i'); // في هذا السطر يتم الوصول للعنصر الذي يحتوي على الرمز الذي يتغير بين الشمس والقمر

// Check localStorage for dark mode preference
const isDarkMode = localStorage.getItem('darkMode') === 'true'; // في هذا السطر يتم التحقق من قيمة الوضع الليلي والنهاري المحفوظة في الذاكرة المؤقتة

// Apply dark mode if enabled
if (isDarkMode) { // في حال كان الوضع الليلي مفعل
    body.classList.add('dark-mode'); // يتم تفعيل الوضع الليلي
    icon.classList.replace('fa-sun', 'fa-moon'); // يتم تغيير الرمز من الشمس إلى القمر
}

// Toggle dark mode
darkModeToggle.addEventListener('click', () => { // عند النقر على الزر الذي يقوم بتغيير الوضع الليلي والنهاري
    body.classList.toggle('dark-mode'); // يتم تبديل الوضع الليلي والنهاري
    const isDarkMode = body.classList.contains('dark-mode'); // يتم التحقق من الوضع الليلي والنهاري الحالي
    localStorage.setItem('darkMode', isDarkMode); // يتم حفظ الوضع الليلي والنهاري في الذاكرة المؤقتة

    // Change icon
    if (isDarkMode) { // في حال كان الوضع الليلي مفعل
        icon.classList.replace('fa-sun', 'fa-moon'); // يتم تغيير الرمز من الشمس إلى القمر
    } else {
        icon.classList.replace('fa-moon', 'fa-sun'); // يتم تغيير الرمز من القمر إلى الشمس
    }
});




// classlist
document.addEventListener("DOMContentLoaded", () => {
    const navItems = document.querySelectorAll("#myNav ul li a");

    // Get the current page URL path
    const currentPage = window.location.pathname.split("/").pop();
    
    for (let i = 0; i < navItems.length; i++) {
        if (navItems[i].getAttribute("href") === currentPage) {
            navItems[i].parentElement.classList.add("active"); // Add 'active' to <li>
        } else {
            navItems[i].parentElement.classList.remove("active"); // Remove from others
        }
    }
});

