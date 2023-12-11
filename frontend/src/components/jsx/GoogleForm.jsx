import React from 'react'
import '../styles/GoogleForm.css'

const GoogleForm = () => {
    return (
        <>
            <div className='container-googleform'>
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScEk7Q8__umCT6VKOPGH5wjb20KR4FUHzGEwg12v2raRftMCg/viewform?embedded=true"
                    title="event registration form"
                    width="640"
                    height="581"
                    frameborder="0"
                    marginheight="0"
                    marginwidth="0">Loading…</iframe>
            </div>
        </>
    )
}

export default GoogleForm