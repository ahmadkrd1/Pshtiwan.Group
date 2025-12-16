document.addEventListener('DOMContentLoaded', (event) => {
    
    const splashScreen = document.getElementById('splash-screen');
    const mainContent = document.getElementById('main-content');
    
    // کرداری دواخراو بۆ ماوەی 2000 میلی چرکە (2 چرکە)
    setTimeout(function() {
        
        // یەکەم: دەستپێکردنی ونبوونی سکرینی لۆگۆ
        splashScreen.style.opacity = '0'; 

        // دووەم: چاوەڕوانی نیو چرکە (500ms) بۆ تەواوبوونی ونبوونەکە
        setTimeout(function() {
            splashScreen.style.display = 'none';
        }, 500); 

        // سێیەم: دەرخستنی ناوەڕۆکی سەرەکی وێبسایتەکە
        mainContent.style.display = 'block'; 

    }, 2000); // **کاتی سەرەکی پیشاندانی لۆگۆ (2 چرکە)**
});
