import * as React from 'react'

interface PartnerItemProps {
    image: string,
    name: string,
    location: string
}

export default function PartnerItem(props: PartnerItemProps) {
    return (
        <div className="flex flex-col items-center m-4">
            <img style={{
                objectFit: 'cover'
            }} className="w-40 h-40 rounded-full" src={props.image} />
            <h4 className="pt-4 text-center">{props.name}</h4>
            <span className="text-lg pt-1 text-center">{props.location}</span>
        </div>
    )
}
