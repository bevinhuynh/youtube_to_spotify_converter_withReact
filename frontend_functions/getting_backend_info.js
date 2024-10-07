const redirect_uri = 'http://localhost:1410/open-browser';

let data = {
    playlist_url: ''
}

async function handle_authorization() {
    try {
        const response = await fetch('http://localhost:1410/open-browser', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if (response.ok) {
            chrome.tabs.create({ url: response.url });
        }
    } catch (error) {
        console.error('Error:', error);
    }
}


async function handle_playlist_creation() {

    let input_data = document.getElementsByClassName("input-box"); 
    let input_value = input_data[0].value;
    if (input_value.includes("youtube.com/playlist?list=")) {
        data.playlist_url = input_value;
        try {
            const response = await fetch('http://localhost:1410/start-convert', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data.playlist_url)
            })
            return "Converted!"

        }
        catch {
            return "Error occued with playlist conversion."
        }
    }
    else {
        return "Invalid playlist link."
    }
}

async function handle_youtube_authorization() {
    const response = await fetch('http://localhost:1410/youtube-auth',{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })

}

export default {handle_authorization, handle_playlist_creation, handle_youtube_authorization}
