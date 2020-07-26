import * as React from 'react'

interface AssignmentItemProps {
    image: string,
    title: string,
    href?: string,
    description: string
}

export default function AssignmentItem(props: AssignmentItemProps) {
    return (
        <div onClick={() => {
            props.href ? window.open(props.href, "_blank") : ""
        }} className="max-w-md m-8 p-4 rounded-md hover:bg-gray-100
        flex flex-col items-center cursor-pointer">
            <img className="w-32" src={props.image}/>
            <h4 className="mt-8">{props.title}</h4>
            <span className="text-xl text-center mt-4">{props.description}</span>
        </div>
    )
}
