import * as React from 'react'
import * as pdf from '../assets/pdf_icon.svg'

interface ResourceItemProps {
    href: string,
    highlight?: boolean,
    title: string
}

export default function ResourceItem(props: ResourceItemProps) {
    return (
        <a href={props.href} target="_blank">
            <div className={
                "transition-all duration-200 flex hover:bg-gray-800 flex-col p-8 rounded-lg m-8 items-center " +
                 (props.highlight ? " bg-opacity-75 bg-gray-800 border-orange-400 border border-solid" : "")}>
                {
                    props.highlight &&
                    <span className="self-end rounded-full uppercase font-bold bg-red-600 px-4 py-2 text-white">Latest</span>
                }
                <img className="w-40" src={pdf}/>
                <span className="text-2xl mt-8 text-white text-center max-w-lg">
                    {props.title}
                </span>
            </div>
        </a>
    )
}
