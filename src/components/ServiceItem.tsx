import * as React from 'react'

interface ServiceItemProps {
    image: string,
    title: string,
    description: string
}

export default function ServiceItem(props: ServiceItemProps) {
    return (
        <div className="mt-16 flex max-w-3xl">
            <img className="w-64" src={props.image}/>
            <div className="flex flex-col ml-12">
                <h4>{props.title}</h4>
                <hr className="bg-primary mt-4 mr-24"/>
                <span className="text-xl mt-4">{props.description}</span>
            </div>
        </div>
    )
}
