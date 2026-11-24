"use client";

import { useState } from "react"
import { JSX } from "react/jsx-runtime"
import Image from "next/image";
import Markdown from "markdown-to-jsx";

function getFaq(dict: FAQDict) {
    return [
    {
        question: (<p> {dict.questions[0].title[0]} <span className="submitly">Submitly</span> {dict.questions[0].title[1]}</p>),
        answer: (<p> {dict.questions[0].answer[0]} <span className="submitly">Submitly</span> <Markdown options={{forceInline: true}}>{dict.questions[0].answer[1]}</Markdown> </p>),
    },
    {
        question: (<p> Does <span className="submitly">Submitly</span> solve my homework?</p>),
        answer: (<p> <b>No!</b> <span className="submitly">Submitly</span> doesn't solve your homework or generate answers for you. Its purpose is to <i>automate</i> the submission process. You simply upload your completed homework, and <span className="submitly">Submitly</span> takes care of submitting it to your educational portal for you. You do the work, <span className="submitly">Submitly</span> handles the submission! </p>),
    },
    {
        question: (<p> Does <span className="submitly">Submitly</span> actually save my time?</p>),
        answer: (<p> <b>Absolutely!</b> <span className="submitly">Submitly</span> is designed to save you time by automating repetitive homework submission tasks that would otherwise have to be done manually. Instead of spending time <i>navigating</i> educational portals and submitting assignments one by one, <span className="submitly">Submitly</span> <i>streamlines</i> the process so you can get it done faster with less effort.</p>),
    },
    {
        question: (<p> Does <span className="submitly">Submitly</span> cost money?</p>),
        answer: (<p> <b>No!</b> <span className="submitly">Submitly</span> is, and plans to stay, completely free! There isn't any subscriptions, or hidden fees. We're committed to making high-quality, free tools that every student can use, and benefit from! </p>),
    },
    {
        question: (<p> Is my homework safe and private while using <span className="submitly">Submitly</span>?</p>),
        answer: (<p> Your privacy matters to us! Uploaded images and text are sent to third-party LLMs (such as Google Gemini) for processing. While we take privacy <i>very seriously</i> and strive to protect your data, no online service can guarantee <i>absolute</i> security. We recommend avoiding uploading images that contain <i>sensitive personal information</i>. We're committed to making <span className="submitly">Submitly</span> as safe and transparent as possible! </p>),
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

type FAQDict = {
    title: string,
    questions: {
        title: string[],
        answer: string[]
    }[]
}

export default function FAQ({ faqDict }: { faqDict: FAQDict }) {
  return (
    <div className="flex flex-col gap-5">
      {getFaq(faqDict).map((faq, index) => (<FAQItem faq={faq} key={index} />))}
    </div>
  )
}
