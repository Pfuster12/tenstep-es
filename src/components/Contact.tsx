import * as React from 'react'

export default function Contact() {
    return (
        <r-grid id="contact" style={{
            backgroundImage: 'linear-gradient(-2deg, rgb(3, 43, 58), rgb(38, 24, 79))'
        }}
            class="p-24" columns="8">
            <r-cell class="flex flex-col items-center" span="row">
                <h1 className="text-white">Interested?</h1>
                <span className="mt-8 text-2xl text-gray-100">Contact us for more information and questions.</span>
            </r-cell>
            <r-cell  class="flex justify-center mt-8" span="row">
            <iframe width="540"
            height="900"
            frameBorder="0"
            src="https://b02eabfa.sibforms.com/serve/MUIEAKialapX0DQKWl-sXhmqEiVK0TGDl0MnFWg74dfLzEu_VX2VOSxb1M1izh64dQeSNwhXIo6lQI0aIN-9FcBuBtLN1w6WCNqhBsKgWDbA_wVRCNyb6zM5wvkyLxMtd2L_hF0Ii1ms4NeqzM5Nrve2ryIXSERTSlteZGSjVFfq5AVBpvYTMGB9YwGopDNExv6sdvWdoVc-7GkO"
            scrolling="auto"
            allowFullScreen
            style={{
                display: 'block',
                maxWidth: '100%'
            }}/>
            </r-cell>
        </r-grid>
    )
}
