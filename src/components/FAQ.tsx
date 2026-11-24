"use client";

import { useState } from "react"
import { JSX } from "react/jsx-runtime"
import Image from "next/image";
import Render from "./Render";

type FAQDict = {
    title: string,
    questions: {
        title: string,
        answer: string
    }[]
}

function getFaq(dict: FAQDict) {
    return [
    {
        question: (<p> <Render>{dict.questions[0].title}</Render> </p>),
        answer: (<p> <Render>{dict.questions[0].answer}</Render> </p>),
    },
    {
        question: (<p> <Render>{dict.questions[1].title}</Render> </p>),
        answer: (<p> <Render>{dict.questions[1].answer}</Render> </p>),
    },
    {
        question: (<p> <Render>{dict.questions[2].title}</Render> </p>),
        answer: (<p> <Render>{dict.questions[2].answer}</Render></p>),
    },
    {
        question: (<p> <Render>{dict.questions[3].title}</Render> </p>),
        answer: (<p> <Render>{dict.questions[3].answer}</Render> </p>),
    },
    {
        question: (<p> <Render>{dict.questions[4].title}</Render> </p>),
        answer: (<p> <Render>{dict.questions[4].answer}</Render> </p>),
    },
]
}

const FAQItem = ({faq}: { faq: { question: JSX.Element, answer: JSX.Element } } ) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex flex-col w-full px-3 border-b-2 border-black/50 dark:border-white/50 gap-5 text-start">
            <button
            className="w-full flex justify-between font-bold cursor-pointer text-start"
            onClick={() => setIsOpen(!isOpen)}>
                {faq.question}
                <Image src={"/chevron.svg"} alt="" width={24} height={24} className={` dark:invert ${isOpen ? 'transform rotate-180' : ''} transition-all duration-150 ease-in `} />
            </button>
            <div className={ ` grid transition-all duration-100 ease-in ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0' } ` }>
                <div className="overflow-hidden text-[#333] dark:text-[#bbb] pb-5">
                    {faq.answer}
                </div>
            </div>
        </div>
    )
}

export default function FAQ({ faqDict }: { faqDict: FAQDict }) {
  return (
    <div className="flex flex-col gap-5">
      {getFaq(faqDict).map((faq, index) => (<FAQItem faq={faq} key={index} />))}
    </div>
  )
}
