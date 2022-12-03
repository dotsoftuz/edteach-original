import { useState } from 'react';
import Image from 'next/image';
import { BiChevronDownCircle } from 'react-icons/bi';
import faq from 'public/images/faq.svg';

const Faqbox = props => {
    let { text, description, heightBox } = props
    const [isToggled, setIsToggled] = useState(0);
    const handleClick = () => setIsToggled(!isToggled);

    return (
        <li className="relative mb-5">
            <button type="button" onClick={handleClick} className="w-full rounded-lg bg-blue-50 px-8 py-6 text-left">
                <div className="flex items-center justify-between">
                    <h4 className="font-medium text-slate-600">{text}</h4>
                    <div className="w-8 text-lg text-blue-500">
                        <BiChevronDownCircle />
                    </div>
                </div>
            </button>
            <div className={`${isToggled ? "max-h-[120px]" : "max-h-[0px]"}  relative max-h-0 overflow-hidden rounded-b-lg bg-blue-50/30 transition-all duration-500 `}>
                <div className="p-6">
                    <p className="text-slate-500">{description}</p>
                </div>
            </div>
        </li>
    )
}

const Faq = () => {
    return (
        <section className="py-16">
            <div className="mx-auto  container">
                {/* <!-- heading text --> */}
                <div className="mb-5 sm:mb-10">
                    <h1 className="text-2xl font-bold text-slate-700 sm:text-3xl">Tez-Tez So&apos;raladigan Savollar</h1>
                </div>
                {/* <!-- wrapper --> */}
                <div className="md:flex md:justify-between md:gap-6">
                    <div className="mb-8 flex justify-center md:mb-0 md:w-5/12">
                        <div className="max-h-[500px] md:max-h-max">
                            <Image src={faq} alt="faq images" />
                        </div>
                    </div>
                    <div className="md:w-6/12">
                        <div>
                            <ul>
                                <Faqbox
                                    heightBox="1"
                                    text="Lorem ipsum dolor sit, amet consectetur?"
                                    description="ipsum! Assumenda, dolorem nihil. Commodi, qui? Officiis provident, cumque perspiciatis magni commodi rem nihil,"
                                />
                                <Faqbox
                                    heightBox="2"
                                    text="Lorem ipsum dolor sit, amet consectetur?"
                                    description="ipsum! Assumenda, dolorem nihil. Commodi, qui? Officiis provident, cumque perspiciatis magni commodi rem nihil,"
                                />
                                <Faqbox
                                    heightBox="3"
                                    text="Lorem ipsum dolor sit, amet consectetur?"
                                    description="ipsum! Assumenda, dolorem nihil. Commodi, qui? Officiis provident, cumque perspiciatis magni commodi rem nihil,"
                                />
                                <Faqbox
                                    heightBox="4"
                                    text="Lorem ipsum dolor sit, amet consectetur?"
                                    description="ipsum! Assumenda, dolorem nihil. Commodi, qui? Officiis provident, cumque perspiciatis magni commodi rem nihil,"
                                />
                            </ul>
                        </div>
                    </div >
                </div >
            </div >
        </section >
    );
};

export default Faq;