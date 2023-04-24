const video = document.querySelectorAll('.video')

video.forEach(element => {
    
    element.querySelector('img').addEventListener('click', (evet) => {
        element.querySelector('.video_full').classList.add("video_full_active")
    })

    element.querySelector('.video_full img').addEventListener('click', () => {
        element.querySelector('.video_full').classList.remove("video_full_active")
    })
});