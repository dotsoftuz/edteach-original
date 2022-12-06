
import Image from 'next/image';
import faq from 'public/images/faq.svg';
import { Fragment, useState } from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";



function Icon({ id, open }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`${id === open ? "rotate-180" : ""
                } h-5 w-5 transition-transform`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
    );
}


const Faq = () => {
    const [open, setOpen] = useState(0);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };
    return (
        <section className="py-10 md:py-16">
            <div className="mx-auto  container">
                {/* <!-- heading text --> */}
                <div className="mb-5 sm:mb-10">
                    <h1 className="text-2xl font-bold text-slate-700 sm:text-3xl">Tez-tez so`raladigan savollar</h1>
                </div>
                {/* <!-- wrapper --> */}
                <div className="md:flex md:items-center md:justify-between md:gap-6">
                    <div className="mb-8 flex justify-center md:mb-0 scale-75">
                        <div className="max-h-[500px] md:max-h-max">
                            <Image src={faq} alt="faq images" />
                        </div>
                    </div>
                    <div className="md:w-6/12 mt-10">
                        <Fragment >
                            <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
                                <AccordionHeader onClick={() => handleOpen(1)}>
                                    Qanday ro`yxatdan o`tish kerak?
                                </AccordionHeader>
                                <AccordionBody>
                                    We`re not always in the position that we want to be at. We`re
                                    constantly growing. We`re constantly making mistakes. We`re constantly
                                    trying to express ourselves and actualize our dreams.
                                </AccordionBody>
                            </Accordion>
                            <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
                                <AccordionHeader onClick={() => handleOpen(2)}>
                                    Bundan faqat ta`limda foydalaniladimi?
                                </AccordionHeader>
                                <AccordionBody>
                                    We`re not always in the position that we want to be at. We`re
                                    constantly growing. We`re constantly making mistakes. We`re constantly
                                    trying to express ourselves and actualize our dreams.
                                </AccordionBody>
                            </Accordion>
                            <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
                                <AccordionHeader onClick={() => handleOpen(3)}>
                                    Qanday funksiyalarga ega?
                                </AccordionHeader>
                                <AccordionBody>
                                    We`re not always in the position that we want to be at. We`re
                                    constantly growing. We`re constantly making mistakes. We`re constantly
                                    trying to express ourselves and actualize our dreams.
                                </AccordionBody>
                            </Accordion>
                            <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
                                <AccordionHeader onClick={() => handleOpen(4)}>
                                    Real-time funksiya nima
                                </AccordionHeader>
                                <AccordionBody>
                                    We`re not always in the position that we want to be at. We`re
                                    constantly growing. We`re constantly making mistakes. We`re constantly
                                    trying to express ourselves and actualize our dreams.
                                </AccordionBody>
                            </Accordion>
                        </Fragment>
                    </div >
                </div >
            </div >
        </section >
    );
};

export default Faq;