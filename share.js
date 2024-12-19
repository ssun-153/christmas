function shareMessage() {
    if (navigator.share) {
        try {
            const shareDate = {
                title: 'Christmas Card',
                Text: 'Check this card and Merry Christmas',
                url: window.location.href,
            };

            navigator.share(shareDate)
                .then(() => console.log('공유 성공!'))
                .catch(error => console.error('공유 실패: ', error.message));
        } catch (error) {
            console.error('공유 살패: ', error.message);
        }
    } else {
        alert('브라우저에서 Web share API 동작하지 않습니다');
    }
}